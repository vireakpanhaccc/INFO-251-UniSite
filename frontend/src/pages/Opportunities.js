
import { scholarshipData } from "../data/scholarshipData.js";
import scholarshipCards from "../components/scholarshipCards.js";
import { universitiesData } from "../data/universitiesData.js";

export default function Opportunities() {
  const scholarshipGrid = scholarshipCards(scholarshipData);
  const el = document.createElement("div");
  el.innerHTML = `
    <div class="universities-container flex justify-between px-5 pt-8 w-full">
      <div class="filter-bar pt-3 flex flex-col gap-6 w-1/4 min-w-[250px]">
        <input class="border border-gray-300 rounded-md p-2 w-full" id="searchScholarship" name="searchScholarship" type="text" placeholder="Search scholarships...">
        
        <div class="provider-filter grid grid-cols-2">
          <label class="font-semibold" for="providerSelect">Provider:</label>
          <select id="providerSelect" name="providerSelect" class="border border-gray-300 rounded-md p-2">
            <option value="">All Providers</option>
            ${[...new Set(scholarshipData.map(scholarship => scholarship.provider))].map(provider => `<option value="${provider}">${provider}</option>`).join("")}
          </select>
        </div>
        
        <div class="university-filter grid grid-cols-2">
          <label class="font-semibold" for="universitySelect">University:</label>
          <select id="universitySelect" name="universitySelect" class="border border-gray-300 rounded-md p-2">
            <option value="">All Universities</option>
            ${universitiesData.map(uni => `<option value="${uni.id}">${uni.name}</option>`).join("")}
          </select>
        </div>
        
        <div class="amount-range grid grid-cols-2 items-baseline">
          <label class="font-semibold max-w-[110px]" for="minAmount">Min Amount($): <span id="minAmountLabel">0</span></label>
          <input type="range" id="minAmount" name="minAmount" min="0" max="5000" value="0"/>
        </div>
        <div class="amount-range grid grid-cols-2 items-baseline">
          <label class="font-semibold max-w-[110px]" for="maxAmount">Max Amount($): <span id="maxAmountLabel">5000</span></label>
          <input type="range" id="maxAmount" name="maxAmount" min="0" max="5000" value="5000"/>
        </div>
        
        <div class="deadline-filter grid grid-cols-2">
          <label class="font-semibold" for="deadlineAfter">Deadline After:</label>
          <input type="date" id="deadlineAfter" name="deadlineAfter" class="border border-gray-300 rounded-md p-2">
        </div>
      </div> 
      <div class="uni-content px-5 w-full ">
        <div class="title-with-hr flex items-center gap-3 mb-6">
          <hr class="flex-1 border-0 bg-[#2c3e50ec] h-1 rounded-sm">
          <h2 class="min-w-[251px] text-2xl font-bold text-[#2c3e50ec]">Scholarship Cards(<span class="scholarship-count">0</span>)</h2>
          <hr class="flex-1 border-0 bg-[#2c3e50ec] h-1 rounded-sm">
        </div>
        <div class="university-grid h-screen overflow-y-auto pb-96"> 
          <div class="uni-grid card-container grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6 mb-10">
            ${scholarshipGrid}
          </div>
        </div>
      </div>
    </div>
  `;

  // Update label when range changes
  const maxAmountInput = el.querySelector("#maxAmount");
  const maxAmountLabel = el.querySelector("#maxAmountLabel");
  const minAmountInput = el.querySelector("#minAmount");
  const minAmountLabel = el.querySelector("#minAmountLabel");
  maxAmountInput.addEventListener("input", () => {
    maxAmountLabel.textContent = maxAmountInput.value;
  });
  minAmountInput.addEventListener("input", () => {
    minAmountLabel.textContent = minAmountInput.value;
  });

  // Initial count
  const scholarshipCountSpan = el.querySelector(".scholarship-count");
  scholarshipCountSpan.textContent = scholarshipData.length;

  return el;
}

function filterScholarships(
  scholarshipData,
  searchTerm,
  provider,
  universityId,
  minAmount,
  maxAmount,
  deadlineAfter
) {
  return scholarshipData.filter((scholarship) => {
    const matchesSearch = scholarship.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesProvider = provider ? scholarship.provider === provider : true;
    const matchesUniversity = universityId 
      ? scholarship.uni_id.includes(universityId) 
      : true;
    
    // Extract amount numbers from string like "$1,000 - $5,000"
    const amountMatch = scholarship.amount.match(/\$(\d{1,3}(?:,\d{3})*)\s*-\s*\$(\d{1,3}(?:,\d{3})*)/);
    let matchesAmount = true;
    if (amountMatch) {
      const scholarshipMin = parseInt(amountMatch[1].replace(/,/g, ''), 10);
      const scholarshipMax = parseInt(amountMatch[2].replace(/,/g, ''), 10);
      matchesAmount = scholarshipMax >= minAmount && scholarshipMin <= maxAmount;
    }
    
    const matchesDeadline = deadlineAfter
      ? new Date(scholarship.deadline) >= new Date(deadlineAfter)
      : true;
    
    return (
      matchesSearch &&
      matchesProvider &&
      matchesUniversity &&
      matchesAmount &&
      matchesDeadline
    );
  });
}

function updateScholarshipGrid(scholarships) {
  const scholarshipGrid = document.querySelector(".uni-grid");
  scholarshipGrid.innerHTML = scholarshipCards(scholarships);
}

// Event listeners for filters
document.addEventListener("input", () => {
  const searchTerm = document.querySelector("#searchScholarship").value;
  const provider = document.querySelector(".provider-filter select").value;
  const universityId = document.querySelector(".university-filter select").value;
  const minAmount = parseInt(document.querySelector("#minAmount").value, 10);
  const maxAmount = parseInt(document.querySelector("#maxAmount").value, 10);
  const deadlineAfter = document.querySelector("#deadlineAfter").value;

  const filteredScholarships = filterScholarships(
    scholarshipData,
    searchTerm,
    provider,
    universityId,
    minAmount,
    maxAmount,
    deadlineAfter
  );
  const scholarshipCountSpan = document.querySelector(".scholarship-count");
  scholarshipCountSpan.textContent = filteredScholarships.length;
  updateScholarshipGrid(filteredScholarships);
});