import { t } from "../utils.js";

export default function footer(){
  const el = document.createElement('div');
  el.innerHTML = `
    <div class="text-gray-900 bg-gray-50 dark:text-gray-100 dark:bg-gray-800 py-5 px-2 border-t border-gray-200 dark:border-gray-700 shadow-md w-full">
      <div class="flex flex-wrap justify-between gap-5 py-0 px-[5%]">
        <div class="min-w-50 max-w-2xl">
          <h1 class="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">UniSites</h1>
          <p class="text-gray-600 dark:text-gray-300">${t("foot_desc")}</p>
          <h1 class="text-xl font-bold my-2 text-gray-900 dark:text-gray-100">Contact</h1>
          <p class="text-gray-600 dark:text-gray-300">${t("email")}: <a class="text-blue-600 dark:text-blue-400 hover:underline" href="mailto:unisites@aupp.edu.kh">unisites@aupp.edu.kh</a></p>
          <p class="text-gray-600 dark:text-gray-300">${t("phone")}: <a class="text-blue-600 dark:text-blue-400 hover:underline" href="tel:+85512345678">012 345 678</a></p>
          <p class="text-gray-600 dark:text-gray-300">${t("address")}: <a class="text-blue-600 dark:text-blue-400 hover:underline" href="https://maps.app.goo.gl/UACZ9YS73veDDU339" target="_blank">${t("foot_address")}</a></p>
        </div>
        <div class="min-w-50 max-w-xl">
            <h1 class="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Policies</h1>
            <ul>
              <li class="mb-2 active:opacity-70"><a class="hover:underline text-gray-600 dark:text-gray-300" href="#/">${t("privacy_policy")}</a></li>
              <li class="mb-2 active:opacity-70"><a class="hover:underline text-gray-600 dark:text-gray-300" href="#/">${t("terms_conditions")}</a></li>
              <li class="mb-2 active:opacity-70"><a class="hover:underline text-gray-600 dark:text-gray-300" href="#/">${t("cookie_policy")}</a></li>
              <li class="mb-2 active:opacity-70"><a class="hover:underline text-gray-600 dark:text-gray-300" href="#/">${t("disclaimer")}</a></li>
              <li class="mb-2 active:opacity-70"><a class="hover:underline text-gray-600 dark:text-gray-300" href="#/">${t("faqs")}</a></li>
              <li class="mb-2 active:opacity-70"><a class="hover:underline text-gray-600 dark:text-gray-300" href="#/">${t("copyright")}</a></li>
            </ul>
        </div>
        <div class="min-w-50 max-w-xl">
            <h1 class="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Quick Links</h1>
            <ul>
              <li class="mb-2 active:opacity-70"><a class="hover:underline text-gray-600 dark:text-gray-300" href="#/">${t("home")}</a></li>
              <li class="mb-2 active:opacity-70"><a class="hover:underline text-gray-600 dark:text-gray-300" href="#/universities">${t("universities")}</a></li>
              <li class="mb-2 active:opacity-70"><a class="hover:underline text-gray-600 dark:text-gray-300" href="#/majors">${t("majors")}</a></li>
              <li class="mb-2 active:opacity-70"><a class="hover:underline text-gray-600 dark:text-gray-300" href="#/opportunities">${t("opportunities")}</a></li>
              <li class="mb-2 active:opacity-70"><a class="hover:underline text-gray-600 dark:text-gray-300" href="#/forum">${t("forum")}</a></li>
              <li class="mb-2 active:opacity-70"><a class="hover:underline text-gray-600 dark:text-gray-300" href="#/about">${t("about")}</a></li>
            </ul>
        </div>
        <div class="min-w-50 max-w-fit-content">
          <h1 class="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Follow Us</h1>
          <p class="flex flex-wrap gap-3 mb-5">
            <a href="#/"><img class="size-10 brightness-80 transition-all hover:brightness-100 active:scale-90" src="./images/icon/facebook.png" alt=""></a>
            <a href="#/"><img class="size-10 brightness-80 transition-all hover:brightness-100 active:scale-90" src="./images/icon/instagram.png" alt=""></a>
            <a href="#/"><img class="size-10 brightness-80 transition-all hover:brightness-100 active:scale-90" src="./images/icon/telegram.png" alt=""></a>
            <a href="#/"><img class="size-10 brightness-80 transition-all hover:brightness-100 active:scale-90" src="./images/icon/twitter.png" alt=""></a>
            <a href="#/"><img class="size-10 brightness-80 transition-all hover:brightness-100 active:scale-90" src="./images/icon/linkedin.png" alt=""></a>
          </p>
          <h1 class="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Our partners</h1>
          <p class="flex flex-wrap gap-3 mb-5">
            <a href="#/"><img class="size-10 brightness-80 transition-all hover:brightness-100 active:scale-90" src="./images/icon/AUPP_Logo.png" alt="AUPP" title="AUPP"></a>
            <a href="#/"><img class="size-10 brightness-80 transition-all hover:brightness-100 active:scale-90" src="./images/icon/Institute_of_Technology_of_Cambodia_logo.png" alt="ITC" title="ITC"></a>
            <a href="#/"><img class="size-10 brightness-80 transition-all hover:brightness-100 active:scale-90" src="./images/icon/RUPP_logo.png" alt="PD" title="PD"></a>
            <a href="#/"><img class="size-10 brightness-80 transition-all hover:brightness-100 active:scale-90" src="./images/icon/images.png" alt="BuildBright" title="BuildBright"></a>
          </p>
        </div>
      </div>
      <div class="text-sm text-center border-t border-gray-200 dark:border-gray-700 pt-3 mt-3 px-[5%]">
        <p class="text-gray-600 dark:text-gray-300">© <strong><span id="year"></span></strong> UniSites. ${t("all_rights_reserved")}.</p>
      </div>
    </div>
  `;
  const yearEl = el.querySelector('#year');
  const currentYear = new Date().getFullYear();
  yearEl.textContent = currentYear;
  return el;
}