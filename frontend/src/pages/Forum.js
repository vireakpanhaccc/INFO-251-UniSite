export default function Forum() {
	const el = document.createElement("div");
	el.innerHTML = `
    <div class="min-h-screen bg-gradient-to-br from-white-50 via-white-50 to-white-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div class="max-w-7xl mx-auto p-6 md:p-8">
        <!-- Header -->
        <div class="text-center mb-8">
          <h1 class="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-yellow-500 to-yellow-500 dark:from-yellow-400 dark:to-yellow-400 bg-clip-text text-transparent">
            UniSites Forum
          </h1>
          <p class="text-gray-600 dark:text-gray-300 text-lg">Share your thoughts, ask questions, and connect with others</p>
        </div>

        <!-- Search & Filter Controls -->
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 mb-6 border border-gray-200 dark:border-gray-700">
          <div class="flex flex-col md:flex-row gap-4">
            <div class="flex-1 relative">
              <svg class="absolute left-3 top-3 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
              <input 
                id="forum-search" 
                type="search" 
                placeholder="Search posts..." 
                class="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400 focus:border-transparent transition-all" 
              />
            </div>
            <select 
              id="filter-category" 
              class="md:w-56 px-4 py-2.5 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400 focus:border-transparent transition-all"
            >
              <option value="">All Categories</option>
              <option value="Course Recommendations">Course Recommendations</option>
              <option value="Study Tips">Study Tips</option>
              <option value="Campus Events">Campus Events</option>
              <option value="General Questions">General Questions</option>
            </select>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <!-- Main Content -->
          <div class="lg:col-span-2 space-y-6">
            <!-- Post Form -->
            <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
              <h2 class="text-xl font-bold mb-4 text-gray-800 dark:text-white flex items-center gap-2">
                <svg class="w-5 h-5 text-cyan-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                </svg>
                Create New Post
              </h2>
              <div id="forum-post-form" class="space-y-4">
                <div>
                  <input 
                    type="text" 
                    id="forum-title" 
                    placeholder="Post title..." 
                    class="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400 focus:border-transparent transition-all" 
                  />
                </div>
                <div>
                  <textarea 
                    id="forum-content" 
                    placeholder="Share your thoughts..." 
                    class="w-full h-24 px-4 py-2.5 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400 focus:border-transparent transition-all resize-none"
                  ></textarea>
                </div>
                <div>
                  <select 
                    id="forum-category" 
                    class="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400 focus:border-transparent transition-all"
                  >
                    <option value="">Select Category</option>
                    <option value="Course Recommendations">Course Recommendations</option>
                    <option value="Study Tips">Study Tips</option>
                    <option value="Campus Events">Campus Events</option>
                    <option value="General Questions">General Questions</option>
                  </select>
                </div>
                <div>
                  <label class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Attach file (optional)</label>
                  <input 
                    type="file" 
                    id="forum-attachment" 
                    class="w-full text-sm text-gray-600 dark:text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-cyan-50 dark:file:bg-cyan-900 file:text-cyan-700 dark:file:text-cyan-300 file:cursor-pointer hover:file:bg-cyan-100 dark:hover:file:bg-cyan-800 transition-all" 
                  />
                </div>
                <button 
                  id="submit-post" 
                  class="w-full bg-gradient-to-r from-gray-600 to-gray-600 hover:from-white-700 hover:to-gray-700 dark:from-white-500 dark:to-white-500 dark:hover:from-white-600 dark:hover:to-white-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200"
                >
                  Publish Post
                </button>
              </div>
            </div>

            <!-- Pro Tip -->
            <div class="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 border-l-4 border-teal-500 dark:border-teal-400 p-4 rounded-lg">
              <div class="flex items-start gap-3">
                <svg class="w-5 h-5 text-teal-600 dark:text-teal-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                </svg>
                <div>
                  <strong class="text-teal-800 dark:text-teal-300">Pro tip:</strong>
                  <span class="text-teal-700 dark:text-teal-400"> Filter posts by category or use the search bar to find specific topics!</span>
                </div>
              </div>
            </div>

            <!-- Posts Section -->
            <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
              <div class="flex items-center justify-between mb-4">
                <h2 class="text-2xl font-bold text-gray-800 dark:text-white">Recent Posts</h2>
                <button 
                  id="refresh-posts" 
                  class="bg-teal-500 hover:bg-teal-600 dark:bg-teal-600 dark:hover:bg-teal-700 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center gap-2"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                  </svg>
                  Refresh
                </button>
              </div>
              <div id="forum-posts" class="space-y-4" aria-live="polite"></div>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="space-y-6">
            <!-- Statistics -->
            <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 class="text-lg font-bold mb-4 text-gray-800 dark:text-white flex items-center gap-2">
                <svg class="w-5 h-5 text-cyan-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
                Forum Statistics
              </h3>
              <ul class="space-y-3">
                <li class="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                  <span class="text-gray-600 dark:text-gray-400">Total Posts</span>
                  <span class="font-bold text-cyan-600 dark:text-cyan-400" id="forum-total-posts">0</span>
                </li>
                <li class="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                  <span class="text-gray-600 dark:text-gray-400">Active Users</span>
                  <span class="font-bold text-cyan-600 dark:text-cyan-400" id="forum-active-users">12</span>
                </li>
                <li class="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                  <span class="text-gray-600 dark:text-gray-400">Categories</span>
                  <span class="font-bold text-cyan-600 dark:text-cyan-400">4</span>
                </li>
                <li class="flex justify-between items-center py-2">
                  <span class="text-gray-600 dark:text-gray-400">Last Post</span>
                  <span class="font-medium text-gray-800 dark:text-gray-300 text-sm" id="forum-last-post">N/A</span>
                </li>
              </ul>
            </div>

            <!-- Community Highlight -->
            <div class="bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 rounded-xl shadow-lg p-6 border-2 border-yellow-300 dark:border-yellow-600">
              <div class="flex items-start gap-3">
                <svg class="w-6 h-6 text-yellow-600 dark:text-yellow-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <div>
                  <h4 class="font-bold text-yellow-900 dark:text-yellow-300 mb-2">Community Highlight</h4>
                  <p class="text-yellow-800 dark:text-yellow-400 text-sm">
                    Check out the <a href="#" class="underline hover:text-yellow-600 dark:hover:text-yellow-300 font-semibold">Exam Preparation</a> thread for tips and resources!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

	// ----- Simple state & persistence -----
	const LS_KEY = "forum_posts";
	const posts = JSON.parse(localStorage.getItem(LS_KEY) || "[]");

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
		$("#forum-total-posts").textContent = String(posts.length);
		const last = posts[posts.length - 1];
		$("#forum-last-post").textContent = last ? fmtDate(last.createdAt) : "N/A";
	}

	function renderPosts() {
		const container = $("#forum-posts");
		container.innerHTML = "";

		const q = ($("#forum-search").value || "").toLowerCase();
		const cat = $("#filter-category").value;

		const filtered = posts
			.slice()
			.reverse()
			.filter((p) => (cat ? p.category === cat : true))
			.filter(
				(p) =>
					!q ||
					p.title.toLowerCase().includes(q) ||
					p.content.toLowerCase().includes(q)
			);

		if (!filtered.length) {
			const empty = document.createElement("div");
			empty.className = "text-center py-12 text-gray-500 dark:text-gray-400";
			empty.innerHTML = `
        <svg class="w-16 h-16 mx-auto mb-4 text-gray-300 dark:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path>
        </svg>
        <p class="text-lg font-medium">No posts found</p>
        <p class="text-sm">Try adjusting your search or filters</p>
      `;
			container.appendChild(empty);
			renderStats();
			return;
		}

		for (const p of filtered) {
			const card = document.createElement("article");
			card.className =
				"group bg-gradient-to-br from-white to-gray-50 dark:from-gray-700 dark:to-gray-800 rounded-lg border border-gray-200 dark:border-gray-600 p-5 hover:shadow-xl hover:border-yellow-300 dark:hover:border-yellow-500 transition-all duration-300 transform hover:-translate-y-1";

			// Category badge
			const badge = document.createElement("span");
			badge.className =
				"inline-block px-3 py-1 text-xs font-semibold rounded-full bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 mb-3";
			badge.textContent = p.category;

			// Title
			const h3 = document.createElement("h3");
			h3.className =
				"text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors";
			h3.textContent = p.title;

			// Meta info
			const meta = document.createElement("div");
			meta.className =
				"flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3";
			meta.innerHTML = `
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <span>${fmtDate(p.createdAt)}</span>
      `;

			// Content
			const body = document.createElement("p");
			body.className = "text-gray-700 dark:text-gray-300 leading-relaxed";
			body.textContent = p.content;

			card.appendChild(badge);
			card.appendChild(h3);
			card.appendChild(meta);
			card.appendChild(body);

			if (p.attachmentName) {
				const att = document.createElement("div");
				att.className =
					"mt-4 pt-4 border-t border-gray-200 dark:border-gray-600";

				const extension = p.attachmentName.split(".").pop().toLowerCase();
				const isImage = ["jpg", "jpeg", "png", "gif", "bmp", "svg"].includes(
					extension
				);

				if (isImage) {
					const img = document.createElement("img");
					img.src = `path_to_images_folder/${p.attachmentName}`;
					img.alt = p.attachmentName;
					img.className = "max-w-full rounded-lg shadow-md";
					att.appendChild(img);
				} else {
					att.className +=
						" flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400";
					att.innerHTML = `
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>
            </svg>
            <span>Attachment: ${p.attachmentName}</span>
          `;
				}

				card.appendChild(att);
			}

			container.appendChild(card);
		}

		renderStats();
	}

	// ----- Events -----
	$("#submit-post").addEventListener("click", function () {
		const title = $("#forum-title").value.trim();
		const content = $("#forum-content").value.trim();
		const category = $("#forum-category").value;
		const fileInput = $("#forum-attachment");
		const attachmentName =
			fileInput.files && fileInput.files[0] ? fileInput.files[0].name : "";

		if (!title || !content || !category) return;

		posts.push({
			id: crypto.randomUUID(),
			title,
			content,
			category,
			attachmentName,
			createdAt: Date.now(),
		});

		save();
		$("#forum-title").value = "";
		$("#forum-content").value = "";
		$("#forum-category").value = "";
		fileInput.value = "";

		renderPosts();
	});

	$("#refresh-posts").addEventListener("click", () => {
		const fresh = JSON.parse(localStorage.getItem(LS_KEY) || "[]");
		posts.length = 0;
		posts.push(...fresh);
		renderPosts();
	});

	$("#forum-search").addEventListener("input", renderPosts);
	$("#filter-category").addEventListener("change", renderPosts);

	renderPosts();

	return el;
}
