export default function scholarshipCards (scholarships) {
  return scholarships.map(scholarship =>`
    <div class="uni-card h-[400px] border border-gray-300 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 relative max-w-[600px]">
      <div class="card-image relative mb-3 h-52">
        <img class="card-cover w-full h-full object-cover" src="${scholarship.cover_image}" alt="${scholarship.name} Campus">
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
