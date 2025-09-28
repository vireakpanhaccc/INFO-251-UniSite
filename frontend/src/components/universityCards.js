export default function universityCards (universities) {
  return universities.map(uni =>`
    <div class="uni-card h-[400px] border border-gray-300 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 relative max-w-[600px]">
      <div class="card-image relative mb-3 h-52">
        <img class="card-cover w-full h-full object-cover" src="${uni.images.cover}" alt="${uni.name} Campus">
        <img class="card-logo h-14 object-cover absolute bottom-[-15px] left-[10px]" src="${uni.images.logo}" alt="${uni.name} Logo">
      </div>
      <div class="card-content px-4">
        <h1 class="text-md font-bold">${uni.name}</h1>
        <p>Location: ${uni.location.city}</p>
        <p>Type: ${uni.type}</p>
        <p>Tuition: ${uni.tuition.min} - ${uni.tuition.max} ${uni.tuition.currency} (${uni.tuition.period})</p>
        <p>Ranking: ${'⭐'.repeat(uni.ranking)}</p>
        <a class="absolute bottom-4 right-4 py-1.5 px-2 bg-[#2c3e50ec] text-sm text-white rounded hover:bg-[#2c3e50] active:brightness-80" href="#/universities/${uni._id}">Visit Details</a>
      </div>
    </div>
  `).join('');
}
