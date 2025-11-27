import universityCards from "../components/universityCards.js";
import majorCards from "../components/majorCards.js";
import scholarshipCards from "../components/scholarshipCards.js";
import { api } from "../api.js";
import { t } from "../utils.js";



export default async function Home() {
  let universities = [];
  let majors = [];
  let scholarships = [];
  try {
    universities = await api.get('/home/popular/universities');
    majors = await api.get('/home/popular/majors');
    scholarships = await api.get('/home/popular/scholarships');
  } catch (error) {}
  const el = document.createElement("div");
  // Cover images array
  const coverImages = [
    './images/pic/universities/cover/Students-Life.jpg',
    './images/pic/universities/cover/img_ifl_doe.jpg',
    './images/pic/universities/cover/PUC_Campus.jpg',
    './images/pic/universities/cover/rupp_excellence_scholarship.png',
  ];
  let currentCover = 0;

  el.innerHTML = `
    <div class="home-cover relative">
      <img id="cover-img" class="min-h-[300px] max-h-[600px] w-full object-cover transition-all duration-300" src="${coverImages[0]}">
      <button id="cover-prev" class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-2 shadow hover:bg-white">&#8592;</button>
      <button id="cover-next" class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-2 shadow hover:bg-white">&#8594;</button>
      <div id="cover-dots" class="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        ${coverImages.map((_, i) => `
          <button class="cover-dot w-3 h-3 rounded-full ${i === 0 ? 'bg-[#2c3e50ec]' : 'bg-white/70'} border border-[#2c3e50ec] transition-all" data-index="${i}"></button>
        `).join('')}
      </div>
    </div>

    <div class="home-content flex flex-col gap-5 py-5 px-[5%]">
      <div class="w-full text-center">
        <h1 class="text-[#2c3e50ec] font-bold text-2xl md:text-4xl mt-4">${t('home_title')}</h1>
        <p class="text-sm md:text-lg mb-6 mt-3">${t('home_subtitle')}</p>  
      </div>
      <div class="home-search-bar w-full flex justify-center mb-6 h-10 text-xs md:text-md">
        <input id="home-search-input" class="flex-1 max-w-2xl h-10 border border-gray-400 rounded-l-3xl pl-4" type="text" placeholder="${t('search_placeholder')}">
        <button id="home-search-btn" class="bg-[#2c3e50ec] border border-[#2c3e50ec] text-white px-4 md:px-8 rounded-r-3xl hover:bg-[#2c3e50] active:brightness-80">${t('search')}</button>
      </div>
      <div class="home-popular-universities ">
        <div class="title-with-hr flex items-center gap-3 mb-6">
          <h1 class="text-xl md:text-2xl font-bold text-[#2c3e50ec]">${t('pop_universities')}</h1>
          <hr class="flex-1 border-0 bg-[#2c3e50ec] h-1 rounded-sm">
          <a href="#/universities"><button class="text-sm md:text-md h-full">View All</button></a>
        </div>
        <div class="card-container grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6 mb-10" id="university-cards">
          ${universityCards(universities)}
        </div>
      </div>
      <div class="home-popular-majors">
        <div class="title-with-hr flex items-center gap-3 mb-6">
          <h1 class="text-xl md:text-2xl font-bold text-[#2c3e50ec]">${t('pop_majors')}</h1>
          <hr class="flex-1 border-0 bg-[#2c3e50ec] h-1 rounded-sm">
          <a href="#/majors"><button class="text-sm md:text-md h-full">View All</button></a>
        </div>
        <div class="card-container grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6 mb-10" id="major-cards">
          ${majorCards(majors)}
        </div>
      </div>
      <div class="home-popular-scholarships">
        <div class="title-with-hr flex items-center gap-3 mb-6">
          <h1 class="text-xl md:text-2xl font-bold text-[#2c3e50ec]">${t('pop_scholarships')}</h1>
          <hr class="flex-1 border-0 bg-[#2c3e50ec] h-1 rounded-sm">
          <a href="#/opportunities"><button class="text-sm md:text-md h-full">View All</button></a>
        </div>
        <div class="card-container grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6 mb-10" id="scholarship-cards">
          ${scholarshipCards(scholarships)}
        </div>
      </div>
      <div class="home-community text-center">
        <div class="title-with-hr flex items-center gap-3 mb-6">
          <hr class="flex-1 border-0 bg-[#2c3e50ec] h-1 rounded-sm">
          <h2 class="text-2xl font-bold text-[#2c3e50ec]">${t('join_community')}</h2>
          <hr class="flex-1 border-0 bg-[#2c3e50ec] h-1 rounded-sm">
        </div>
        <p>${t('connect_with_friends')}</p>
        <a href="#/forum"><button class="m-16 py-5 px-14 text-sm md:text-xl rounded-4xl bg-[#2c3e50ec] text-white hover:bg-[#2c3e50] active:brightness-80">${t('visit_forum')}</button></a>
      </div>
    </div>
  `;

  // Cover image navigation logic
  setTimeout(() => {
    const img = el.querySelector('#cover-img');
    const prevBtn = el.querySelector('#cover-prev');
    const nextBtn = el.querySelector('#cover-next');
    const dots = el.querySelectorAll('.cover-dot');
    function updateDots() {
      dots.forEach((dot, i) => {
        dot.classList.toggle('bg-[#2c3e50ec]', i === currentCover);
        dot.classList.toggle('bg-white/70', i !== currentCover);
      });
    }
    prevBtn.onclick = () => {
      currentCover = (currentCover - 1 + coverImages.length) % coverImages.length;
      img.src = coverImages[currentCover];
      updateDots();
    };
    nextBtn.onclick = () => {
      currentCover = (currentCover + 1) % coverImages.length;
      img.src = coverImages[currentCover];
      updateDots();
    };
    dots.forEach(dot => {
      dot.onclick = () => {
        currentCover = Number(dot.dataset.index);
        img.src = coverImages[currentCover];
        updateDots();
      };
    });
    const intervalId = setInterval(() => {
      currentCover = (currentCover + 1) % coverImages.length;
      img.src = coverImages[currentCover];
      updateDots();
    }, 10000);
    setTimeout(() => clearInterval(intervalId), 40000); // Stop auto-slide after 40 seconds

    updateDots();
  }, 0);

  // Search bar logic
  setTimeout(() => {
    const input = el.querySelector('#home-search-input');
    const btn = el.querySelector('#home-search-btn');
    function performSearch() {
      const query = input.value.trim().toLowerCase();
      if (!query) {
        // Reset to original lists if search is empty
        el.querySelector('#university-cards').innerHTML = universityCards(universities);
        el.querySelector('#major-cards').innerHTML = majorCards(majors);
        el.querySelector('#scholarship-cards').innerHTML = scholarshipCards(scholarships);
        return;
      }
      // Filter universities, majors, scholarships by name/title
      const filteredUniversities = universities.filter(u => u.name?.toLowerCase().includes(query));
      const filteredMajors = majors.filter(m => m.name?.toLowerCase().includes(query));
      const filteredScholarships = scholarships.filter(s => s.name?.toLowerCase().includes(query));
      el.querySelector('#university-cards').innerHTML = universityCards(filteredUniversities);
      el.querySelector('#major-cards').innerHTML = majorCards(filteredMajors);
      el.querySelector('#scholarship-cards').innerHTML = scholarshipCards(filteredScholarships);
    }
    btn.onclick = performSearch;
    input.onkeydown = e => {
      performSearch();
    };
    input.oninput = () => {
      if (!input.value.trim()) {
        // Reset cards when input is cleared
        el.querySelector('#university-cards').innerHTML = universityCards(universities);
        el.querySelector('#major-cards').innerHTML = majorCards(majors);
        el.querySelector('#scholarship-cards').innerHTML = scholarshipCards(scholarships);
      }
    };
  }, 0);
  return el;
}

