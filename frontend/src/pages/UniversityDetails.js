import {universitiesData} from '../data/universitiesData.js';
import {programsData} from '../data/programsData.js';
import {scholarshipData} from '../data/scholarshipData.js';
import eventCards from '../components/eventCards.js';
import scholarshipCards from '../components/scholarshipCards.js';
import programCards from '../components/programCards.js';
import { api } from '../api.js';


export default async function UniversityDetails(uni_id) {
  let university;
  try {
    university = await api.get(`/universities/${uni_id}`);
  } catch (err) {
    // Optionally, display an error message in the UI
    const el = document.createElement('div');
    if(err.status === 404) {
      el.innerHTML = `
      <div class="flex flex-col items-center justify-center py-12 bg-yellow-50 rounded-lg shadow-md border border-yellow-200">
        <svg class="w-14 h-14 text-yellow-500 mb-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"/>
        </svg>
        <h2 class="text-2xl font-semibold text-yellow-700 mb-2">University Not Found</h2>
        <p class="text-yellow-600 text-center mb-4">The university you are looking for does not exist or has been removed.</p>
        <button class="mt-2 px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition" onclick="window.history.back()">Back</button>
      </div>
      `;
      return el;
    }
    else if(err.status === 401) {
      el.innerHTML = `
      <div class="flex flex-col items-center justify-center py-12 bg-blue-50 rounded-lg shadow-md border border-blue-200">
        <svg class="w-14 h-14 text-blue-500 mb-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"/>
        </svg>
        <h2 class="text-2xl font-semibold text-blue-700 mb-2">Unauthorized Access</h2>
        <p class="text-blue-600 text-center mb-4">You must be logged in to view this university's details.</p>
        <button class="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition" onclick="window.location.hash='#/login'">Go to Login</button>
      </div>
      `;
      return el;
    }
    else {
      el.innerHTML = `
      <div class="flex flex-col items-center justify-center py-12 bg-red-50 rounded-lg shadow-md border border-red-200">
        <svg class="w-14 h-14 text-red-500 mb-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"/>
        </svg>
        <h2 class="text-2xl font-semibold text-red-700 mb-2">Error Loading University</h2>
        <p class="text-red-600 text-center mb-4">An error occurred while fetching the university details. Please try again later.</p>
        <button class="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition" onclick="window.history.back()">Back</button>
      </div>
      `;
      return el;
    }
  }
  const el = document.createElement('div');
  const scholarships = scholarshipData.filter(sch => sch.uni_id.includes(university._id));
  const programs = programsData.filter(prog => prog.uni_id === university._id);
  if (!university) return null;
  el.innerHTML = `
    <div class="university-page flex flex-col gap-4 bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-200">
      <!-- University Header Section-->
      <section class="relative w-full h-44 sm:h-64 md:h-96 overflow-hidden bg-gray-200 dark:bg-gray-800">
        <img class="w-full h-full object-cover brightness-50" src="${university.images.cover}" alt="${university.name} cover image">
        <div class="absolute left-4 md:left-8 bottom-4 md:bottom-8 flex items-start space-x-4">
          <img class="h-12 sm:h-20 md:h-28 object-cover shadow-lg rounded" src="${university.images.logo}" alt="${university.name} logo">
          <div>
            <h1 class=" xs:text-xl sm:text-2xl md:text-5xl font-bold">${university.name}</h1>
            <p class="text-md md:text-xl mt-2 text-white/90">${university.location.city}</p>
          </div>
        </div>

      </section>

      <!-- University Details Section-->
      <section class="px-4 md:px-8 lg:px-16">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div class="col-span-2">
            <h2 class="text-3xl font-semibold mb-4">University Info</h2>
            <p class="mb-2">${university.description}</p>
          </div>
          <div class="col-span-2 md:col-span-1">
            <p class="mb-2"><strong>Location:</strong> ${university.location.address || 'Address not available'}, ${university.location.city}</p>
            <p class="mb-2"><strong>Phone:</strong> ${university.contact.phone || 'N/A'}</p>
            <p class="mb-2"><strong>Email:</strong> ${university.contact.email || 'N/A'}</p>
            <p class="mb-2"><strong>Website:</strong> <a href="${university.website}" target="_blank" class="text-blue-600 underline dark:text-blue-400">${university.website}</a></p>
            <p class="mb-2"><strong>Tuition Fees:</strong> ${university.tuition.min} - ${university.tuition.max} ${university.tuition.currency} (${university.tuition.period})</p>
            <p class="mb-2"><strong>Deadlines:</strong> ${university.admissions.deadlines || 'N/A'}</p>
            <p class="mb-2"><strong>Requirements:</strong> ${university.admissions.requirements.length > 0 ? university.admissions.requirements.join(', ') : 'N/A'}</p>
          </div>
          <div class="col-span-2 md:col-span-1">
            <p class="mb-2"><strong>Type:</strong> ${university.type}</p>
            <p class="mb-2"><strong>Established:</strong> ${university.established}</p>
            <p class="mb-2"><strong>Student Population:</strong> ${university.student_population || 'N/A'}</p>
            <p class="mb-2"><strong>Campus Size:</strong> ${university.campus.size || 'N/A'}</p>
            <p class="mb-2"><strong>Accreditation:</strong> ${university.accreditation || 'N/A'}</p>
            <p class="mb-2"><strong>Ranking:</strong> ${university.ranking ? `#${university.ranking}` : 'N/A'}</p>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">Last Updated: ${university.last_updated}</p>
          </div>
        </div>
      </section>

      <!-- Programs Section-->
      <div class="px-4 md:px-8 lg:px-16 pt-6 pb-10 bg-blue-950 dark:bg-blue-900">
        <h2 class="text-white text-center text-3xl font-semibold mb-6">Programs Offered</h2>
        <!-- List -->
        <ul id="progList" class="space-y-3">
          ${programCards(programs)}
        </ul>
      </div>
      <!-- Scholarships Section-->
      <section class="px-4 md:px-8 lg:px-16 pt-6 pb-10 bg-white dark:bg-gray-800">
        <h2 class="text-center text-3xl font-semibold mb-4">Available Scholarships</h2>
        <div class="card-container grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6 mb-10">
          ${scholarshipCards(scholarships)}
        </div>
      </section>

      <!-- Events Section-->
      <section class="px-4 md:px-8 lg:px-16 pt-6 pb-10 bg-[#9f6a08] dark:bg-[#7a4f06]">
        <h2 class=" text-white text-center text-3xl font-semibold mb-4">Upcoming Events</h2>
        <div class="flex flex-wrap items-center gap-6 w-full justify-center">
            ${eventCards(university.events)}
        </div>
      </section>

      <!-- Maps Section-->
      <section class="mt-2">
        <h2 class="text-center text-3xl font-semibold mb-5">Campus Map</h2>
        <div class="w-full h-80 rounded overflow-hidden border border-gray-200 dark:border-gray-700">
          <iframe src="${university.location.map}" class="w-full h-full" style="pointer-events:auto;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>
    </div>
  `;

  // Initialize theme from localStorage or system preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  // Theme toggle button wiring
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
  const toggleButtons = el.querySelectorAll('.toggle-details');
  toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
      const details = button.closest('li').querySelector('.program-details');
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

