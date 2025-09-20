
export default function footer(){
  const el = document.createElement('div');
  el.innerHTML = `
    <div class="text-[#f3f3f3f8] bg-[#2c3e50ec] py-5 px-2 border-t border-gray-300 shadow-md w-full">
      <div class="flex flex-wrap justify-between gap-5 py-0 px-[5%]">
        <div class="min-w-50 max-w-2xl">
          <h1 class="text-xl font-bold mb-2">UniSites</h1>
          <p>UniSites is a platform dedicated to helping students find the best universities, majors, and scholarships in Cambodia. We also provide a forum for students to connect and share their experiences.</p>
          <h1 class="text-xl font-bold my-2">Contact</h1>
          <p>Email: <a href="mailto:unisites@aupp.edu.kh">unisites@aupp.edu.kh</a></p>
          <p>Phone: <a href="tel:+85512345678">+855 12 345 678</a></p>
          <p>Address: <a href="https://maps.app.goo.gl/UACZ9YS73veDDU339" target="_blank">Kilometer 6, 278H, Street 201R, Kroalkor Village, Unnamed Road, Phnom Penh</a></p>
        </div>
        <div class="min-w-50 max-w-xl">
            <h1 class="text-xl font-bold mb-2">Policies</h1>
            <ul>
              <li class="mb-2 active:opacity-70 "><a class="hover:underline"  href="#/">Privacy Policy</a></li>
              <li class="mb-2 active:opacity-70"><a class="hover:underline"  href="#/">Terms & Conditions</a></li>
              <li class="mb-2 active:opacity-70"><a class="hover:underline"  href="#/">Cookie Policy</a></li>
              <li class="mb-2 active:opacity-70"><a class="hover:underline"  href="#/">Disclaimer</a></li>
              <li class="mb-2 active:opacity-70"><a class="hover:underline"  href="#/">FAQs</a></li>
              <li class="mb-2 active:opacity-70"><a class="hover:underline"  href="#/">Copyright Notice</a></li>
            </ul> 
        </div>
        <div class="min-w-50 max-w-xl">
            <h1 class="text-xl font-bold mb-2">Quick Links</h1>
            <ul>
              <li class="mb-2 active:opacity-70"><a class="hover:underline" href="#/">Home</a></li>
              <li class="mb-2 active:opacity-70"><a class="hover:underline" href="#/universities">Universities</a></li>
              <li class="mb-2 active:opacity-70"><a class="hover:underline" href="#/majors">Majors</a></li>
              <li class="mb-2 active:opacity-70"><a class="hover:underline" href="#/opportunities">Opportunities</a></li>
              <li class="mb-2 active:opacity-70"><a class="hover:underline" href="#/forum">Forum</a></li>
              <li class="mb-2 active:opacity-70"><a class="hover:underline" href="#/about">About</a></li>
            </ul>
        </div>
        <div class="min-w-50 max-w-fit-content">
          <h1 class="text-xl font-bold mb-2">Follow Us</h1>
          <p class="flex flex-wrap gap-3 mb-5">
            <a href="#/"><img class="size-10 brightness-80 transition-all hover:brightness-100 active:scale-90" src="./images/icon/facebook.png" alt=""></a>
            <a href="#/"><img class="size-10 brightness-80 transition-all hover:brightness-100 active:scale-90" src="./images/icon/instagram.png" alt=""></a>
            <a href="#/"><img class="size-10 brightness-80 transition-all hover:brightness-100 active:scale-90" src="./images/icon/telegram.png" alt=""></a>
            <a href="#/"><img class="size-10 brightness-80 transition-all hover:brightness-100 active:scale-90" src="./images/icon/twitter.png" alt=""></a>
            <a href="#/"><img class="size-10 brightness-80 transition-all hover:brightness-100 active:scale-90" src="./images/icon/linkedin.png" alt=""></a>
          </p>
          <h1 class="text-xl font-bold mb-2">Our partners</h1>
          <p class="flex flex-wrap gap-3 mb-5">
            <a href="#/"><img class="size-10 brightness-80 transition-all hover:brightness-100 active:scale-90" src="./images/icon/AUPP_Logo.png" alt="AUPP" title="AUPP"></a>
            <a href="#/"><img class="size-10 brightness-80 transition-all hover:brightness-100 active:scale-90" src="./images/icon/Institute_of_Technology_of_Cambodia_logo.png" alt="ITC" title="ITC"></a>
            <a href="#/"><img class="size-10 brightness-80 transition-all hover:brightness-100 active:scale-90" src="./images/icon/RUPP_logo.png" alt="PD" title="PD"></a>
            <a href="#/"><img class="size-10 brightness-80 transition-all hover:brightness-100 active:scale-90" src="./images/icon/images.png" alt="BuildBright" title="BuildBright"></a>
          </p>
        </div>
      </div>
      <div class="text-sm text-center border-t border-gray-300 pt-3 mt-3 px-[5%]">
        <p>© <strong><span id="year"></span></strong> UniSites. All Rights Reserved.</p>
      </div>
    </div>
  `;
  const yearEl = el.querySelector('#year');
  const currentYear = new Date().getFullYear();
  yearEl.textContent = currentYear;
  return el;
}