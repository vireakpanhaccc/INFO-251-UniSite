
export default function header(){
  const el = document.createElement('div');
  el.innerHTML = `
    <div class="bg-white border-b border-gray-300  fixed top-0 w-full z-[1000] shadow-md">
      <nav id="desktop-nav" class="flex items-center justify-between max-w-[1600px] mx-auto px-[5%] text-md lg:text-lg h-14">
        <div>
          <a href="#/"><img class="h-11 lg:h-14 w-auto active:brightness-80 active:scale-90" src="./images/logo/UniSites-Lanscape.png" alt="brand-logo"></a>
        </div>
        <div class="flex items-center gap-6">
          <div class="hidden md:flex gap-4">
            <a class="text-[#2c3e50ec] hover:underline active:brightness-80 active:scale-90 " href="#/" id="home">Home</a>
            <a class="text-[#2c3e50ec] hover:underline active:brightness-80 active:scale-90 " href="#/universities" id="universities">Universities</a>
            <a class="text-[#2c3e50ec] hover:underline active:brightness-80 active:scale-90 " href="#/majors" id="majors">Majors</a>
            <a class="text-[#2c3e50ec] hover:underline active:brightness-80 active:scale-90 " href="#/opportunities" id="opportunities">Opportunities</a>
            <a class="text-[#2c3e50ec] hover:underline active:brightness-80 active:scale-90 " href="#/forum" id="forum">Forum</a>
            <a class="text-[#2c3e50ec] hover:underline active:brightness-80 active:scale-90 " href="#/about" id="about">About</a>
          </div>
          <div class="flex items-center gap-4">
            <div class="flex items-center justify-between gap-4 relative">
              <!-- Profile Button -->
              <button id="profile-btn">
                <img src="./images/icon/my-profile.jpg" alt="user_profile" class="size-8 active:brightness-80 active:scale-90 border border-gray-300 rounded-full box-shadow-sm" />
              </button>
              <!-- Dropdown Menu -->
              <div id="profile-menu" class="hidden absolute top-0 right-0 mt-12 w-48 bg-white shadow-lg rounded-md overflow-hidden border border-gray-200 text-sm">
                <a href="#/profile" class="flex items-center gap-3 py-2 px-3 hover:bg-blue-200 active:brightness-90 text-[#2c3e50ec]"><img class="size-4" src="./images/icon/user.png" alt=""><p>Your profile</p></a>
                <a href="#/settings" class="flex items-center gap-3 py-2 px-3 hover:bg-blue-200 active:brightness-90 text-[#2c3e50ec]"><img class="size-4" src="./images/icon/settings.png" alt=""><p>Settings</p></a>
                <a href="#/signout" class="flex items-center gap-3 py-2 px-3 hover:bg-blue-200 active:brightness-90 text-[#2c3e50ec]"><img class="size-4" src="./images/icon/exit.png" alt=""><p>Sign out</p></a>
              </div>
              <!-- Mobile Menu Button -->
              <div class="h-6 border-l border-gray-300 md:hidden"></div>
              <button id="mobile-menu-btn" class="md:hidden">
                <img class="size-5 active:brightness-80 active:scale-90" src="./images/icon/menu.png" alt="menu-icon">
              </button>
            </div>
          </div>
        </div>
      </nav>
      <!-- Mobile Menu-->
      <nav id="mobile-nav" class="block md:hidden">
        <div id="mobile-menu" class="hidden flex-col items-center bg-white border-t border-gray-300 w-full text-center text-md lg:text-lg shadow-md">
          <a class="block w-full py-4 hover:bg-blue-200 active:brightness-80 border-b border-gray-300 text-[#2c3e50ec]" href="#/" id="home">Home</a>
          <a class="block w-full py-4 hover:bg-blue-200 active:brightness-80 border-b border-gray-300 text-[#2c3e50ec]" href="#/universities" id="universities">Universities</a>
          <a class="block w-full py-4 hover:bg-blue-200 active:brightness-80 border-b border-gray-300 text-[#2c3e50ec]" href="#/majors" id="majors">Majors</a>
          <a class="block w-full py-4 hover:bg-blue-200 active:brightness-80 border-b border-gray-300 text-[#2c3e50ec]" href="#/opportunities" id="opportunities">Opportunities</a>
          <a class="block w-full py-4 hover:bg-blue-200 active:brightness-80 border-b border-gray-300 text-[#2c3e50ec]" href="#/forum" id="forum">Forum</a>
          <a class="block w-full py-4 hover:bg-blue-200 active:brightness-80 border-b border-gray-300 text-[#2c3e50ec]" href="#/about" id="about">About</a>
        </div>
      </nav>
    </div>
  `;
  // Header Menu toggle
  const profileBtn = el.querySelector('#profile-btn');
  const profileMenu = el.querySelector('#profile-menu');
  
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
  })
  return el;
}
