export default function NotFound() {
  const el = document.createElement("div");
  el.innerHTML = `
    <div class="text-center h-[calc(90vh-200px)] flex flex-col justify-center items-center">
      <h1 class="text-[6rem] mb-0 font-bold text-[#ff8222e7]">404</h1>
      <p class="text-2xl font-bold m-0 mb-2.5">Page not found</p>
      <p class="text-base text-gray-500 mb-5 max-w-[500px]">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <button class="bg-[#ff8222e7] text-white text-base px-5 py-2.5 border-none cursor-pointer rounded transition-colors duration-300 hover:bg-[#e67300] active:bg-[#cc6600]" onclick="window.location.href='#/'">
        Go back home
      </button>
    </div>
  `;
  return el;
}
