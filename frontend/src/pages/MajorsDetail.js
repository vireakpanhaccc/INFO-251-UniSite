import {majorsData} from '../data/majorsData.js';


export default function MajorsDetail(major_id) {
  const el = document.createElement('div');
  const major = majorsData.find(sch => sch.id === major_id);
  
  if (!major) return null;
  
  el.innerHTML = `
    <div class="university-page flex flex-col gap-4">
      <!-- Scholarship Header Section-->
      <section class="relative w-full h-44 sm:h-64 md:h-96 overflow-hidden bg-gray-200">
        <img class="w-full h-full object-cover brightness-50" src="${major.image}" alt="${major.name} cover image">
        <div class="absolute left-4 md:left-8 bottom-4 md:bottom-8 flex items-start space-x-4">
          <div class="text-white">
            <h1 class=" xs:text-xl sm:text-2xl md:text-5xl font-bold">${major.name}</h1>
            <p class="text-md md:text-xl mt-2">${major.provider || " "}</p>
          </div>
        </div>
      </section>
      <!-- Scholarship Details Section-->
      <section class="px-4 md:px-8 lg:px-16">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div class="col-span-2">
            <h2 class="text-3xl font-semibold mb-4">Major Information</h2>
            <p class="mb-2">${major.description}</p>
          </div>
          <div class="col-span-2 md:col-span-1">
            <p class="mb-2"><strong>Core Topics:</strong> ${major.core_topics.map(topic => `${topic}, `).join('')}</p>
            <p class="mb-2"><strong>Career Paths:</strong> ${major.career_paths.map(career => `${career}, `).join('')}</p>
          </div>
        </div>
      </section>

    </div>
  `;

  return el;
}