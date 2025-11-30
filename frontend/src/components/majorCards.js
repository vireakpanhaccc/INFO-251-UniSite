import { t } from "../utils.js";

export default function majorCards (majors){
  return majors.map(major => `
    <div class="uni-card min-h-[360px] border border-gray-300 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 relative max-w-[600px]">
      <div class="card-image relative mb-3 h-44">
        <img class="card-cover w-full h-full object-cover" src="${major.image}" alt="${major.name} Cover">
        <img class="card-cover w-full h-full object-cover" src="${major.image || ''}" alt="${major.name} Cover">
      </div>

      <div class="card-content px-4 pb-16">
        <h3 class="text-lg font-bold">
          ${major.name}
          <span class="text-sm text-gray-500 ml-2">(${major.discipline || ''})</span>
        </h3>

        <p class="text-sm text-gray-700 mt-1 line-clamp-3">${major.description}</p>

        <div class="mt-3 flex flex-wrap gap-2">
          ${Array.isArray(major.level) ? major.level.map(l => `<span class="px-2 py-0.5 bg-gray-100 text-xs rounded">${l}</span>`).join('') : ''}
        </div>

        <a class="absolute bottom-4 right-4 py-1.5 px-2 bg-[#2c3e50ec] text-sm text-white rounded hover:bg-[#2c3e50] active:brightness-80" href="#/majors/${major._id}">${t('visit_details')}</a>
      </div>
    </div>
  `).join('');
}
