import { locations, majors } from "../data/filterData.js";
import {universitiesData} from "../data/universitiesData.js";
import universityCards from "../components/universityCards.js";

export default function Universities() {
  const universityGrid = universityCards(universitiesData);
  const el = document.createElement("div");
  el.innerHTML = `
    <div class="universities-container">
    <div class="filter-bar">
      <input id="searchUni" type="text" placeholder="Search universities...">
      <div class="location-filter">
        <label for="locationSelect">Location:</label>
        <select>
          <option value="">All Locations</option>
          ${locations
            .map(
              (location) => `<option value="${location}">${location}</option>`
            )
            .join("")}
        </select>
      </div>
      <div class="major-filter">
        <label for="majorSelect">Major:</label>
        <select>
          <option value="">All Majors</option>
          ${majors
            .map((major) => `<option value="${major}">${major}</option>`)
            .join("")}
        </select>
      </div>
      <div class="price-range">
        <label for="minPrice">Min Price($): <span id="minPriceLabel">0</span></label>
        <input type="range" id="minPrice" min="0" max="20000" value="0"/>
      </div>
      <div class="price-range">
        <label for="maxPrice">Max Price($): <span id="maxPriceLabel">10000</span></label>
        <input type="range" id="maxPrice" min="0" max="10000" value="10000"/>
      </div>
      <div class="scholarship-filter">
        <input type="checkbox" id="scholarshipOnly" />
        <label for="scholarshipOnly">Scholarships Only</label>
      </div>
    </div> 
    <div class="uni-content px-5">
      <div class="title-with-hr flex items-center gap-3 mb-6">
        <hr class="flex-1 border-0 bg-[#2c3e50ec] h-1 rounded-sm">
        <h2 class="text-2xl font-bold text-[#2c3e50ec]">Universities Cards</h2>
        <hr class="flex-1 border-0 bg-[#2c3e50ec] h-1 rounded-sm">
      </div>
      <div class="card-container grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6 mb-10">
        ${universityGrid}
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

  return el;
}

function filterUniversities(
  universities,
  searchTerm,
  location,
  major,
  minPrice,
  maxPrice,
  scholarship
) {
  return universities.filter((university) => {
    const matchesSearch = university.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesLocation = location ? university.location === location : true;
    const matchesMajor = major ? university.majors.includes(major) : true;
    const matchesPrice =
      university.priceRange.min >= minPrice &&
      university.priceRange.min <= maxPrice;
    const matchesScholarship = scholarship
      ? university.scholarships && university.scholarships.length > 0
      : true;
    return (
      matchesSearch &&
      matchesLocation &&
      matchesMajor &&
      matchesPrice &&
      matchesScholarship
    );
  });
}

function updateUniversityGrid(universities) {
  const universityGrid = document.querySelector(".university-grid");
  universityGrid.innerHTML = universityCards(universities);
}

// Event listeners for filters
document.addEventListener("input", () => {
  const searchTerm = document.querySelector("#searchUni").value;
  const location = document.querySelector(".location-filter select").value;
  const major = document.querySelector(".major-filter select").value;
  const minPrice = parseInt(document.querySelector("#minPrice").value, 10);
  const maxPrice = parseInt(document.querySelector("#maxPrice").value, 10);
  const scholarship = document.querySelector("#scholarshipOnly").checked;

  const filteredUniversities = filterUniversities(
    universities,
    searchTerm,
    location,
    major,
    minPrice,
    maxPrice,
    scholarship
  );
  updateUniversityGrid(filteredUniversities);
});
