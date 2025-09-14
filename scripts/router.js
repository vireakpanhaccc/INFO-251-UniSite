import Home from './view/home.js';
import Universities from './view/Universities.js';
import Majors from './view/Majors.js';
import Scholarships from './view/Scholarships.js';
import Forum from './view/Forum.js';
import About from './view/About.js';


function parseHash() {
  const h = location.hash || '#/';
  const [_, route, id] = h.split('/'); // '#','route','id'
  return { route: route || '', id };
}

export default function router(appEl){
  document.querySelectorAll('.site-header nav a').forEach(item => item.classList.remove('active'));
  let activeNav;
  let view = null;
  const {route, id} = parseHash();
  switch(route){
    case '':
      activeNav = document.getElementById('home');
      if(activeNav) activeNav.classList.add('active')

      view = Home();
      break;
    case 'universities':
      activeNav = document.getElementById('universities');
      if(activeNav) activeNav.classList.add('active')

      view = Universities();
      break;
    case 'majors':
      activeNav = document.getElementById('majors');
      if(activeNav) activeNav.classList.add('active')

      view = Majors();
      break;
    case 'scholarships':
      activeNav = document.getElementById('scholarships');
      if(activeNav) activeNav.classList.add('active')

      view = Scholarships();
      break;
    case 'forum':
      activeNav = document.getElementById('forum');
      if(activeNav) activeNav.classList.add('active')

      view = Forum();
      break;
    case 'about':
      activeNav = document.getElementById('about');
      if(activeNav) activeNav.classList.add('active')

      view = About();
      break;
    default:
      appEl.innerHTML = `
          <div class="not-found-container">
            <h1 class="error-code">404</h1>
            <p class="error-message">Page not found</p>
            <p class="info">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
            <button class="home-btn" onclick="window.location.href='#/'">Go back home</button>
          </div>
      `;
  }
  appEl.innerHTML = '';
  if(view) appEl.appendChild(view);
}
