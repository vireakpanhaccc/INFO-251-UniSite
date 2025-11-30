export default function UserProfile() {
  const STORAGE_KEY = 'user_profile';

  // Load and save to localStorage
  function loadStoredUser() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }

  function saveToStorage(user) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    } catch {
      console.error('Failed to save user data');
    }
  }

  // Load persisted user data from localStorage
  const persisted = loadStoredUser();
  
  if (!persisted) {
    console.log("No user data found in localStorage.");
    return;
  }

  const user = {
    name: persisted.name || 'Jane Doe',
    email: persisted.email || 'email@example.com',
    role: persisted.role || 'user',
    location: persisted.location || 'San Francisco, CA',
    website: persisted.website || 'https://example.com',
    bio: persisted.bio || 'Frontend developer. Loves clean UI and good coffee.',
    posts: persisted.posts || 42,
    followers: persisted.followers || 1280,
    following: persisted.following || 180,
    ...(persisted || {}),
  };

  const el = document.createElement('div');
  el.className = 'user-profile font-sans bg-gray-50 p-6';

  // Create the user profile HTML structure
  el.innerHTML = `
    <div class="profile-container max-w-4xl mx-auto bg-white rounded-xl p-6 shadow-xl">
      <!-- Profile Header -->
      <div class="profile-header flex items-center gap-6">
        <div class="avatar bg-gradient-to-br from-indigo-500 to-cyan-300 w-24 h-24 rounded-full flex items-center justify-center text-white text-3xl font-bold">
          ${escapeHtml(getInitials(user.name))}
        </div>
        <div class="user-info">
          <h2 class="text-2xl font-semibold text-gray-900">${escapeHtml(user.name)}</h2>
          <p class="text-sm text-gray-500 mt-1">${escapeHtml(user.email)}</p>
          <p class="text-sm text-gray-500 mt-1">${escapeHtml(user.role)}</p>
        </div>
      </div>

      <!-- Profile Details Section -->
      <div class="profile-details mt-6">
        <div class="flex gap-6 text-gray-600">
          <div class="flex-1">
            <h3 class="text-xl font-semibold text-gray-900">About</h3>
            <p class="mt-2 text-gray-700">${escapeHtml(user.bio)}</p>
          </div>
          <div class="flex-1">
            <h3 class="text-xl font-semibold text-gray-900">Location</h3>
            <p class="mt-2 text-gray-700">${escapeHtml(user.location)}</p>
            <h3 class="text-xl font-semibold text-gray-900 mt-4">Website</h3>
            <a href="${escapeAttr(user.website)}" target="_blank" class="text-blue-600 hover:underline">${escapeHtml(user.website)}</a>
          </div>
        </div>
      </div>

      <!-- Stats Section -->
      <div class="profile-stats flex justify-between mt-6 text-center text-gray-600">
        <div class="stat flex-1">
          <p class="font-bold text-xl text-gray-900">${user.posts}</p>
          <p class="text-sm">Posts</p>
        </div>
        <div class="stat flex-1">
          <p class="font-bold text-xl text-gray-900">${user.followers}</p>
          <p class="text-sm">Followers</p>
        </div>
        <div class="stat flex-1">
          <p class="font-bold text-xl text-gray-900">${user.following}</p>
          <p class="text-sm">Following</p>
        </div>
      </div>

      <!-- Edit and Message Buttons -->
      <div class="profile-actions flex justify-between gap-4 mt-6">
        <button class="btn-edit bg-gray-800 text-white py-2 px-4 rounded-lg shadow-md hover:bg-gray-700">Edit Profile</button>
        <button class="btn-message bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-500">Message</button>
      </div>

      <!-- Edit Form (hidden by default) -->
      <div class="edit-form hidden mt-6">
        <input class="edit-input w-full p-3 border border-gray-300 rounded-lg" placeholder="Full Name" value="${escapeAttr(user.name)}" />
        <input class="edit-input w-full p-3 border border-gray-300 rounded-lg mt-4" placeholder="Email" value="${escapeAttr(user.email)}" />
        <textarea class="edit-input w-full p-3 border border-gray-300 rounded-lg mt-4" placeholder="Short Bio">${escapeHtml(user.bio)}</textarea>
        <div class="mt-4 flex gap-4">
          <button class="save-btn bg-green-600 text-white py-2 px-4 rounded-lg">Save Changes</button>
          <button class="cancel-btn bg-gray-200 text-gray-800 py-2 px-4 rounded-lg">Cancel</button>
        </div>
      </div>
    </div>
  `;

  // Safe HTML and attribute insertion helpers
  function escapeHtml(str) {
    return String(str)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#39;');
  }

  function escapeAttr(str) {
    return escapeHtml(str).replaceAll('"', '&quot;');
  }

  function getInitials(name) {
    return name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase();
  }

  // Event listeners for interactivity
  const editBtn = el.querySelector('.btn-edit');
  const editForm = el.querySelector('.edit-form');
  const saveBtn = el.querySelector('.save-btn');
  const cancelBtn = el.querySelector('.cancel-btn');
  const inpName = el.querySelector('.edit-input[name="name"]');
  const inpEmail = el.querySelector('.edit-input[name="email"]');
  const inpBio = el.querySelector('.edit-input[name="bio"]');

  // Toggle edit form visibility
  editBtn.addEventListener('click', () => {
    editForm.classList.toggle('hidden');
  });

  // Cancel button action
  cancelBtn.addEventListener('click', () => {
    inpName.value = user.name;
    inpEmail.value = user.email;
    inpBio.value = user.bio;
    editForm.classList.add('hidden');
  });

  // Save changes action
  saveBtn.addEventListener('click', () => {
    user.name = inpName.value.trim();
    user.email = inpEmail.value.trim();
    user.bio = inpBio.value.trim();

    // Update UI with new data
    el.querySelector('.up-name').textContent = user.name;
    el.querySelector('.up-email').textContent = user.email;
    el.querySelector('.up-bio').textContent = user.bio;

    // Save to localStorage
    saveToStorage(user);

    // Hide the edit form
    editForm.classList.add('hidden');
  });

  // Message button action (placeholder)
  el.querySelector('.btn-message').addEventListener('click', () => {
    alert(`Open message composer for ${user.name}`);
  });

  return el;
}
