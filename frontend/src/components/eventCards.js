
export default function eventCards (events) {
  return events.map(event => `
    <div class="event-card border bg-white border-gray-300 shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 min-w-[320px] max-w-[320px]">
      <div class="card-image w-full p-4">
        <img class="card-cover size-[300px] object-cover shadow-md hover:scale-105 transition-transform duration-300" src="${event.image}" alt="${event.title} Image">
      </div>
      <div class="card-content px-4 pb-8  text-center">
        <h1 class="text-md font-bold min-h-[48px]">${event.title}</h1>
        <hr class="border-t border-gray-300 my-3">
        <p class="text-sm mb-1"><strong>Date:</strong> ${event.date}</p>
        <p class="text-sm mb-1"><strong>Time:</strong> ${event.time}</p>
        <p class="text-sm mb-6"><strong>Location:</strong> ${event.location}</p>
        <a class="py-2 px-4 text-sm text-[#d38d0a] border-2 border-[orange] hover:bg-[orange] hover:text-white active:brightness-80" href="#/events/${event.id}">Read More</a>
      </div>
    </div>`).join('');
}
