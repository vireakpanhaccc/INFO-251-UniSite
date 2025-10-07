export default function Forum() {
  const el = document.createElement('div');
  el.innerHTML = `
    <div class="max-w-7xl mx-auto p-8">
      <h1 class="text-center text-3xl font-bold mb-2">Forum</h1>
      <p class="text-center text-gray-600 mb-6">Welcome to the UniSite Forum! Share your thoughts, ask questions, and connect with others.</p>

      <!-- Controls: search + filter -->
      <div class="flex gap-4 items-center justify-between mb-5">
        <input id="forum-search" type="search" placeholder="Search posts..." class="flex-1 px-3 py-2 rounded border border-gray-300" />
        <select id="filter-category" class="w-56 px-3 py-2 rounded border border-gray-300">
          <option value="">All Categories</option>
          <option value="Course Recommendations">Course Recommendations</option>
          <option value="Study Tips">Study Tips</option>
          <option value="Campus Events">Campus Events</option>
          <option value="General Questions">General Questions</option>
        </select>
      </div>

      <div class="flex gap-8 flex-wrap">
        <div class="min-w-[300px] flex-2">
          <form id="forum-post-form" class="mb-8 bg-gray-50 p-4 rounded-lg">
            <div class="mb-4">
              <input type="text" id="forum-title" placeholder="Title" required class="w-full px-3 py-2 rounded border border-gray-300" />
            </div>
            <div class="mb-4">
              <textarea id="forum-content" placeholder="Your post..." required class="w-full h-20 px-3 py-2 rounded border border-gray-300"></textarea>
            </div>
            <div class="mb-4">
              <select id="forum-category" required class="w-full px-3 py-2 rounded border border-gray-300">
                <option value="">Select Category</option>
                <option value="Course Recommendations">Course Recommendations</option>
                <option value="Study Tips">Study Tips</option>
                <option value="Campus Events">Campus Events</option>
                <option value="General Questions">General Questions</option>
              </select>
            </div>
            <div class="mb-4">
              <label class="block mb-2 text-gray-600">Attach file (optional):</label>
              <input type="file" id="forum-attachment" class="w-full" />
            </div>
            <button type="submit" class="bg-blue-600 text-white border-none px-6 py-2 rounded cursor-pointer">Post</button>
          </form>

          <div class="bg-green-50 p-4 rounded-lg mb-8">
            <strong>Pro tip:</strong> Filter posts by category or search using the controls above!
          </div>

          <hr class="my-4" />
          <div class="flex items-center gap-4 mb-4">
            <h2 class="mt-8 text-xl font-semibold">Recent Posts</h2>
            <button id="refresh-posts" class="bg-green-600 text-white border-none px-4 py-1 rounded cursor-pointer">Refresh</button>
          </div>

          <div id="forum-posts" class="mt-4" aria-live="polite"></div>

          <div class="mt-8 bg-gray-100 p-4 rounded-lg border border-gray-200">
            <h3 class="mt-0 text-lg font-semibold">Forum Statistics</h3>
            <ul class="text-gray-600 pl-5 list-disc">
              <li>Total Posts: <span id="forum-total-posts">0</span></li>
              <li>Active Users: <span id="forum-active-users">12</span></li>
              <li>Categories: 4</li>
              <li>Last Post: <span id="forum-last-post">N/A</span></li>
            </ul>
          </div>

          <div class="mt-8 bg-yellow-100 p-4 rounded-lg border border-yellow-200">
            <strong>Community Highlight:</strong> Check out the <a href="#" class="text-blue-600 underline">Exam Preparation</a> thread for tips and resources!
          </div>
        </div>

        <aside class="flex-1 min-w-[220px] bg-gray-100 p-4 rounded-lg">
          <h3 class="mt-0 text-lg font-semibold">Forum Tips</h3>
          <ul class="text-gray-600 pl-5 list-disc">
            <li>Be respectful and constructive.</li>
            <li>Stay on topic.</li>
            <li>Use clear titles for your posts.</li>
            <li>Report inappropriate content.</li>
            <li>Check for existing threads before posting.</li>
          </ul>

          <h3 class="mt-8 text-lg font-semibold">Popular Topics</h3>
          <ul class="text-gray-600 pl-5 list-disc">
            <li>Course Recommendations</li>
            <li>Study Tips</li>
            <li>Campus Events</li>
            <li>General Questions</li>
            <li>Internship Opportunities</li>
            <li>Exam Preparation</li>
          </ul>

          <h3 class="mt-8 text-lg font-semibold">Quick Links</h3>
          <ul class="text-blue-600 pl-5 list-disc">
            <li><a href="#" class="text-blue-600 underline">Student Resources</a></li>
            <li><a href="#" class="text-blue-600 underline">Academic Calendar</a></li>
            <li><a href="#" class="text-blue-600 underline">Support Services</a></li>
            <li><a href="#" class="text-blue-600 underline">Library Portal</a></li>
          </ul>

          <div class="mt-8 bg-yellow-50 p-4 rounded-md border border-yellow-300">
            <strong>Announcement:</strong> Midterm study group meets Friday at 5pm in the library!
          </div>
          <div class="mt-8 bg-blue-50 p-4 rounded-md border border-blue-300">
            <strong>Tip:</strong> Use the search bar above to quickly find topics!
          </div>
          <div class="mt-8 bg-indigo-50 p-4 rounded-md border border-indigo-300">
            <strong>Featured Thread:</strong> <a href="#" class="text-indigo-700 underline">Internship Opportunities for Summer 2024</a>
          </div>
          <div class="mt-8 bg-green-50 p-4 rounded-md border border-green-300">
            <strong>Weekly Poll:</strong> <span class="text-green-700">What's your favorite study spot on campus?</span>
            <ul class="mt-2 pl-5 list-disc">
              <li>Library</li>
              <li>Café</li>
              <li>Outdoor Spaces</li>
              <li>Student Lounge</li>
            </ul>
            <button class="mt-2 bg-green-500 text-white border-none px-4 py-1 rounded cursor-pointer">Vote</button>
          </div>
        </aside>
      </div>
    </div>
  `;

  // ----- Simple state & persistence -----
  const LS_KEY = 'forum_posts';
  const posts = JSON.parse(localStorage.getItem(LS_KEY) || '[]');

  // ----- Helpers -----
  const $ = (sel) => el.querySelector(sel);

  function save() {
    localStorage.setItem(LS_KEY, JSON.stringify(posts));
  }

  function fmtDate(ts) {
    const d = new Date(ts);
    return d.toLocaleString();
  }

  function renderStats() {
    $('#forum-total-posts').textContent = String(posts.length);
    const last = posts[posts.length - 1];
    $('#forum-last-post').textContent = last ? fmtDate(last.createdAt) : 'N/A';
  }

  function renderPosts() {
    const container = $('#forum-posts');
    container.innerHTML = ''; // clear

    const q = ($('#forum-search').value || '').toLowerCase();
    const cat = $('#filter-category').value;

    const filtered = posts
      .slice()                     // copy
      .reverse()                   // newest first
      .filter(p => (cat ? p.category === cat : true))
      .filter(p =>
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.content.toLowerCase().includes(q)
      );

    if (!filtered.length) {
      const empty = document.createElement('div');
      empty.style.color = '#666';
      empty.textContent = 'No posts found.';
      container.appendChild(empty);
    }

    for (const p of filtered) {
      const card = document.createElement('article');
      card.className = 'forum-post';
      card.style.cssText = 'border:1px solid #e5e7eb; border-radius:8px; padding:0.75rem 1rem; margin-bottom:0.75rem; background:#fff;';

      // Title
      const h3 = document.createElement('h3');
      h3.style.margin = '0 0 0.25rem';
      h3.textContent = p.title;

      // Meta
      const meta = document.createElement('div');
      meta.style.cssText = 'font-size:12px; color:#666; margin-bottom:0.5rem;';
      meta.textContent = `${p.category} • ${fmtDate(p.createdAt)}`;

      // Content
      const body = document.createElement('p');
      body.style.margin = '0';
      body.textContent = p.content;

      card.appendChild(h3);
      card.appendChild(meta);
      card.appendChild(body);

      if (p.attachmentName) {
        const att = document.createElement('div');
        att.style.cssText = 'margin-top:0.5rem; font-size:12px; color:#555;';
        att.textContent = `Attachment: ${p.attachmentName}`;
        card.appendChild(att);
      }

      container.appendChild(card);
    }

    renderStats();
  }

  // ----- Events -----
  // Post form
  $('#forum-post-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const title = $('#forum-title').value.trim();
    const content = $('#forum-content').value.trim();
    const category = $('#forum-category').value;
    const fileInput = $('#forum-attachment');
    const attachmentName = fileInput.files && fileInput.files[0] ? fileInput.files[0].name : '';

    if (!title || !content || !category) return;

    // Push new post (safe: we store raw strings; rendering uses textContent)
    posts.push({
      id: crypto.randomUUID(),
      title,
      content,
      category,
      attachmentName,
      createdAt: Date.now(),
    });

    save();
    $('#forum-title').value = '';
    $('#forum-content').value = '';
    $('#forum-category').value = '';
    fileInput.value = '';

    renderPosts();
  });

  // Refresh button
  $('#refresh-posts').addEventListener('click', () => {
    // re-read from LS in case other tabs changed it
    const fresh = JSON.parse(localStorage.getItem(LS_KEY) || '[]');
    posts.length = 0;
    posts.push(...fresh);
    renderPosts();
  });

  // Filters
  $('#forum-search').addEventListener('input', renderPosts);
  $('#filter-category').addEventListener('change', renderPosts);

  // Initial render
  renderPosts();

  return el;
}
