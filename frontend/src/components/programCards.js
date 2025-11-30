
export default function programCards(programs) {
  if (programs.length === 0) {
    return `<p class="text-center col-span-5">No programs available.</p>`;
  }

  return programs.map(prog => `
    <li class="border border-gray-300 rounded shadow-2xl hover:shadow-md transition bg-white dark:bg-gray-800 dark:border-gray-700 text-gray-900 dark:text-gray-100 p-3">
      <div class="flex justify-between items-center">
      <h3 class="text-lg font-semibold">${prog.name}</h3>
      <button class="toggle-details text-sm hover:underline px-3 py-1 text-indigo-600 dark:text-indigo-300">View Details</button>
      </div>
      <div class="program-details p-4 text-gray-800 dark:text-gray-200 hidden">
      <p class="mb-2">${prog.description}</p>
      <p class="mb-1"><strong>Degree:</strong> ${prog.degree}</p>
      <p class="mb-1"><strong>Duration:</strong> ${prog.details.duration}</p>
      <p class="mb-1"><strong>Mode:</strong> ${prog.details.mode}</p>
      <p class="mb-1"><strong>Language:</strong> ${prog.details.language}</p>
      <p class="mb-1"><strong>Tuition Fees:</strong> ${prog.details.tuition.amount} ${prog.details.tuition.currency}</p>
      <p class="mb-1"><strong>Specializations:</strong> ${prog.details.specializations && prog.details.specializations.length > 0 ? prog.details.specializations.join(', ') : 'N/A'}</p>
      <p class="mb-1"><strong>Entry Requirements:</strong> ${prog.details.entryRequirements && prog.details.entryRequirements.length > 0 ? prog.details.entryRequirements.join(', ') : 'N/A'}</p>
      <p class="mb-1 text-xs text-gray-500 dark:text-gray-400"><strong>Last Updated:</strong> ${prog.lastUpdated}</p>
      </div>
    </li>
    `).join('');
}

