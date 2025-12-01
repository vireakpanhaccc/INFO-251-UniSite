export default function About() {
  const el = document.createElement('div');
  el.innerHTML = `
    <div class="about-page max-w-6xl mx-auto flex flex-col gap-8 px-4 py-8 md:px-8 lg:px-0 text-gray-800 dark:text-gray-200">

      <!-- HERO: two-column on large screens -->
      <header class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col lg:flex-row items-center gap-6">
        <div class="flex-1">
          <h1 class="text-4xl md:text-5xl font-extrabold text-[#2c3e50ec] dark:text-white mb-3 tracking-tight">About UniSite</h1>
          <span class="inline-block bg-[#2c3e50ec] dark:bg-blue-600 text-white font-semibold text-sm md:text-lg px-4 py-2 rounded-full shadow mb-4">
            Empowering Academic Communities
          </span>
          <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            UniSite connects students, educators, and campus life with modern, accessible tools — from collaborative workspaces to real-time updates and personalized dashboards.
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div class="p-4 bg-blue-50 dark:bg-blue-900/40 rounded-lg">
              <h3 class="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-2">Collaboration</h3>
              <p class="text-gray-600 dark:text-gray-300 text-sm">Shared workspaces, messaging, and group tools to keep teams productive.</p>
            </div>
            <div class="p-4 bg-blue-50 dark:bg-blue-900/40 rounded-lg">
              <h3 class="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-2">Personalized</h3>
              <p class="text-gray-600 dark:text-gray-300 text-sm">Dashboards tailored for students, faculty, and staff.</p>
            </div>
          </div>
        </div>
      </header>

      <!-- VALUES & FEATURES (wide single-row responsive) -->
      <section class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="col-span-2 bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow">
          <h2 class="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4">What Makes Us Unique?</h2>
          <ul class="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
            <li>Integrated messaging and group tools</li>
            <li>Personalized dashboards for students and faculty</li>
            <li>Real-time campus news and event updates</li>
            <li>Resource sharing and collaborative workspaces</li>
          </ul>
        </div>
        <div class="bg-blue-50 dark:bg-gray-900/40 rounded-xl p-6 shadow">
          <h2 class="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4">Our Values</h2>
          <ul class="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
            <li>Accessibility for all backgrounds and abilities</li>
            <li>Collaboration and community spirit</li>
            <li>Continuous improvement through feedback</li>
            <li>Transparency and respect for privacy</li>
          </ul>
        </div>
      </section>

      <!-- TEAM -->
      <section class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow">
        <h2 class="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4 text-center">Meet the Team</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <div class="flex flex-col items-center text-center p-2">
            <img src="https://i.pinimg.com/1200x/9e/5b/6a/9e5b6ae840634960002ceddf960edec0.jpg" alt="SUY Panhaseth" class="w-16 h-16 rounded-full mb-2 object-cover shadow-sm ring-1 ring-gray-200 dark:ring-gray-700">
            <span class="font-semibold text-gray-800 dark:text-gray-200 text-sm">SUY Panhaseth</span>
            <span class="text-gray-500 dark:text-gray-400 text-xs">Co-Founder, Educator</span>
          </div>
          <div class="flex flex-col items-center text-center p-2">
            <img src="https://i.pinimg.com/736x/2d/1f/14/2d1f140d122c74e6b80c96788909b6c8.jpg" alt="LAI Taiseng" class="w-16 h-16 rounded-full mb-2 object-cover shadow-sm ring-1 ring-gray-200 dark:ring-gray-700">
            <span class="font-semibold text-gray-800 dark:text-gray-200 text-sm">LAI Taiseng</span>
            <span class="text-gray-500 dark:text-gray-400 text-xs">Lead Developer</span>
          </div>
          <div class="flex flex-col items-center text-center p-2">
            <img src="https://i.pinimg.com/736x/22/69/4b/22694b24eb5234ebc001fb9c8d03845a.jpg" alt="CHAMROEUN Vireakpanha" class="w-16 h-16 rounded-full mb-2 object-cover shadow-sm ring-1 ring-gray-200 dark:ring-gray-700">
            <span class="font-semibold text-gray-800 dark:text-gray-200 text-sm">CHAMROEUN Vireakpanha</span>
            <span class="text-gray-500 dark:text-gray-400 text-xs">Co-lead Developer</span>
          </div>
          <div class="flex flex-col items-center text-center p-2">
            <img src="https://i.pinimg.com/1200x/ba/6e/d0/ba6ed0f55d8572faa86b1a0786e5abc2.jpg" alt="LOEUNG Chhumsomary" class="w-16 h-16 rounded-full mb-2 object-cover shadow-sm ring-1 ring-gray-200 dark:ring-gray-700">
            <span class="font-semibold text-gray-800 dark:text-gray-200 text-sm">LOEUNG Chhumsomary</span>
            <span class="text-gray-500 dark:text-gray-400 text-xs">Co-lead Developer</span>
          </div>
          <div class="flex flex-col items-center text-center p-2">
            <img src="https://i.pinimg.com/736x/78/e6/95/78e69511db258c2dc03d5d0b5d65446a.jpg" alt="PRAK Kimhorng" class="w-16 h-16 rounded-full mb-2 object-cover shadow-sm ring-1 ring-gray-200 dark:ring-gray-700">
            <span class="font-semibold text-gray-800 dark:text-gray-200 text-sm">PRAK Kimhorng</span>
            <span class="text-gray-500 dark:text-gray-400 text-xs">UX-UI Designer</span>
          </div>
          <div class="flex flex-col items-center text-center p-2">
            <img src="https://i.pinimg.com/736x/d3/8a/67/d38a670582700d8fce3da09963bc62a5.jpg" alt="PANG Narithtithya" class="w-16 h-16 rounded-full mb-2 object-cover shadow-sm ring-1 ring-gray-200 dark:ring-gray-700">
            <span class="font-semibold text-gray-800 dark:text-gray-200 text-sm">PANG Narithtithya</span>
            <span class="text-gray-500 dark:text-gray-400 text-xs">DB & Auth Specialist</span>
          </div>
          <div class="flex flex-col items-center text-center p-2">
            <img src="https://i.pinimg.com/736x/79/66/07/7966076c361289d09e6cf55d5540bd05.jpg" alt="PAN Chansonaza" class="w-16 h-16 rounded-full mb-2 object-cover shadow-sm ring-1 ring-gray-200 dark:ring-gray-700">
            <span class="font-semibold text-gray-800 dark:text-gray-200 text-sm">PAN Chansonaza</span>
            <span class="text-gray-500 dark:text-gray-400 text-xs">Community Manager</span>
          </div>
        </div>
      </section>

      <!-- MISSION + CONTACT: side-by-side on large screens -->
      <section class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div class="lg:col-span-2 bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 shadow flex flex-col justify-center">
          <h2 class="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-3">Our Mission</h2>
          <p class="text-gray-800 dark:text-gray-300 text-lg mb-4">
            To create a connected, inclusive, and innovative academic ecosystem where every member can thrive and contribute.
          </p>
          <ul class="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
            <li>Support learning through community-driven resources</li>
            <li>Encourage open collaboration and feedback</li>
            <li>Prioritize accessibility and privacy</li>
          </ul>
        </div>

        <div class="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow">
          <h2 class="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4 text-center">Contact Us</h2>
          <p class="text-gray-700 dark:text-gray-300 text-sm mb-4 text-center">
            Questions, suggestions, or support requests — send us a message and our team will respond.
          </p>
          <form class="flex flex-col gap-3" id="contact-form">
            <div class="flex flex-col sm:flex-row gap-3">
              <input type="text" name="name" placeholder="Your Name" class="border rounded px-3 py-2 w-full sm:w-1/2 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-600" required>
              <input type="email" name="email" placeholder="Your Email" class="border rounded px-3 py-2 w-full sm:w-1/2 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-600" required>
            </div>
            <textarea name="message" rows="4" placeholder="Your Message" class="border rounded px-3 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-600" required></textarea>
            <button type="submit" class="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded transition">
              Send Message
            </button>
            <span id="contact-success" class="text-green-600 dark:text-green-400 font-semibold hidden text-center">
              Thank you! We'll be in touch soon.
            </span>
          </form>
        </div>
      </section>

    </div>
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