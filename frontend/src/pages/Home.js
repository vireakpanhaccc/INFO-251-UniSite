import universityCards from "../components/universityCards.js";
import majorCards from "../components/majorCards.js";
import scholarshipCards from "../components/scholarshipCards.js";
import { api } from "../api.js";


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
  el.innerHTML = `
    <div class="home-cover">
      <img class="min-h-[300px] max-h-[500px] w-full object-cover" src='./images/pic/universities/cover/Students-Life.jpg'></img>
    </div>

    <div class="home-content flex flex-col gap-5 py-5 px-[5%]">
      <div class="w-full text-center">
        <h1 class="text-[#2c3e50ec] font-bold text-2xl md:text-4xl mt-4">Discover Your Future with UniSites</h1>
        <p class="text-sm md:text-lg mb-6 mt-3">Explore universities, majors, scholarships, and connect with peers.</p>  
      </div>
      <div class="home-search-bar w-full flex justify-center mb-6 h-10 text-xs md:text-md">
        <input class="flex-1 max-w-2xl h-10 border border-gray-400 rounded-l-3xl pl-4" type="text" placeholder="Search for universities, majors, scholarships...">
        <button class="bg-[#2c3e50ec] border border-[#2c3e50ec] text-white px-4 md:px-8 rounded-r-3xl hover:bg-[#2c3e50] active:brightness-80">Search</button>
      </div>
      <div class="home-popular-universities ">
        <div class="title-with-hr flex items-center gap-3 mb-6">
          <h1 class="text-xl md:text-2xl font-bold text-[#2c3e50ec]">Popular Universities</h1>
          <hr class="flex-1 border-0 bg-[#2c3e50ec] h-1 rounded-sm">
          <a href="#/universities"><button class="text-sm md:text-md h-full">View All</button></a>
        </div>
        <div class="card-container grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6 mb-10">
          ${universityCards(universities)}
        </div>
      </div>
      <div class="home-popular-majors">
        <div class="title-with-hr flex items-center gap-3 mb-6">
          <h1 class="text-xl md:text-2xl font-bold text-[#2c3e50ec]">Popular Majors</h1>
          <hr class="flex-1 border-0 bg-[#2c3e50ec] h-1 rounded-sm">
          <a href="#/majors"><button class="text-sm md:text-md h-full">View All</button></a>
        </div>
        <div class="card-container grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6 mb-10">
          ${majorCards(majors)}
        </div>
      </div>
      <div class="home-popular-scholarships">
        <div class="title-with-hr flex items-center gap-3 mb-6">
          <h1 class="text-xl md:text-2xl font-bold text-[#2c3e50ec]">Popular Scholarships</h1>
          <hr class="flex-1 border-0 bg-[#2c3e50ec] h-1 rounded-sm">
          <a href="#/opportunities"><button class="text-sm md:text-md h-full">View All</button></a>
        </div>
        <div class="card-container grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6 mb-10">
          ${scholarshipCards(scholarships)}
          </div>
      </div>
      <div class="home-community text-center">
        <div class="title-with-hr flex items-center gap-3 mb-6">
          <hr class="flex-1 border-0 bg-[#2c3e50ec] h-1 rounded-sm">
          <h2 class="text-2xl font-bold text-[#2c3e50ec]">Join Our Community</h2>
          <hr class="flex-1 border-0 bg-[#2c3e50ec] h-1 rounded-sm">
        </div>
        <p>Connect with students and alumni in our forum.</p>
        <a href="#/forum"><button class="m-16 py-5 px-14 text-sm md:text-xl rounded-4xl bg-[#2c3e50ec] text-white hover:bg-[#2c3e50] active:brightness-80">Visit Forum</button></a>
      </div>
    </div>
  `;
  return el;
}

