export default function About() {
  const el = document.createElement('div');
  el.innerHTML = `
    <main class="about-page max-w-6xl mx-auto px-4 py-8 md:px-8 lg:px-16 space-y-10 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100" role="main" aria-labelledby="about-heading">

      <header class="text-center">
        <h1 id="about-heading" class="text-4xl md:text-5xl font-extrabold text-slate-800 dark:text-slate-100 mb-2">About UniSite</h1>
        <p class="inline-block bg-slate-800 text-white font-semibold text-sm md:text-lg px-5 py-2 rounded-full shadow dark:bg-slate-200 dark:text-slate-800">
          Empowering Academic Communities
        </p>
      </header>

      <section id="content" class="grid gap-8 md:grid-cols-3 items-start">
        <article class="md:col-span-2 space-y-4 prose prose-slate dark:prose-invert">
          <h2 class="text-2xl font-semibold text-slate-800 dark:text-slate-100">Our Story</h2>
          <p>
            UniSite is a modern platform built to connect students, faculty, and staff across campus.
            We combine course resources, communication tools, and event discovery to make academic life simpler and more collaborative.
          </p>
          <p>
            Designed by educators and engineers, UniSite focuses on accessibility, privacy, and community-driven features so every member of the university can contribute and thrive.
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div class="rounded-lg border border-slate-200 dark:border-slate-700 p-4 bg-white dark:bg-slate-800 shadow-sm">
              <h3 class="text-lg font-semibold text-blue-700 dark:text-blue-300">What Makes Us Unique?</h3>
              <ul class="list-inside list-disc text-slate-700 dark:text-slate-300 mt-2 space-y-1">
                <li>Integrated messaging and group collaboration</li>
                <li>Personalized dashboards for different roles</li>
                <li>Real-time campus news and event updates</li>
                <li>Secure resource sharing and project workspaces</li>
              </ul>
            </div>
            <div class="rounded-lg border border-slate-200 dark:border-slate-700 p-4 bg-white dark:bg-slate-800 shadow-sm">
              <h3 class="text-lg font-semibold text-blue-700 dark:text-blue-300">Our Values</h3>
              <ul class="list-inside list-disc text-slate-700 dark:text-slate-300 mt-2 space-y-1">
                <li>Accessibility and inclusivity</li>
                <li>Community-driven collaboration</li>
                <li>Continuous improvement through feedback</li>
                <li>Transparency and privacy-respecting defaults</li>
              </ul>
            </div>
          </div>
        </article>

        <aside class="space-y-4">
          <div class="bg-gradient-to-br from-blue-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-xl p-4 shadow">
            <h3 class="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-2">Quick Stats</h3>
            <ul class="text-slate-700 dark:text-slate-300 space-y-1">
              <li><strong>12k+</strong> active users</li>
              <li><strong>1k+</strong> groups created</li>
              <li><strong>24/7</strong> campus updates</li>
            </ul>
          </div>

          <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 shadow">
            <h3 class="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">Join the Community</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Create a profile and start connecting with classmates and faculty today.</p>
            <div class="mt-3 flex gap-2">
              <a class="inline-block px-3 py-2 rounded bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition" href="#contact-form">Contact Us</a>
              <a class="inline-block px-3 py-2 rounded border text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 transition" href="/signup">Sign up</a>
            </div>
          </div>
        </aside>
      </section>

      <section class="grid gap-8 md:grid-cols-2">
        <div class="bg-white dark:bg-slate-800 rounded-xl p-6 shadow">
          <h2 class="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4">Meet the Team</h2>
          <div class="grid grid-cols-2 gap-4">
            <div class="flex items-center gap-3">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Alex Kim, Co-Founder" loading="lazy" class="w-14 h-14 rounded-full object-cover shadow">
              <div>
                <div class="font-semibold text-slate-800 dark:text-slate-100">Alex Kim</div>
                <div class="text-sm text-slate-500 dark:text-slate-300">Co-Founder, Educator</div>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Priya Patel, Lead Developer" loading="lazy" class="w-14 h-14 rounded-full object-cover shadow">
              <div>
                <div class="font-semibold text-slate-800 dark:text-slate-100">Priya Patel</div>
                <div class="text-sm text-slate-500 dark:text-slate-300">Lead Developer</div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-br from-green-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-xl p-6 shadow">
          <h2 class="text-2xl font-bold text-green-700 dark:text-green-300 mb-4">Our Mission</h2>
          <p class="text-slate-700 dark:text-slate-300">Create a connected, inclusive, and innovative academic ecosystem where every member can learn, teach, and collaborate effectively.</p>
        </div>
      </section>

      <section class="grid gap-8 md:grid-cols-2 items-start">
        <div class="bg-white dark:bg-slate-800 rounded-xl p-6 shadow">
          <h2 class="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3">Student & Faculty Stories</h2>
          <div class="space-y-4">
            <blockquote class="border-l-4 border-slate-200 dark:border-slate-700 pl-4 text-slate-700 dark:text-slate-300 italic">“UniSite helped me find study partners and organize group projects with ease.” <span class="block text-sm text-slate-500 dark:text-slate-400 mt-2">— Jamie, Biology</span></blockquote>
            <blockquote class="border-l-4 border-slate-200 dark:border-slate-700 pl-4 text-slate-700 dark:text-slate-300 italic">“The class dashboard saves me time and keeps students engaged.” <span class="block text-sm text-slate-500 dark:text-slate-400 mt-2">— Dr. Lee, Mathematics</span></blockquote>
          </div>
        </div>

        <div class="bg-yellow-50 dark:bg-yellow-900/10 rounded-xl p-6 shadow">
          <h2 class="text-2xl font-bold text-yellow-700 dark:text-yellow-300 mb-3">Faculty Testimonials</h2>
          <p class="text-slate-700 dark:text-slate-300">“I appreciate the privacy controls and collaborative tools for research projects.”</p>
          <p class="text-sm text-slate-500 dark:text-slate-400 mt-2">— Prof. Nguyen, History</p>
        </div>
      </section>

      <section class="bg-gray-50 dark:bg-slate-900 rounded-xl p-6 shadow">
        <div class="md:flex md:items-start md:gap-8">
          <div class="md:flex-1">
            <h2 class="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-2">Contact Us</h2>
            <p class="text-slate-700 dark:text-slate-300 mb-4">Questions, feedback, or support requests? Send us a message and we'll reply as soon as possible.</p>
            <form id="contact-form" class="space-y-3 max-w-2xl" aria-label="Contact form">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label for="contact-name" class="sr-only">Your name</label>
                  <input id="contact-name" name="name" type="text" required placeholder="Your name" class="w-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100 rounded px-3 py-2 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-500" />
                </div>
                <div>
                  <label for="contact-email" class="sr-only">Email</label>
                  <input id="contact-email" name="email" type="email" required placeholder="Your email" class="w-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100 rounded px-3 py-2 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-500" />
                </div>
              </div>
              <div>
                <label for="contact-message" class="sr-only">Message</label>
                <textarea id="contact-message" name="message" rows="4" required placeholder="Your message" class="w-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100 rounded px-3 py-2 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-500"></textarea>
              </div>
              <div class="flex items-center gap-3">
                <button type="submit" class="inline-flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Send Message</button>
                <span id="contact-success" role="status" aria-live="polite" class="text-green-600 dark:text-green-400 font-semibold hidden">Thank you! We'll be in touch soon.</span>
              </div>
            </form>
          </div>
          <div class="hidden md:block md:w-1/3">
            <img loading="lazy" src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80" alt="Students collaborating" class="w-full h-44 object-cover rounded-md shadow">
          </div>
        </div>
      </section>
    </main>
  `;

  // Add simple form handler
  const form = el.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      form.reset();
      const success = el.querySelector('#contact-success');
      if (success) {
        success.classList.remove('hidden');
        setTimeout(() => success.classList.add('hidden'), 4000);
      }
    });
  }

  return el;
}