import router from './router.js'

// Initial render 
// const appEl = document.getElementById('app');
// function render() {router(appEl)}

// window.addEventListener("hashchange", render);
// window.addEventListener("load", render);

// Header Menu toggle
const profileBtn = document.getElementById('profile-btn');
const profileMenu = document.getElementById('profile-menu');

profileBtn.addEventListener('click', () => {
  profileMenu.classList.toggle('hidden');
});

// Mobile Menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

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

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();








