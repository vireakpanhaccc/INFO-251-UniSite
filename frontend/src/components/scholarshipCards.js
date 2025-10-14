import { t } from "../utils.js";

export default function scholarshipCards (scholarships) {
  return scholarships.map(scholarship =>`
    <div class="uni-card h-[500px] border border-gray-300 shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 relative max-w-[600px]">
      <div class="card-image relative mb-3 border-b border-gray-300 flex flex-col items-center justify-center bg-gray-100">
        <img class="card-blur w-full h-full object-cover absolute inset-0 z-0 opacity-60 blur-sm" src="${scholarship.cover_image || ''}" alt="">
        <img class="card-cover w-auto h-[320px] object-contain max-h-[320px] min-h-[320px] relative z-10 shadow-xs" src="${scholarship.cover_image || ''}" alt="${scholarship.name ? scholarship.name.replace(/"/g, '&quot;') : ''} Campus">
      </div>
      <div class="card-content px-4">
        <h3 class="text-md font-bold">${scholarship.name || 'No Name Provided'}</h3>
        <p>${t('provider')}: ${scholarship.provider || 'Unknown'}</p>
        <p>${t('amount')}: ${scholarship.amount || 'N/A'}</p>
        <p>${t('deadline')}: ${scholarship.deadline || 'N/A'}</p>
        <a class="absolute bottom-4 right-4 py-1.5 px-2 bg-[#2c3e50ec] text-sm text-white rounded hover:bg-[#2c3e50] active:brightness-80" href="#/opportunities/${scholarship.id ?? scholarship._id}">${t('visit_details')}</a>
      </div>
    </div>
  `).join('');
}
