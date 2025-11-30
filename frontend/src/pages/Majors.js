
import majorCards from "../components/majorCards.js";
import { api } from "../api.js";



export default async function Majors() {
  const majorsData = [];

  try {
    const res = await api.get("/majors");
    // support both axios-like responses (res.data) and direct arrays
    const data = res && res.data ? res.data : res;
    if (Array.isArray(data)) majorsData.push(...data);
  } catch (e) {
    // log error to help debugging but don't crash the UI
    // eslint-disable-next-line no-console
    console.error("Failed to load majors:", e);
  }

  // build unique lists for filters from the fetched data
  const fields = [...new Set(majorsData.map(m => m.field).filter(Boolean))];
  const universitiesSet = new Set();
  majorsData.forEach(m => {
    if (Array.isArray(m.universities)) {
      m.universities.forEach(u => u && universitiesSet.add(u));
    }
  });
  const universitiesList = [...universitiesSet];

  const majorsGridHtml = majorCards(majorsData);
  const el = document.createElement("div");
  el.innerHTML = `
    <div class="universities-container flex justify-between px-5 pt-8 w-full bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 min-h-screen">
      <div class="filter-bar pt-3 flex flex-col gap-6 w-1/4 min-w-[250px] bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-4 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
        <input id="searchMajor" name="searchMajor" type="text" placeholder="Search majors..." class="border border-gray-300 dark:border-gray-600 rounded-md p-2 w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400">

        <div class="field-filter grid grid-cols-2">
          <label class="font-semibold" for="fieldSelect">Field:</label>
          <select id="fieldSelect" class="border border-gray-300 dark:border-gray-600 rounded-md p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100">
            <option value="">All Fields</option>
            ${fields.map(f => `<option value="${f}">${f}</option>`).join("")}
          </select>
        </div>

        <div class="level-filter grid grid-cols-2">
          <label class="font-semibold" for="levelSelect">Level:</label>
          <select id="levelSelect" class="border border-gray-300 dark:border-gray-600 rounded-md p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100">
            <option value="">All Levels</option>
            <option value="Undergraduate">Undergraduate</option>
            <option value="Graduate">Graduate</option>
            <option value="Certificate">Certificate</option>
          </select>
        </div>

        <div class="related-uni-filter grid grid-cols-2">
          <label class="font-semibold" for="uniSelect">University:</label>
          <select id="uniSelect" class="border border-gray-300 dark:border-gray-600 rounded-md p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100">
            <option value="">Any University</option>
            ${universitiesList.map(u => `<option value="${u}">${u}</option>`).join("")}
          </select>
        </div>

        <div class="salary-range grid grid-cols-2 items-baseline">
          <label class="font-semibold max-w-[110px]" for="minSalary">Min Salary($): <span id="minSalaryLabel">0</span></label>
          <input type="range" id="minSalary" min="0" max="200000" value="0" class="accent-sky-500">
        </div>

        <div class="salary-range grid grid-cols-2 items-baseline">
          <label class="font-semibold max-w-[110px]" for="maxSalary">Max Salary($): <span id="maxSalaryLabel">100000</span></label>
          <input type="range" id="maxSalary" min="0" max="200000" value="100000" class="accent-sky-500">
        </div>

        <div class="demand-filter grid grid-cols-2">
          <label class="font-semibold" for="minDemand">Min Demand (jobs/year):</label>
          <input type="number" id="minDemand" min="0" placeholder="0" class="border border-gray-300 dark:border-gray-600 rounded-md p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100">
        </div>
      </div>

      <div class="uni-content px-5 w-full ">
        <div class="title-with-hr flex items-center gap-3 mb-6">
          <hr class="flex-1 border-0 bg-[#2c3e50ec] dark:bg-sky-300 h-1 rounded-sm">
          <h2 class=" text-2xl font-bold text-[#2c3e50ec] dark:text-sky-300">Majors (<span class="majors-count">0</span>)</h2>
          <hr class="flex-1 border-0 bg-[#2c3e50ec] dark:bg-sky-300 h-1 rounded-sm">
        </div>

        <div class="university-grid h-screen overflow-y-auto pb-96">
          <div class="majors-grid card-container grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6 mb-10">
            ${majorsGridHtml}
          </div>
        </div>
      </div>
    </div>
  `;

  // labels for sliders
  const minSalaryInput = el.querySelector("#minSalary");
  const maxSalaryInput = el.querySelector("#maxSalary");
  const minSalaryLabel = el.querySelector("#minSalaryLabel");
  const maxSalaryLabel = el.querySelector("#maxSalaryLabel");
  if (minSalaryInput && minSalaryLabel) {
    minSalaryInput.addEventListener("input", () => {
      minSalaryLabel.textContent = minSalaryInput.value;
    });
    // sync initial label
    minSalaryLabel.textContent = minSalaryInput.value;
  }
  if (maxSalaryInput && maxSalaryLabel) {
    maxSalaryInput.addEventListener("input", () => {
      maxSalaryLabel.textContent = maxSalaryInput.value;
    });
    // sync initial label
    maxSalaryLabel.textContent = maxSalaryInput.value;
  }

  // initial count
  const countSpan = el.querySelector(".majors-count");
  if (countSpan) countSpan.textContent = majorsData.length;

  function filterMajors(data, {
    search = "",
    field = "",
    level = "",
    university = "",
    minSalary = 0,
    maxSalary = Number.MAX_SAFE_INTEGER,
    minDemand = 0
  } = {}) {
    return data.filter(m => {
      const matchesSearch = m.name?.toLowerCase().includes(search.toLowerCase());
      const matchesField = field ? m.field === field : true;
      const matchesLevel = level ? m.level === level : true;
      const matchesUniversity = university ? (m.universities || []).includes(university) : true;
      const avgSalary = Number(m.avg_salary || 0);
      const matchesSalary = avgSalary >= minSalary && avgSalary <= maxSalary;
      const matchesDemand = m.annual_jobs ? Number(m.annual_jobs) >= minDemand : true;
      return matchesSearch && matchesField && matchesLevel && matchesUniversity && matchesSalary && matchesDemand;
    });
  }

  function updateMajorsGrid(list) {
    const grid = el.querySelector(".majors-grid");
    if (grid) grid.innerHTML = majorCards(list);
  }

  // filter on input/change within this component
  el.addEventListener("input", () => {
    const search = el.querySelector("#searchMajor")?.value || "";
    const field = el.querySelector("#fieldSelect")?.value || "";
    const level = el.querySelector("#levelSelect")?.value || "";
    const university = el.querySelector("#uniSelect")?.value || "";
    const minSalary = parseInt(el.querySelector("#minSalary")?.value, 10) || 0;
    const maxSalary = parseInt(el.querySelector("#maxSalary")?.value, 10) || Number.MAX_SAFE_INTEGER;
    const minDemand = parseInt(el.querySelector("#minDemand")?.value, 10) || 0;

    const filtered = filterMajors(majorsData, { search, field, level, university, minSalary, maxSalary, minDemand });
    const countEl = el.querySelector(".majors-count");
    if (countEl) countEl.textContent = filtered.length;
    updateMajorsGrid(filtered);
  });

  return el;
}