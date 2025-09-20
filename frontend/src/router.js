import Home from './pages/Home.js';
import Universities from './pages/Universities.js';
import UniversityDetails from './pages/UniversityDetails.js';
import Majors from './pages/Majors.js';
import Opportunities from './pages/Opportunities.js';
import Forum from './pages/Forum.js';
import About from './pages/About.js';
import NotFound from './pages/NotFound.js';
import header from './components/header.js';
import footer from './components/footer.js';

function parseHash() {
  const h = location.hash || '#/';
  const [_, route, id] = h.split('/'); // '#','route','id'
  return { route: route || '', id };
}

export default async function router(appEl, headerEl, footerEl) {
  let view = null;
  const {route, id} = parseHash();
  switch(route){
    case '': view = Home(); break;
    case 'universities': 
      if(id) {
          view = await UniversityDetails(id);
          if (!view) view = await NotFound();
        break;
      }
      else
        view = await Universities(); 
      break;
    case 'majors': view = await Majors(); break;
    case 'opportunities': view = await Opportunities(); break;
    case 'forum': view = await Forum(); break;
    case 'about': view = await About(); break;
    default: view = await NotFound(); break;
  }
  appEl.innerHTML = '';
  headerEl.innerHTML = '';
  footerEl.innerHTML = '';
  if(view) appEl.appendChild(view);
  if(headerEl) headerEl.appendChild(header());
  if(footerEl) footerEl.appendChild(footer());
}
