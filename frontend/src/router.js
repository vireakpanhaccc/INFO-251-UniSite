import Home from './pages/Home.js';
import Universities from './pages/Universities.js';
import UniversityDetails from './pages/UniversityDetails.js';
import Majors from './pages/Majors.js';
import Opportunities from './pages/Opportunities.js';
import OpportunityDetails from './pages/OpportunityDetails.js';
import Forum from './pages/Forum.js';
import About from './pages/About.js';
import Register from './pages/Register.js';
import Login from './pages/Login.js';
import ResetPassword from './pages/ResetPassword.js'
import NotFound from './pages/NotFound.js';
import header from './components/header.js';
import footer from './components/footer.js';
import {api} from './api.js';

const user_profile = localStorage.getItem('user_profile') ? JSON.parse(localStorage.getItem('user_profile')) : null;
console.log(user_profile);

function parseHash() {
  const h = location.hash || '#/';
  const [_, route, id] = h.split('/'); // '#','route','id'
  return { route: route || '', id };
}

export default async function router(appEl, headerEl, footerEl) {
  let view = null;
  const {route, id} = parseHash();
  switch(route){
    case '': view = await Home(); break;
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
    case 'opportunities': 
      if(id) {
          view = await OpportunityDetails(id);
          if (!view) view = await NotFound();
        break;
      }
      else
        view = await Opportunities(); 
      break;
    case 'forum': view = await Forum(); break;
    case 'about': view = await About(); break;
    case 'register': view = await Register(); break;
    case 'login': view = await Login(); break;
    case 'reset-password': view = await ResetPassword(); break;
    default: view = await NotFound(); break;
  }
  appEl.innerHTML = '';
  headerEl.innerHTML = '';
  footerEl.innerHTML = '';
  if(view) appEl.appendChild(view);
  if(headerEl) headerEl.appendChild(header(user_profile));
  if(footerEl) footerEl.appendChild(footer());
}
