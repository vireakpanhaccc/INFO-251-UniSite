import { programsData } from '../data/programsData.js';
import { scholarshipData } from '../data/scholarshipData.js';
import scholarshipCards from '../components/scholarshipCards.js';
import programCards from '../components/programCards.js';
import universityCards from '../components/universityCards.js';
import { api } from '../api.js';

export default async function MajorDetails(major_id) {
  let major;
  let universities = [];
  try {
    major = await api.get(`/majors/${major_id}`);
    // fetch all universities and filter to those related to this major
    try {
      const allUnis = await api.get('/home/universities');
      const uniSet = new Set();

      // collect ids from major (supports universitiesID array or universities objects/ids)
      if (Array.isArray(major.universitiesID) && major.universitiesID.length) {
      major.universitiesID.forEach(u => u && uniSet.add(String(u)));
      } else if (Array.isArray(major.universities) && major.universities.length) {
      major.universities.forEach(u => {
        if (!u) return;
        if (typeof u === 'object') {
        const id = u._id || u.id || u.uni_id || u.uniId || null;
        if (id) uniSet.add(String(id));
        } else {
        uniSet.add(String(u));
        }
      });
      }

      // also include universities referenced by programs that reference this major
      programsData.forEach(p => {
      const related = (Array.isArray(p.majors) && p.majors.includes(major._id)) || p.major_id === major._id || p.major === major._id;
      if (!related) return;
      const pid = p.uni_id || p.uni || p.university_id || null;
      if (pid) uniSet.add(String(pid));
      });

      // filter fetched universities to only those in uniSet (compare by common id fields)
      universities = Array.isArray(allUnis) ? allUnis.filter(u => {
      const id = u._id || u.id || u.uni_id || u.uniId || u.university_id || null;
      return id && uniSet.has(String(id));
      }) : [];
    } catch (e) {
      universities = [];
    }
  } catch (err) {
    const el = document.createElement('div');
    if (err.status === 404) {
      el.innerHTML = `
      <div class="flex flex-col items-center justify-center py-12 bg-yellow-50 rounded-lg shadow-md border border-yellow-200">
        <svg class="w-14 h-14 text-yellow-500 mb-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"/>
        </svg>
        <h2 class="text-2xl font-semibold text-yellow-700 mb-2">Major Not Found</h2>
        <p class="text-yellow-600 text-center mb-4">The major you are looking for does not exist or has been removed.</p>
        <button class="mt-2 px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition" onclick="window.history.back()">Back</button>
      </div>
      `;
      return el;
    } else if (err.status === 401) {
      el.innerHTML = `
      <div class="flex flex-col items-center justify-center py-12 bg-blue-50 rounded-lg shadow-md border border-blue-200">
        <svg class="w-14 h-14 text-blue-500 mb-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"/>
        </svg>
        <h2 class="text-2xl font-semibold text-blue-700 mb-2">Unauthorized Access</h2>
        <p class="text-blue-600 text-center mb-4">You must be logged in to view this major's details.</p>
        <button class="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition" onclick="window.location.hash='#/login'">Go to Login</button>
      </div>
      `;
      return el;
    } else {
      el.innerHTML = `
      <div class="flex flex-col items-center justify-center py-12 bg-red-50 rounded-lg shadow-md border border-red-200">
        <svg class="w-14 h-14 text-red-500 mb-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"/>
        </svg>
        <h2 class="text-2xl font-semibold text-red-700 mb-2">Error Loading Major</h2>
        <p class="text-red-600 text-center mb-4">An error occurred while fetching the major details. Please try again later.</p>
        <button class="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition" onclick="window.history.back()">Back</button>
      </div>
      `;
      return el;
    }
  }

  if (!major) return null;

  const el = document.createElement('div');

  // Programs that reference this major (supporting both `majors` array or single `major_id` field)
  const programs = programsData.filter(prog =>
    (Array.isArray(prog.majors) && prog.majors.includes(major._id)) ||
    prog.major_id === major._id ||
    prog.major === major._id
  );

  // Scholarships related to this major:
  // Prefer explicit scholarshipsID on major, otherwise fallback to matching by majors in scholarship data
  let scholarships = [];
  if (Array.isArray(major.scholarshipsID) && major.scholarshipsID.length) {
    const idSet = new Set(major.scholarshipsID);
    scholarships = scholarshipData.filter(sch => idSet.has(sch.id) || idSet.has(sch._id) || idSet.has(Number(sch.id)));
  } else {
    scholarships = scholarshipData.filter(sch =>
      (Array.isArray(sch.majors) && sch.majors.includes(major._id)) ||
      sch.major_id === major._id ||
      (Array.isArray(sch.related_majors) && sch.related_majors.includes(major._id))
    );
  }

  universities = [];
  let uniIds = [];
  try {
    const allUnis = await api.get('/universities');
    const uniSet = new Set();

    // collect ids from major (supports universitiesID array or universities objects/ids)
    if (Array.isArray(major.universitiesID) && major.universitiesID.length) {
      major.universitiesID.forEach(u => u && uniSet.add(String(u)));
    } else if (Array.isArray(major.universities) && major.universities.length) {
      major.universities.forEach(u => {
        if (!u) return;
        if (typeof u === 'object') {
          const id = u._id || u.id || u.uni_id || u.uniId || null;
          if (id) uniSet.add(String(id));
        } else {
          uniSet.add(String(u));
        }
      });
    }

  // Derive list of unique universities offering the major from major.universities / universitiesID and from programs' uni_id
  const uniFromMajor = new Set();
  if (Array.isArray(major.universitiesID) && major.universitiesID.length) {
    major.universitiesID.forEach(u => u && uniFromMajor.add(u));
  } else if (Array.isArray(major.universities) && major.universities.length) {
    major.universities.forEach(u => u && uniFromMajor.add(u));
  }

  const uniFromPrograms = new Set(programs.map(p => p.uni_id).filter(Boolean));
  const allUniIds = new Set([...uniFromMajor, ...uniFromPrograms]);
  uniIds = [...allUniIds];

  // Build a map of uni id -> display name when possible (try major.universities objects and program fields)
  const uniNameMap = new Map();
  if (Array.isArray(major.universities)) {
    major.universities.forEach(u => {
      if (!u) return;
      if (typeof u === 'object') {
        const id = u._id || u.id || u.uni_id || u.uniId || null;
        const name = u.name || u.title || u.universityName || u.uni_name;
        if (id) uniNameMap.set(id, name || String(id));
        else if (u.name) uniNameMap.set(u.name, u.name);
      } else {
        uniNameMap.set(u, String(u));
      }
    });
  }

  // Use program-level names if available
  programs.forEach(p => {
    const id = p.uni_id || p.uni || p.university_id || null;
    if (!id) return;
    const name = p.uni_name || p.universityName || p.university || p.uniTitle || p.uni || null;
    if (name) uniNameMap.set(id, name);
    else if (!uniNameMap.has(id)) uniNameMap.set(id, String(id));
  });

  // Final list of university objects to render
  const uniList = uniIds.map(id => ({
    id,
    name: uniNameMap.get(id) || String(id)
  }));

  // Use fetched university objects when available, otherwise fall back to the uniList
  const allUniIdsStr = new Set([...allUniIds].map(String));
  universities = Array.isArray(allUnis)
    ? allUnis.filter(u => {
        const id = u._id || u.id || u.uni_id || u.uniId || u.university_id || null;
        return id && allUniIdsStr.has(String(id));
      })
    : uniList;
  } catch (e) {
    universities = [];
  }

  // Safe access helpers and adapted field names from the new structure
  const cover = major.image || major.images?.cover || '';
  const icon = major.icon || major.images?.icon || '';
  const degreeLevel = Array.isArray(major.level) ? major.level.join(', ') : (major.level || major.degree_level || 'N/A');
  const duration = major.duration || 'Varies';
  const careers = Array.isArray(major.typicalCareers) && major.typicalCareers.length
    ? major.typicalCareers.join(', ')
    : (Array.isArray(major.typical_careers) && major.typical_careers.length ? major.typical_careers.join(', ') : (major.careers || 'N/A'));
  let avgSalary = 'N/A';
  if (major.averageSalary) {
    avgSalary = typeof major.averageSalary === 'number' ? `${major.averageSalary}` : major.averageSalary;
  } else if (typeof major.minSalary === 'number' || typeof major.maxSalary === 'number') {
    const min = typeof major.minSalary === 'number' ? major.minSalary : '?';
    const max = typeof major.maxSalary === 'number' ? major.maxSalary : '?';
    avgSalary = `${min} - ${max}`;
  }
  const overview = major.description || major.overview || 'No overview available.';
  const requiredCourses = Array.isArray(major.requirements) && major.requirements.length
    ? major.requirements.join(', ')
    : (Array.isArray(major.required_courses) && major.required_courses.length ? major.required_courses.join(', ') : (major.prerequisites && major.prerequisites.length ? major.prerequisites.join(', ') : 'N/A'));

  // Additional optional data
  const discipline = major.discipline || major.field || 'N/A';
  const minDemand = major.minDemand || major.demand || 'N/A';
  const keywords = Array.isArray(major.keywords) ? major.keywords.join(', ') : (major.tags || 'N/A');

  el.innerHTML = `
    <div class="major-page flex flex-col gap-4 bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-200">
      <!-- Major Header Section -->
      <section class="relative w-full h-44 sm:h-56 md:h-72 overflow-hidden bg-gray-200 dark:bg-gray-800">
        ${cover ? `<img class="w-full h-full object-cover brightness-50" src="${cover}" alt="${major.name} cover image">` : ''}
        <div class="absolute left-4 md:left-8 bottom-4 md:bottom-8 flex items-start space-x-4">
          ${icon ? `<img class="h-12 sm:h-20 md:h-28 object-cover shadow-lg rounded" src="${icon}" alt="${major.name} icon">` : ''}
          <div>
            <h1 class=" xs:text-xl sm:text-2xl md:text-4xl font-bold">${major.name}</h1>
            <p class="text-md md:text-lg mt-2 text-white/90">${degreeLevel} • ${duration}</p>
            <p class="text-sm text-white/80 mt-1">${discipline} • Demand: ${minDemand}</p>
          </div>
        </div>
      </section>

      <!-- Major Details -->
      <section class="px-4 md:px-8 lg:px-16">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="col-span-2">
            <h2 class="text-3xl font-semibold mb-3">Overview</h2>
            <p class="mb-2">${overview}</p>
            <p class="mb-2"><strong>Typical Careers:</strong> ${careers}</p>
            <p class="mb-2"><strong>Average Salary:</strong> ${avgSalary}</p>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><strong>Keywords:</strong> ${keywords}</p>
          </div>

          <div>
            <p class="mb-2"><strong>Requirements:</strong> ${requiredCourses}</p>
            <p class="mb-2"><strong>Degree Level(s):</strong> ${degreeLevel}</p>
            <p class="mb-2"><strong>Typical Duration:</strong> ${duration}</p>
          </div>

          <div>
            <p class="mb-2"><strong>Universities Offering This Major:</strong> ${uniIds.length > 0 ? `${uniIds.length} found` : 'None listed'}</p>
            ${uniIds.length > 0 ? `<p class="text-sm text-gray-500 dark:text-gray-400">Click a university below for details.</p>` : ''}
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">Last Updated: ${major.last_updated || 'N/A'}</p>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">Scholarships Listed: ${scholarships.length}</p>
          </div>
        </div>
      </section>

      <!-- Programs Section -->
      <div class="px-4 md:px-8 lg:px-16 pt-6 pb-10 bg-blue-950 dark:bg-blue-900">
        <h2 class="text-white text-center text-3xl font-semibold mb-6">Programs & Degrees Related</h2>
        <ul id="progList" class="space-y-3">
          ${programCards(programs)}
        </ul>
      </div>

      <!-- Scholarships Section -->
      <section class="px-4 md:px-8 lg:px-16 pt-6 pb-10 bg-white dark:bg-gray-800">
        <h2 class="text-center text-3xl font-semibold mb-4">Scholarships for This Major</h2>
        <div class="card-container grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6 mb-10">
          ${scholarshipCards(scholarships)}
        </div>
      </section>

      <!-- Related Universities Section (replaces Events) -->
      <div class="uni-grid card-container grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6 mb-10 px-4 md:px-8 lg:px-16">
        <h2 class="col-span-full text-center text-3xl font-semibold mb-4">Universities Offering This Major</h2>
        ${universityCards(universities)}
      </div>
    </div>
  `;

  // Theme initialization (kept from original)
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  const themeToggle = el.querySelector('#themeToggle');
  if (themeToggle) {
    const updateLabel = () => {
      themeToggle.textContent = document.documentElement.classList.contains('dark') ? 'Light Mode' : 'Dark Mode';
    };
    updateLabel();
    themeToggle.addEventListener('click', () => {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      updateLabel();
    });
  }

  // Wire up toggles inside program cards (if any)
  const toggleButtons = el.querySelectorAll('.toggle-details');
  toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
      const details = button.closest('li').querySelector('.program-details');
      if (!details) return;
      if (details.classList.contains('hidden')) {
        details.classList.remove('hidden');
        button.textContent = 'Hide Details';
      } else {
        details.classList.add('hidden');
        button.textContent = 'View Details';
      }
    });
  });

  return el;
}
