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

  // Utilities
  function escapeHtml(str) {
    return String(str ?? '')
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
    const n = String(name ?? '').trim();
    if (!n) return '';
    return n
      .split(/\s+/)
      .map(part => part[0] || '')
      .slice(0, 2)
      .join('')
      .toUpperCase();
  }

  // Load persisted user data from localStorage (use defaults if none)
  const persisted = loadStoredUser() || {};
  if (!Object.keys(persisted).length) {
    console.log('No user data found in localStorage. Using defaults.');
  }

  const user = {
    name: persisted.name || 'Jane Doe',
    email: persisted.email || 'email@example.com',
    role: persisted.role || 'User',
    location: persisted.location || 'San Francisco, CA',
    website: persisted.website || 'https://example.com',
    bio: persisted.bio || 'Frontend developer. Loves clean UI and good coffee.',
    posts: persisted.posts ?? 42,
    followers: persisted.followers ?? 1280,
    following: persisted.following ?? 180,
    avatar: persisted.avatar || null, // data URL or null
  };

  // Helper to render avatar HTML (img if avatar present, otherwise initials)
  function renderAvatarHtml(avatarSrc, name) {
    if (avatarSrc) {
      return `<img src="${escapeAttr(avatarSrc)}" alt="${escapeAttr(name)}" class="avatar-img w-full h-full rounded-full object-cover" />`;
    }
    return escapeHtml(getInitials(name));
  }

  // Root element
  const el = document.createElement('div');
  el.className = 'user-profile font-sans bg-gray-50 dark:bg-gray-900 p-6 min-h-screen';

  // Render HTML with consistent classes for querying
  el.innerHTML = `
    <div class="max-w-5xl mx-auto dark:text-white">

      <!-- Top Header -->
      <header class="bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-lg p-6 flex flex-col md:flex-row items-center gap-6">
        <div class="avatar w-28 h-28 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-300 flex items-center justify-center text-white text-4xl font-bold overflow-hidden" aria-hidden="true">
          ${renderAvatarHtml(user.avatar, user.name)}
        </div>
        <div class="flex-1 min-w-0">
          <div class="flex items-start justify-between gap-4">
            <div>
              <h1 class="up-name text-2xl font-semibold text-[#2c3e50ec] dark:text-white">${escapeHtml(user.name)}</h1>
              <p class="up-role text-sm text-gray-500 dark:text-gray-300 mt-1">${escapeHtml(user.role)} • ${escapeHtml(user.location)}</p>
              <p class="up-email text-sm text-gray-600 dark:text-gray-400 mt-2">${escapeHtml(user.email)}</p>
            </div>
            <div class="flex gap-2">
              <button class="btn-edit inline-flex items-center gap-2 bg-gray-800 text-white py-2 px-4 rounded-lg shadow-md hover:bg-gray-700">Edit</button>
              <button class="btn-message inline-flex items-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-500">Message</button>
            </div>
          </div>
          <p class="mt-4 text-gray-700 dark:text-gray-300 up-bio">${escapeHtml(user.bio)}</p>
        </div>
      </header>

      <!-- Main content: stats and edit form -->
      <main class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">

        <!-- Stats card -->
        <section class="col-span-1 bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-lg p-6">
          <h2 class="text-lg font-semibold text-[#2c3e50ec] dark:text-white mb-4">Stats</h2>
          <div class="grid grid-cols-3 text-center">
            <div>
              <p class="font-bold text-xl text-gray-900 dark:text-white">${user.posts}</p>
              <p class="text-sm text-gray-600 dark:text-gray-400">Posts</p>
            </div>
            <div>
              <p class="font-bold text-xl text-gray-900 dark:text-white">${user.followers}</p>
              <p class="text-sm text-gray-600 dark:text-gray-400">Followers</p>
            </div>
            <div>
              <p class="font-bold text-xl text-gray-900 dark:text-white">${user.following}</p>
              <p class="text-sm text-gray-600 dark:text-gray-400">Following</p>
            </div>
          </div>

          <div class="mt-6 text-center">
            <a class="website-link text-sm text-blue-600 dark:text-blue-400 hover:underline" href="${escapeAttr(user.website)}" target="_blank" rel="noopener noreferrer">${escapeHtml(user.website)}</a>
          </div>
        </section>

        <!-- Edit form (visible only when toggled) -->
        <section class="col-span-2">
          <div class="edit-form bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-lg p-6 hidden" aria-hidden="true">
            <h2 class="text-lg font-semibold text-[#2c3e50ec] dark:text-white mb-4">Edit Profile</h2>

            <!-- Photo controls -->
            <div class="flex items-center gap-4 mb-4">
              <div class="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-300 flex items-center justify-center text-white text-2xl font-bold overflow-hidden photo-preview" aria-hidden="true">
                ${renderAvatarHtml(user.avatar, user.name)}
              </div>
              <div class="flex flex-col gap-2">
                <div>
                  <button type="button" class="upload-btn bg-gray-800 text-white py-1 px-3 rounded-lg">Upload Photo</button>
                  <button type="button" class="remove-photo-btn bg-red-200 text-red-800 py-1 px-3 rounded-lg ml-2 dark:bg-red-700 dark:text-white">Remove</button>
                </div>
                <input type="file" accept="image/*" class="photo-input hidden" />
                <p class="text-sm text-gray-500 dark:text-gray-400">Recommended: square image</p>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" class="name-input w-full p-3 border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white rounded-lg" placeholder="Full name" value="${escapeAttr(user.name)}" />
              <input type="email" class="email-input w-full p-3 border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white rounded-lg" placeholder="Email" value="${escapeAttr(user.email)}" />
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <input type="text" class="location-input w-full p-3 border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white rounded-lg" placeholder="Location" value="${escapeAttr(user.location)}" />
              <input type="url" class="website-input w-full p-3 border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white rounded-lg" placeholder="Website" value="${escapeAttr(user.website)}" />
            </div>

            <textarea class="bio-input w-full p-3 border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white rounded-lg mt-4" rows="4" placeholder="Bio">${escapeHtml(user.bio)}</textarea>
            <div class="flex justify-end gap-3 mt-4">
              <button class="cancel-btn bg-gray-200 dark:bg-gray-700 dark:text-white text-gray-800 py-2 px-4 rounded-lg">Cancel</button>
              <button class="save-btn bg-green-600 dark:bg-emerald-500 text-white py-2 px-4 rounded-lg">Save</button>
            </div>
          </div>

          <!-- Quick info / description card -->
          <div class="mt-6 bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-lg p-6">
            <h3 class="text-lg font-semibold text-[#2c3e50ec] dark:text-white mb-2">About</h3>
            <p class="text-gray-700 dark:text-gray-300">${escapeHtml(user.bio)}</p>
          </div>
        </section>

      </main>
    </div>
  `;

  // Query elements (classes now match markup)
  const editBtn = el.querySelector('.btn-edit');
  const msgBtn = el.querySelector('.btn-message');
  const editForm = el.querySelector('.edit-form');
  const saveBtn = el.querySelector('.save-btn');
  const cancelBtn = el.querySelector('.cancel-btn');
  const inpName = el.querySelector('.name-input');
  const inpEmail = el.querySelector('.email-input');
  const inpBio = el.querySelector('.bio-input');
  const inpLocation = el.querySelector('.location-input');
  const inpWebsite = el.querySelector('.website-input');

  const uiName = el.querySelector('.up-name');
  const uiEmail = el.querySelector('.up-email');
  const uiBio = el.querySelector('.up-bio');
  const uiRole = el.querySelector('.up-role');
  const avatarEl = el.querySelector('.avatar');
  const websiteLink = el.querySelector('.website-link');

  // Photo-related elements
  const photoPreview = el.querySelector('.photo-preview');
  const uploadBtn = el.querySelector('.upload-btn');
  const removePhotoBtn = el.querySelector('.remove-photo-btn');
  const photoInput = el.querySelector('.photo-input');

  // Pending avatar (data URL) while editing
  let pendingAvatar = null;
  let originalAvatar = user.avatar ?? null;

  function updateAvatarDisplay(src) {
    // Replace avatar content with image or initials
    if (avatarEl) {
      avatarEl.innerHTML = renderAvatarHtml(src, user.name);
    }
    if (photoPreview) {
      photoPreview.innerHTML = renderAvatarHtml(src, user.name);
    }
  }

  // Toggle edit form
  if (editBtn && editForm) {
    editBtn.addEventListener('click', () => {
      const isHidden = editForm.classList.toggle('hidden');
      editForm.setAttribute('aria-hidden', String(isHidden));
      // populate inputs when opening
      if (!isHidden) {
        if (inpName) inpName.value = user.name;
        if (inpEmail) inpEmail.value = user.email;
        if (inpBio) inpBio.value = user.bio;
        if (inpLocation) inpLocation.value = user.location;
        if (inpWebsite) inpWebsite.value = user.website;
        // reset pending/original avatar state
        originalAvatar = user.avatar ?? null;
        pendingAvatar = null;
        if (photoInput) photoInput.value = '';
        updateAvatarDisplay(originalAvatar);
      }
    });
  }

  // Upload photo button -> trigger hidden input
  if (uploadBtn && photoInput) {
    uploadBtn.addEventListener('click', () => {
      photoInput.click();
    });
    photoInput.addEventListener('change', (ev) => {
      const f = ev.target.files && ev.target.files[0];
      if (!f) return;
      // optional: simple size/type checks
      if (!f.type.startsWith('image/')) {
        alert('Please select an image file.');
        photoInput.value = '';
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        pendingAvatar = reader.result;
        updateAvatarDisplay(pendingAvatar);
      };
      reader.readAsDataURL(f);
    });
  }

  // Remove photo -> clear avatar preview & mark for removal
  if (removePhotoBtn) {
    removePhotoBtn.addEventListener('click', () => {
      pendingAvatar = ''; // empty string indicates explicit remove
      if (photoInput) photoInput.value = '';
      updateAvatarDisplay(null);
    });
  }

  // Cancel: reset fields and hide (revert avatar)
  if (cancelBtn) {
    cancelBtn.addEventListener('click', () => {
      if (inpName) inpName.value = user.name;
      if (inpEmail) inpEmail.value = user.email;
      if (inpBio) inpBio.value = user.bio;
      if (inpLocation) inpLocation.value = user.location;
      if (inpWebsite) inpWebsite.value = user.website;
      // revert avatar preview to original persisted avatar
      pendingAvatar = null;
      updateAvatarDisplay(originalAvatar);
      if (editForm) {
        editForm.classList.add('hidden');
        editForm.setAttribute('aria-hidden', 'true');
      }
    });
  }

  // Save: update user, UI, localStorage
  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      if (inpName) user.name = inpName.value.trim() || user.name;
      if (inpEmail) user.email = inpEmail.value.trim() || user.email;
      if (inpBio) user.bio = inpBio.value.trim() || user.bio;
      if (inpLocation) user.location = inpLocation.value.trim() || user.location;
      if (inpWebsite) user.website = inpWebsite.value.trim() || user.website;

      // Apply pendingAvatar:
      // - null  => user.avatar unchanged
      // - ''    => explicit remove -> set to null
      // - dataURL => set to data URL
      if (pendingAvatar !== null) {
        user.avatar = pendingAvatar || null;
      }

      if (uiName) uiName.textContent = user.name;
      if (uiEmail) uiEmail.textContent = user.email;
      if (uiBio) uiBio.textContent = user.bio;
      if (uiRole) uiRole.textContent = `${user.role} • ${user.location}`;
      if (websiteLink) {
        websiteLink.href = user.website;
        websiteLink.textContent = user.website;
      }
      updateAvatarDisplay(user.avatar);

      saveToStorage(user);

      if (editForm) {
        editForm.classList.add('hidden');
        editForm.setAttribute('aria-hidden', 'true');
      }
      // reset pending/original
      pendingAvatar = null;
      originalAvatar = user.avatar ?? null;
    });
  }

  // Message button (placeholder)
  if (msgBtn) {
    msgBtn.addEventListener('click', () => {
      alert(`Open message composer for ${user.name}`);
    });
  }

  return el;
}
