import { t } from "../utils.js";

export default function footer(){
  const el = document.createElement('div');
  el.innerHTML = `
    <div class="text-[#f3f3f3f8] bg-[#2c3e50ec] py-5 px-2 border-t border-gray-300 shadow-md w-full">
      <div class="flex flex-wrap justify-between gap-5 py-0 px-[5%]">
        <div class="min-w-50 max-w-2xl">
          <h1 class="text-xl font-bold mb-2">UniSites</h1>
          <p>${t("foot_desc")}</p>
          <h1 class="text-xl font-bold my-2">Contact</h1>
          <p>${t("email")}: <a href="mailto:unisites@aupp.edu.kh">unisites@aupp.edu.kh</a></p>
          <p>${t("phone")}: <a href="tel:+85512345678">012 345 678</a></p>
          <p>${t("address")}: <a href="https://maps.app.goo.gl/UACZ9YS73veDDU339" target="_blank">${t("foot_address")}</a></p>
        </div>
        <div class="min-w-50 max-w-xl">
            <h1 class="text-xl font-bold mb-2">Policies</h1>
            <ul>
              <li class="mb-2 active:opacity-70 "><a class="hover:underline"  href="#/">${t("privacy_policy")}</a></li>
              <li class="mb-2 active:opacity-70"><a class="hover:underline"  href="#/"></a>${t("terms_conditions")}</li>
              <li class="mb-2 active:opacity-70"><a class="hover:underline"  href="#/"></a>${t("cookie_policy")}</li>
              <li class="mb-2 active:opacity-70"><a class="hover:underline"  href="#/"></a>${t("disclaimer")}</li>
              <li class="mb-2 active:opacity-70"><a class="hover:underline"  href="#/"></a>${t("faqs")}</li>
              <li class="mb-2 active:opacity-70"><a class="hover:underline"  href="#/"></a>${t("copyright")}</li>
            </ul>
        </div>
        <div class="min-w-50 max-w-xl">
            <h1 class="text-xl font-bold mb-2">Quick Links</h1>
            <ul>
              <li class="mb-2 active:opacity-70"><a class="hover:underline" href="#/">${t("home")}</a></li>
              <li class="mb-2 active:opacity-70"><a class="hover:underline" href="#/universities">${t("universities")}</a></li>
              <li class="mb-2 active:opacity-70"><a class="hover:underline" href="#/majors">${t("majors")}</a></li>
              <li class="mb-2 active:opacity-70"><a class="hover:underline" href="#/opportunities">${t("opportunities")}</a></li>
              <li class="mb-2 active:opacity-70"><a class="hover:underline" href="#/forum">${t("forum")}</a></li>
              <li class="mb-2 active:opacity-70"><a class="hover:underline" href="#/about">${t("about")}</a></li>
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
        <p>© <strong><span id="year"></span></strong> UniSites. ${t("all_rights_reserved")}.</p>
      </div>
    </div>
  `;
  const yearEl = el.querySelector('#year');
  const currentYear = new Date().getFullYear();
  yearEl.textContent = currentYear;
  return el;
}