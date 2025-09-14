import router from './router.js'

const appEl = document.getElementById('app');
const yearEl = document.getElementById("year");
const menuBtn = document.getElementById("menu-btn");

yearEl.textContent = new Date().getFullYear();
menuBtn.addEventListener("click", () => {
  if(menuBtn.firstChild.src.includes("menu.png")){
    menuBtn.firstChild.src = './images/icon/close.png';
    menuBtn.firstChild.style.height = '15px';
    document.querySelector('.site-header .dynamic-nav').style.display ='block'
  } else {
    menuBtn.firstChild.src = './images/icon/menu.png';
    menuBtn.firstChild.style.height = '20px';
    document.querySelector('.site-header .dynamic-nav').style.display =''
  }
});

document.querySelectorAll('.site-header .dynamic-nav ul li').forEach(item => {item.addEventListener('click', () => {
  menuBtn.firstChild.src = './images/icon/menu.png';
  menuBtn.firstChild.style.height = '20px';
  document.querySelector('.site-header .dynamic-nav').style.display =''
})})








function render() {router(appEl)}

window.addEventListener("hashchange", render);
window.addEventListener("load", render);
