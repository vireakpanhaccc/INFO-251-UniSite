export default function scholarshipCards (scholarships) {
  return scholarships.map(scholarship =>`
    <div class="uni-card h-[500px] border border-gray-300 shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 relative max-w-[600px]">
      <div class="card-image relative mb-3 border-b border-gray-300">
        <img class="card-cover w-full h-full object-contain max-h-[320px] min-h-[320px] " src="${scholarship.cover_image}" alt="${scholarship.name} Campus">
      </div>
      <div class="card-content px-4">
        <h3 class="text-md font-bold">${scholarship.name}</h3>
        <p>Provider: ${scholarship.provider}</p>
        <p>Amount: ${scholarship.amount}</p>
        <p>Deadline: ${scholarship.deadline}</p>
        <a class="absolute bottom-4 right-4 py-1.5 px-2 bg-[#2c3e50ec] text-sm text-white rounded hover:bg-[#2c3e50] active:brightness-80" href="${scholarship.website}" target="_blank">Visit Details</a>
      </div>
    </div>
  `).join('');
}
