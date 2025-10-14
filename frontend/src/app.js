import router from './router.js'

// Initial render 
const appEl = document.getElementById('app');
const headerEl = document.getElementById('header');
const footerEl = document.getElementById('footer');
const lang = localStorage.getItem('lang') || 'en';

function render() {router(appEl, headerEl, footerEl)}

window.addEventListener("hashchange", render);
window.addEventListener("load", render);







