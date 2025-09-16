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
  let view = null;
  const {route, id} = parseHash();
  switch(route){
    case '': view = Home(); break;
    case 'universities': view = Universities(); break;
    case 'majors': view = Majors(); break;
    case 'scholarships': view = Scholarships(); break;
    case 'forum': view = Forum(); break;
    case 'about': view = About(); break;
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
