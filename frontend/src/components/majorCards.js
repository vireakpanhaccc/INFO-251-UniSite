import { t } from "../utils.js";

export default function majorCards (majors){
  return majors.map(major =>`
    <div class="uni-card h-[400px] border border-gray-300 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 relative max-w-[600px]">
      <div class="card-image relative mb-3 h-52">
        <img class="card-cover w-full h-full object-cover" src="${major.image}" alt="${major.name} Cover">
      </div>
      <div class="card-content px-4">
        <h3 class="text-md font-bold">${major.name}</h3>
        <p>${major.description}</p>

        <a class="absolute bottom-4 right-4 py-1.5 px-2 bg-[#2c3e50ec] text-sm text-white rounded hover:bg-[#2c3e50] active:brightness-80" href="#/majors/${major._id}">${t('visit_details')}</a>
      </div>
    </div>
  `).join('');
}
