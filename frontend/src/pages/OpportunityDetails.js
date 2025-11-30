import {scholarshipData} from '../data/scholarshipData.js';
import {universitiesData} from '../data/universitiesData.js';
import { api } from '../api.js';


export default async function OpportunityDetails(scholarship_id) {
  const el = document.createElement('div');
  const scholarship = scholarshipData.find(sch => sch.id === parseInt(scholarship_id));
  let relatedUniversities = [];
  try {
    relatedUniversities = await api.get('/home/popular/universities');
  } catch (err) {
    relatedUniversities = universitiesData.filter(uni => scholarship.uni_id.includes(uni.id));
  }
  const relatedScholarships = scholarshipData.filter(sch => sch.id !== scholarship.id && sch.uni_id.some(id => scholarship.uni_id.includes(id)));
  
  if (!scholarship) return null;
  
  el.innerHTML = `
    <div class="university-page flex flex-col gap-4 dark:bg-gray-900 dark:text-gray-100">
      <!-- Scholarship Header Section-->
      <section class="relative w-full h-44 sm:h-64 md:h-96 overflow-hidden bg-gray-200 dark:bg-gray-800">
        <img class="w-full h-full object-cover brightness-50" src="${scholarship.cover_image}" alt="${scholarship.name} cover image">
        <div class="absolute left-4 md:left-8 bottom-4 md:bottom-8 flex items-start space-x-4">
          <div class="text-white">
            <h1 class=" xs:text-xl sm:text-2xl md:text-5xl font-bold">${scholarship.name}</h1>
            <p class="text-md md:text-xl mt-2">${scholarship.provider}</p>
          </div>
        </div>
      </section>

      <!-- Scholarship Details Section-->
      <section class="px-4 md:px-8 lg:px-16">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div class="col-span-2">
            <h2 class="text-3xl font-semibold mb-4">Scholarship Info</h2>
            <p class="mb-2 text-gray-800 dark:text-gray-200">${scholarship.description}</p>
          </div>
          <div class="col-span-2 md:col-span-1">
            <p class="mb-2 text-gray-800 dark:text-gray-200"><strong>Provider:</strong> ${scholarship.provider}</p>
            <p class="mb-2 text-gray-800 dark:text-gray-200"><strong>Amount:</strong> ${scholarship.amount}</p>
            <p class="mb-2 text-gray-800 dark:text-gray-200"><strong>Deadline:</strong> ${scholarship.deadline}</p>
            <p class="mb-2 text-gray-800 dark:text-gray-200"><strong>Application Link:</strong> <a href="${scholarship.link}" target="_blank" class="text-blue-600 dark:text-blue-300 underline">${scholarship.link}</a></p>
          </div>
          <div class="col-span-2 md:col-span-1">
            <p class="mb-2 text-gray-800 dark:text-gray-200"><strong>Eligibility:</strong> ${scholarship.eligibility}</p>
            <p class="mb-2 text-gray-800 dark:text-gray-200"><strong>Available at Universities:</strong> ${relatedUniversities.map(uni => uni.name).join(', ')}</p>
          </div>
        </div>
      </section>

      <!-- Related Universities Section-->
      <div class="px-4 md:px-8 lg:px-16 pt-6 pb-10 bg-blue-950 dark:bg-blue-950">
        <h2 class="text-white text-center text-3xl font-semibold mb-6">Available at Universities</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          ${relatedUniversities.map(uni => `
            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
              <div class="flex items-center space-x-4 mb-3">
                <img class="h-12 w-12 object-cover rounded" src="${uni.images.logo}" alt="${uni.name} logo">
                <div>
                  <h3 class="font-semibold text-lg text-gray-900 dark:text-gray-100">${uni.name}</h3>
                  <p class="text-gray-600 dark:text-gray-300">${uni.location.city}</p>
                </div>
              </div>
              <p class="text-sm text-gray-700 dark:text-gray-300 mb-3">${uni.type} • Established ${uni.established}</p>
              <a href="#/universities/${uni._id}" class="inline-block px-4 py-2 bg-[#2c3e50ec] dark:bg-[#2c3e50] text-white rounded hover:bg-[#2c3e50] transition-colors">
                View University
              </a>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Related Scholarships Section-->
      <section class="px-4 md:px-8 lg:px-16 pt-6 pb-10 bg-white dark:bg-gray-900">
        <h2 class="text-center text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Related Scholarships</h2>
        <div class="card-container grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6 mb-10">
          ${relatedScholarships.slice(0, 3).map(relatedScholarship => `
            <div class="uni-card h-[500px] border border-gray-300 dark:border-gray-700 shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 relative max-w-[600px] bg-white dark:bg-gray-800">
              <div class="card-image relative mb-3 border-b border-gray-300 dark:border-gray-700 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-700">
                <img class="card-blur w-full h-full object-cover absolute inset-0 z-0 opacity-60 blur-sm" src="${relatedScholarship.cover_image || ''}" alt="">
                <img class="card-cover w-auto h-[320px] object-contain max-h-[320px] min-h-[320px] relative z-10 shadow-xs" src="${relatedScholarship.cover_image || ''}" alt="${relatedScholarship.name ? relatedScholarship.name.replace(/"/g, '&quot;') : ''} Campus">
              </div>
              <div class="card-content px-4">
                <h3 class="text-md font-bold text-gray-900 dark:text-gray-100">${relatedScholarship.name || 'No Name Provided'}</h3>
                <p class="text-gray-700 dark:text-gray-300">Provider: ${relatedScholarship.provider || 'Unknown'}</p>
                <p class="text-gray-700 dark:text-gray-300">Amount: ${relatedScholarship.amount || 'N/A'}</p>
                <p class="text-gray-700 dark:text-gray-300">Deadline: ${relatedScholarship.deadline || 'N/A'}</p>
                <a class="absolute bottom-4 right-4 py-1.5 px-2 bg-[#2c3e50ec] dark:bg-[#2c3e50] text-sm text-white rounded hover:bg-[#2c3e50] active:brightness-80" href="#/opportunities/${relatedScholarship.id}">Visit Details</a>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- How to Apply Section-->
      <section class="px-4 md:px-8 lg:px-16 pt-6 pb-10 bg-[#9f6a08]">
        <h2 class="text-white text-center text-3xl font-semibold mb-4">How to Apply</h2>
        <div class="bg-white rounded-lg p-6 max-w-4xl mx-auto dark:bg-gray-800 dark:text-gray-100">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 class="text-xl font-semibold mb-3">Eligibility Requirements</h3>
              <p class="text-gray-700 dark:text-gray-200 mb-4">${scholarship.eligibility}</p>
              <h3 class="text-xl font-semibold mb-3">Application Deadline</h3>
              <p class="text-gray-700 dark:text-gray-200 text-lg font-medium">${scholarship.deadline}</p>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-3">Application Process</h3>
              <ol class="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-200 mb-4">
                <li>Review eligibility requirements carefully</li>
                <li>Prepare required documents</li>
                <li>Complete online application form</li>
                <li>Submit application before deadline</li>
                <li>Wait for confirmation and results</li>
              </ol>
              <a href="${scholarship.link}" target="_blank" class="inline-block px-6 py-3 bg-[#2c3e50ec] dark:bg-[#2c3e50] text-white rounded-lg hover:bg-[#2c3e50] transition-colors font-semibold">
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;

  return el;
}