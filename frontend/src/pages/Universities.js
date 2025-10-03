import { locations} from "../data/filterData.js";
import universityCards from "../components/universityCards.js";
import { scholarshipData } from "../data/scholarshipData.js";
import { api } from "../api.js";

export default async function Universities() {
  const universitiesData = [];
  
  try {
    const res = await api.get("/universities");
    if (res && Array.isArray(res)) {
      universitiesData.push(...res);
    }
  } catch (error) {}
  const universityGrid = universityCards(universitiesData);
  const el = document.createElement("div");
  el.innerHTML = `
    <div class="universities-container flex justify-between px-5 pt-8 w-full">
      <div class="filter-bar pt-3 flex flex-col gap-6 w-1/4 min-w-[250px]">
        <input class="border border-gray-300 rounded-md p-2 w-full" id="searchUni" name="searchUni" type="text" placeholder="Search universities...">
        
        <div class="location-filter grid grid-cols-2">
          <label class="font-semibold" for="locationSelect">Location:</label>
          <select id="locationSelect" name="locationSelect" class="border border-gray-300 rounded-md p-2">
            <option value="">All Locations</option>
            ${locations.map(location => `<option value="${location}">${location}</option>`).join("")}
          </select>
        </div>
        
        <div class="type-filter grid grid-cols-2">
          <label class="font-semibold" for="typeSelect">Type:</label>
          <select id="typeSelect" name="typeSelect" class="border border-gray-300 rounded-md p-2">
            <option value="">All Types</option>
            <option value="Private">Private</option>
            <option value="Public">Public</option>
          </select>
        </div>
        
        <div class="established-filter grid grid-cols-2">
          <label class="font-semibold" for="establishedSelect">Established After:</label>
          <input type="number" id="establishedSelect" name="establishedSelect" class="border border-gray-300 rounded-md p-2" min="1900" max="${new Date().getFullYear()}" placeholder="Year">
        </div>
        
        <div class="ranking-filter grid grid-cols-2">
          <label class="font-semibold" for="rankingSelect">Min Ranking:</label>
          <input type="number" id="rankingSelect" name="rankingSelect" class="border border-gray-300 rounded-md p-2" min="1" max="5" placeholder="1-5">
        </div>
        
        <div class="student-population-filter grid grid-cols-2">
          <label class="font-semibold" for="studentPopulationSelect">Min Students:</label>
          <input type="number" id="studentPopulationSelect" name="studentPopulationSelect" class="border border-gray-300 rounded-md p-2" min="0" placeholder="Number">
        </div>
        
        <div class="price-range grid grid-cols-2 items-baseline">
          <label class="font-semibold max-w-[110px]" for="minPrice">Min Price($): <span id="minPriceLabel">0</span></label>
          <input type="range" id="minPrice" name="minPrice" min="0" max="20000" value="0"/>
        </div>
        <div class="price-range grid grid-cols-2 items-baseline">
          <label class="font-semibold max-w-[110px]" for="maxPrice">Max Price($): <span id="maxPriceLabel">10000</span></label>
          <input type="range" id="maxPrice" name="maxPrice" min="0" max="10000" value="10000"/>
        </div>
        
        <div class="scholarship-filter flex items-center gap-2">
          <input type="checkbox" id="scholarshipOnly" name="scholarshipOnly" />
          <label class="font-semibold" for="scholarshipOnly">Scholarships Only</label>
        </div>
      </div> 
      <div class="uni-content px-5 w-full ">
        <div class="title-with-hr flex items-center gap-3 mb-6">
          <hr class="flex-1 border-0 bg-[#2c3e50ec] h-1 rounded-sm">
          <h2 class="min-w-[251px] text-2xl font-bold text-[#2c3e50ec]">Universities Cards(<span class="uni-count">0</span>)</h2>
          <hr class="flex-1 border-0 bg-[#2c3e50ec] h-1 rounded-sm">
        </div>
        <div class="university-grid h-screen overflow-y-auto pb-96"> 
          <div class="uni-grid card-container grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6 mb-10">
            ${universityGrid}
          </div>
        </div>
      </div>
    </div>
  `;

  // Update label when range changes
  const maxPriceInput = el.querySelector("#maxPrice");
  const maxPriceLabel = el.querySelector("#maxPriceLabel");
  const minPriceInput = el.querySelector("#minPrice");
  const minPriceLabel = el.querySelector("#minPriceLabel");
  maxPriceInput.addEventListener("input", () => {
    maxPriceLabel.textContent = maxPriceInput.value;
  });
  minPriceInput.addEventListener("input", () => {
    minPriceLabel.textContent = minPriceInput.value;
  });
  const establishedYearInput = el.querySelector("#establishedSelect");
  establishedYearInput.addEventListener("change", () => {
    const year = parseInt(establishedYearInput.value, 10);
    if (year < 1900) establishedYearInput.value = 1900;
    if (year > new Date().getFullYear()) establishedYearInput.value = new Date().getFullYear();
  });
  const rankingInput = el.querySelector("#rankingSelect");
  rankingInput.addEventListener("change", () => {
    const rank = parseInt(rankingInput.value, 10);
    if (rank < 1) rankingInput.value = 1;
    if (rank > 5) rankingInput.value = 5;
  });
  const studentPopInput = el.querySelector("#studentPopulationSelect");
  studentPopInput.addEventListener("change", () => {
    const pop = parseInt(studentPopInput.value, 10);
    if (pop < 0) studentPopInput.value = 0;
  }); 

  // Initial count
  const uniCountSpan = el.querySelector(".uni-count");
  uniCountSpan.textContent = universitiesData.length;

  function filterUniversities(
    universitiesData,
    searchTerm,
    location,
    type,
    establishedAfter,
    minRanking,
    minStudentPop,
    minPrice,
    maxPrice,
    scholarship
  ) {
    return universitiesData.filter((university) => {
      const matchesSearch = university.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesLocation = location ? university.location.city === location : true;
      const matchesType = type ? university.type === type : true;
      const matchesEstablished = establishedAfter
        ? university.established >= establishedAfter
        : true;
      const matchesRanking = minRanking
        ? university.ranking && university.ranking >= minRanking
        : true;
      const matchesStudentPop = minStudentPop
        ? university.student_population &&
          university.student_population >= minStudentPop
        : true;
      const matchesPrice =
        university.tuition.min >= minPrice &&
        university.tuition.max <= maxPrice;
      const matchesScholarship = scholarship
        ? scholarshipData.some((sch) => sch.uni_id.includes(university.id))
        : true;
      return (
        matchesSearch &&
        matchesLocation &&
        matchesType &&
        matchesEstablished &&
        matchesRanking &&
        matchesStudentPop &&
        matchesPrice &&
        matchesScholarship
      );
    });
  }
  
  function updateUniversityGrid(universities) {
    const universityGrid = document.querySelector(".uni-grid");
    universityGrid.innerHTML = universityCards(universities);
  }
  
  // Event listeners for filters
  el.addEventListener("input", () => {
    const searchTerm = el.querySelector("#searchUni").value;
    const location = el.querySelector(".location-filter select").value;
    const type = el.querySelector(".type-filter select").value;
    const establishedAfter = parseInt(
      el.querySelector("#establishedSelect").value,
      10
    );
    const minRanking = parseInt(
      el.querySelector("#rankingSelect").value,
      10
    );
    const minStudentPop = parseInt(
      el.querySelector("#studentPopulationSelect").value,
      10
    );
    const minPrice = parseInt(el.querySelector("#minPrice").value, 10);
    const maxPrice = parseInt(el.querySelector("#maxPrice").value, 10);
    const scholarship = el.querySelector("#scholarshipOnly").checked;
  
    const filteredUniversities = filterUniversities(
      universitiesData,
      searchTerm,
      location,
      type,
      establishedAfter,
      minRanking,
      minStudentPop,
      minPrice,
      maxPrice,
      scholarship
    );
    const uniCountSpan = document.querySelector(".uni-count");
    uniCountSpan.textContent = filteredUniversities.length;
    updateUniversityGrid(filteredUniversities);
  });
  return el;
}

