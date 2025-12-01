import { t } from "../utils.js";


export default function header(user_profile){
  const el = document.createElement('div');
  const user_image = user_profile?.avatar ? escapeAttr(user_profile.avatar) : null;
  el.innerHTML = `
    <div class="bg-white border-b border-gray-300 dark:bg-gray-800 dark:border-gray-700 fixed top-0 w-full z-[1000] shadow-md">
      <nav id="desktop-nav" class="flex items-center justify-between max-w-[1600px] mx-auto px-[5%] text-md lg:text-lg h-14">
        <div>
          <a href="#/"><img class="h-11 lg:h-14 w-auto active:brightness-80 active:scale-90" src="./images/logo/UniSites-Lanscape.png" alt="brand-logo"></a>
        </div>
        <div class="flex items-center gap-6">
          <div class="hidden md:flex gap-4">
            <a class="text-[#2c3e50ec] dark:text-gray-200 hover:underline active:brightness-80 active:scale-90 " href="#/" id="home">${t('home')}</a>
            <a class="text-[#2c3e50ec] dark:text-gray-200 hover:underline active:brightness-80 active:scale-90 " href="#/universities" id="universities">${t('universities')}</a>
            <a class="text-[#2c3e50ec] dark:text-gray-200 hover:underline active:brightness-80 active:scale-90 " href="#/majors" id="majors">${t('majors')}</a>
            <a class="text-[#2c3e50ec] dark:text-gray-200 hover:underline active:brightness-80 active:scale-90 " href="#/opportunities" id="opportunities">${t('opportunities')}</a>
            <a class="text-[#2c3e50ec] dark:text-gray-200 hover:underline active:brightness-80 active:scale-90 " href="#/forum" id="forum">${t('forum')}</a>
            <a class="text-[#2c3e50ec] dark:text-gray-200 hover:underline active:brightness-80 active:scale-90 " href="#/about" id="about">${t('about')}</a>
          </div>
          <div class="flex items-center gap-4">
            <div class="flex items-center justify-between gap-4 relative">
              <!-- Profile Button -->
              <button id="profile-btn">
                <img src="${user_image || './images/icon/user.png'}" alt="user_profile" class="size-8 active:brightness-80 active:scale-90 border border-gray-300 dark:border-gray-600 rounded-full box-shadow-sm" />
              </button>

              <!-- Dark Mode Toggle (class based) -->
              <button id="dark-mode-toggle" title="Toggle dark mode"
                onclick="(function(){const d=document.documentElement; const isDark = d.classList.toggle('dark'); try{localStorage.setItem('theme', isDark ? 'dark' : 'light');}catch(e){} })()"
                class="ml-2 p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 active:brightness-90">
                <span class="hidden dark:inline">🌙</span>
                <span class="inline dark:hidden">☀️</span>
              </button>

              <!-- Dropdown Menu -->
              <div id="profile-menu" class="hidden absolute top-0 right-0 mt-12 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-md overflow-hidden border border-gray-200 dark:border-gray-700 text-sm">
                <a href="#/profile" class="flex items-center gap-3 py-2 px-3 hover:bg-blue-200 dark:hover:bg-blue-700 active:brightness-90 text-[#2c3e50ec] dark:text-gray-200"><img class="size-4" src="./images/icon/user.png" alt=""><p>Your profile</p></a>
                <a href="#/settings" class="flex items-center gap-3 py-2 px-3 hover:bg-blue-200 dark:hover:bg-blue-700 active:brightness-90 text-[#2c3e50ec] dark:text-gray-200"><img class="size-4" src="./images/icon/settings.png" alt=""><p>Settings</p></a>
                <a href="#/" id="signout" class="flex items-center gap-3 py-2 px-3 hover:bg-blue-200 dark:hover:bg-blue-700 active:brightness-90 text-[#2c3e50ec] dark:text-gray-200"><img class="size-4" src="./images/icon/exit.png" alt=""><p>Sign out</p></a>
              </div>

              <!-- Mobile Menu Button -->
              <div class="h-6 border-l border-gray-300 dark:border-gray-700 md:hidden"></div>
              <button id="mobile-menu-btn" class="md:hidden">
                <img class="size-5 active:brightness-80 active:scale-90" src="./images/icon/menu.png" alt="menu-icon">
              </button>
            </div>
          </div>
        </div>
      </nav>
      <!-- Mobile Menu-->
      <nav id="mobile-nav" class="block md:hidden">
        <div id="mobile-menu" class="hidden flex-col items-center bg-white dark:bg-gray-800 border-t border-gray-300 dark:border-gray-700 w-full text-center text-md lg:text-lg shadow-md">
          <a class="block w-full py-4 hover:bg-blue-200 dark:hover:bg-blue-700 active:brightness-80 border-b border-gray-300 dark:border-gray-700 text-[#2c3e50ec] dark:text-gray-200" href="#/" id="home">${t('home')}</a>
          <a class="block w-full py-4 hover:bg-blue-200 dark:hover:bg-blue-700 active:brightness-80 border-b border-gray-300 dark:border-gray-700 text-[#2c3e50ec] dark:text-gray-200" href="#/universities" id="universities">${t('universities')}</a>
          <a class="block w-full py-4 hover:bg-blue-200 dark:hover:bg-blue-700 active:brightness-80 border-b border-gray-300 dark:border-gray-700 text-[#2c3e50ec] dark:text-gray-200" href="#/majors" id="majors">${t('majors')}</a>
          <a class="block w-full py-4 hover:bg-blue-200 dark:hover:bg-blue-700 active:brightness-80 border-b border-gray-300 dark:border-gray-700 text-[#2c3e50ec] dark:text-gray-200" href="#/opportunities" id="opportunities">${t('opportunities')}</a>
          <a class="block w-full py-4 hover:bg-blue-200 dark:hover:bg-blue-700 active:brightness-80 border-b border-gray-300 dark:border-gray-700 text-[#2c3e50ec] dark:text-gray-200" href="#/forum" id="forum">${t('forum')}</a>
          <a class="block w-full py-4 hover:bg-blue-200 dark:hover:bg-blue-700 active:brightness-80 border-b border-gray-300 dark:border-gray-700 text-[#2c3e50ec] dark:text-gray-200" href="#/about" id="about">${t('about')}</a>
        </div>
      </nav>
    </div>
  `;


if(user_profile){
  // Remove sign out and profile menu if not needed
  const signoutBtn = el.querySelector('#signout');
  if (signoutBtn) {
    signoutBtn.style.display = '';
  }
  const profileMenu = el.querySelector('#profile-menu');
  if (profileMenu) {
    profileMenu.style.display = '';
  }

  // Header Menu toggle
  const profileBtn = el.querySelector('#profile-btn');
  
  profileBtn.addEventListener('click', () => {
    profileMenu.classList.toggle('hidden');
  });
  
  // Mobile Menu toggle
  const mobileMenuBtn = el.querySelector('#mobile-menu-btn');
  const mobileMenu = el.querySelector('#mobile-menu');
  
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  // Close the menu if clicked outside
  window.addEventListener('click', (e) => {
    if (!profileBtn.contains(e.target) && !profileMenu.contains(e.target)) {
      profileMenu.classList.add('hidden');
    }
    if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)){
      mobileMenu.classList.add('hidden');
    }
  });

  // Remove #/login link if present
  const loginLink = el.querySelector('a[href="#/login"]');
  if (loginLink) {
    loginLink.remove();
  }
}
else{
  const profileBtn = el.querySelector('#profile-btn');
  if (profileBtn) {
    profileBtn.addEventListener('click', () => {
      window.location.hash = '#/login';
    });
  }
}
// Sign out
const signoutBtn = el.querySelector('#signout');
if (signoutBtn) {
  signoutBtn.addEventListener('click', () => {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user_profile');
    alert('You have been signed out.');
    window.location.hash = '#/login';
    window.location.reload();
  });
}

// Highlight active link
const currentHash = window.location.hash || '#/';
const hash = currentHash.split('/')[1] ? `#/${currentHash.split('/')[1]}` : '#/';
const navLinks = el.querySelectorAll('a');
navLinks.forEach(link => {
    if (link.getAttribute('href') === hash) {
      link.classList.add('font-bold', 'underline', 'text-orange-400');
    } else {
      link.classList.remove('font-bold', 'underline', 'text-orange-400');
    }
  });
  return el;
}


// Utilities
function escapeHtml(str) {
  return String(str ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function escapeAttr(str) {
  return escapeHtml(str).replaceAll('"', '&quot;');
}