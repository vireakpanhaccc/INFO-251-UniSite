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
    if (err.status === 401 || err.status === 403) {
      window.location.href = '/login';
      return;
    }
    throw err;
  }
  const el = document.createElement('div');
  const scholarships = scholarshipData.filter(sch => sch.uni_id.includes(university._id));
  const programs = programsData.filter(prog => prog.uni_id === university._id);
  if (!university) return null;
  el.innerHTML = `
    <div class="university-page flex flex-col gap-4">
      <!-- University Header Section-->
      <section class="relative w-full h-44 sm:h-64 md:h-96 overflow-hidden bg-gray-200">
        <img class="w-full h-full object-cover brightness-50" src="${university.images.cover}" alt="${university.name} cover image">
        <div class="absolute left-4 md:left-8 bottom-4 md:bottom-8 flex items-start space-x-4">
          <img class="h-12 sm:h-20 md:h-28 object-cover shadow-lg" src="${university.images.logo}" alt="${university.name} logo">
          <div class="text-white">
            <h1 class=" xs:text-xl sm:text-2xl md:text-5xl font-bold">${university.name}</h1>
            <p class="text-md md:text-xl mt-2">${university.location.city}</p>
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
            <p class="mb-2"><strong>Website:</strong> <a href="${university.website}" target="_blank" class="text-blue-600 underline">${university.website}</a></p>
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
            <p class="mb-2 text-sm text-gray-500">Last Updated: ${university.last_updated}</p>
          </div>
        </div>
      </section>

      <!-- Programs Section-->
      <div class="px-4 md:px-8 lg:px-16 pt-6 pb-10 bg-blue-950">
        <h2 class="text-white text-center text-3xl font-semibold mb-6">Programs Offered</h2>
        <!-- List -->
        <ul id="progList" class="space-y-3">
          ${programCards(programs)}
        </ul>
      </div>
      <!-- Scholarships Section-->
      <section class="px-4 md:px-8 lg:px-16 pt-6 pb-10 bg-white">
        <h2 class="text-center text-3xl font-semibold mb-4">Available Scholarships</h2>
        <div class="card-container grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6 mb-10">
          ${scholarshipCards(scholarships)}
        </div>
      </section>

      <!-- Events Section-->
      <section class="px-4 md:px-8 lg:px-16 pt-6 pb-10 bg-[#9f6a08]">
        <h2 class=" text-white text-center text-3xl font-semibold mb-4">Upcoming Events</h2>
        <div class="flex flex-wrap items-center gap-6 w-full justify-center">
            ${eventCards(university.events)}
        </div>

      </section>

      <!-- Maps Section-->
      <section class="mt-2">
        <h2 class="text-center text-3xl font-semibold mb-5">Campus Map</h2>
        <div class="w-full h-80">
          <iframe src="${university.location.map}" class="w-full h-full" style="pointer-events:auto;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>
    </div>
  `;
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

