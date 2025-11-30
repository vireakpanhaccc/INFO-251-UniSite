import { programsData } from '../data/programsData.js';
import { scholarshipData } from '../data/scholarshipData.js';
import eventCards from '../components/eventCards.js';
import scholarshipCards from '../components/scholarshipCards.js';
import programCards from '../components/programCards.js';
import { api } from '../api.js';

export default async function MajorDetails(major_id) {
  let major;
  try {
    major = await api.get(`/majors/${major_id}`);
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

  // Scholarships related to this major (support multiple possible fields)
  const scholarships = scholarshipData.filter(sch =>
    (Array.isArray(sch.majors) && sch.majors.includes(major._id)) ||
    sch.major_id === major._id ||
    (Array.isArray(sch.related_majors) && sch.related_majors.includes(major._id))
  );

  // Derive list of unique universities offering the major from programs
  const uniIds = [...new Set(programs.map(p => p.uni_id).filter(Boolean))];

  // Safe access helpers
  const cover = major.images?.cover || major.image || '';
  const icon = major.images?.icon || major.icon || '';
  const degreeLevel = major.degree_level || major.level || 'N/A';
  const duration = major.duration || 'Varies';
  const careers = major.typical_careers?.length ? major.typical_careers.join(', ') : (major.careers || 'N/A');
  const avgSalary = major.average_salary ? major.average_salary : 'N/A';
  const overview = major.description || major.overview || 'No overview available.';
  const requiredCourses = (major.required_courses && major.required_courses.length) ? major.required_courses.join(', ') : (major.prerequisites && major.prerequisites.length ? major.prerequisites.join(', ') : 'N/A');

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
          </div>

          <div>
            <p class="mb-2"><strong>Required Courses / Prerequisites:</strong> ${requiredCourses}</p>
            <p class="mb-2"><strong>Degree Level:</strong> ${degreeLevel}</p>
            <p class="mb-2"><strong>Typical Duration:</strong> ${duration}</p>
          </div>

          <div>
            <p class="mb-2"><strong>Universities Offering This Major:</strong> ${uniIds.length > 0 ? `${uniIds.length} found` : 'None listed'}</p>
            ${uniIds.length > 0 ? `<p class="text-sm text-gray-500 dark:text-gray-400">Click a program below to see the university offering it.</p>` : ''}
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">Last Updated: ${major.last_updated || 'N/A'}</p>
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

      <!-- Events Section -->
      <section class="px-4 md:px-8 lg:px-16 pt-6 pb-10 bg-[#9f6a08] dark:bg-[#7a4f06]">
        <h2 class=" text-white text-center text-3xl font-semibold mb-4">Upcoming Events & Workshops</h2>
        <div class="flex flex-wrap items-center gap-6 w-full justify-center">
            ${eventCards(major.events || [])}
        </div>
      </section>
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
