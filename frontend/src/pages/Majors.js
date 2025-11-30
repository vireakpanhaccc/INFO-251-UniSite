import { majorsData } from "../data/majorsData.js";
import majorCards from "../components/majorCards.js";
export default function Majors() {
  const MajorCard = majorCards(majorsData);
  const el = document.createElement("div");
  el.innerHTML = `
      <div class="universities-container flex justify-between px-5 pt-8 w-full">
        <div class="uni-content px-5 w-full ">
          <div class="title-with-hr flex items-center gap-3 mb-6">
            <hr class="flex-1 border-0 bg-[#2c3e50ec] h-1 rounded-sm">
            <h2 class="min-w-[251px] text-center text-2xl font-bold text-[#2c3e50ec]">Major Cards</h2>
            <hr class="flex-1 border-0 bg-[#2c3e50ec] h-1 rounded-sm">
          </div>
          <div class="flex items-center gap-2 mb-6 max-w-xl mx-auto">
            <input
              id="majorSearch"
              type="text"
              placeholder="Search majors..."
              class="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm
                    focus:outline-none focus:ring-2 focus:ring-[#2c3e50ec] focus:border-[#2c3e50ec]"
            />
          </div>
          <div class="university-grid h-screen overflow-y-auto pb-96"> 
            <div class="uni-grid card-container grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6 mb-10">
            ${MajorCard}
            </div>
          </div>
        </div>
      </div>
    `;
    function filterMajors(
    majorsData,
    searchTerm,
  ) {
    return majorsData.filter((Major) => {
      const matchesSearch = Major.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      return (
        matchesSearch 
      );
    });
  }
  function updateMajorGrid(major) {
      const MajorGrid = el.querySelector(".uni-grid");
      MajorGrid.innerHTML = majorCards(major);
    }
    el.addEventListener("input", () => {
        const searchTerm = el.querySelector("#majorSearch").value;
        const filteredMajors = filterMajors(
          majorsData,
          searchTerm
        );
        updateMajorGrid(filteredMajors);
      });
  return el;
}
