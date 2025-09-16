import Home from './view/home.js';
import Universities from './view/Universities.js';
import Majors from './view/Majors.js';
import Scholarships from './view/Scholarships.js';
import Forum from './view/Forum.js';
import About from './view/About.js';
import NotFound from './view/NotFound.js';

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
    default: view = NotFound(); break;
  }
  appEl.innerHTML = '';
  if(view) appEl.appendChild(view);
}
