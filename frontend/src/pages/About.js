export default function About() {
  const el = document.createElement('div');
  el.innerHTML = `
    <div class="about-page flex flex-col gap-8 px-4 py-6 md:px-8 lg:px-16">
      <header class="py-6 flex flex-col items-center">
        <h1 class="text-5xl font-extrabold text-[#2c3e50ec] mb-3 tracking-tight">About UniSite</h1>
        <span class="inline-block bg-[#2c3e50ec] text-white font-semibold text-lg px-6 py-2 rounded-full shadow">
          Empowering Academic Communities
        </span>
      </header>

      <section class="mb-10">
        <div>
          <p class="text-xl leading-relaxed text-gray-800 mb-5">
            UniSite is dedicated to supporting students and educators with a modern, intuitive platform for academic collaboration. Our goal is to make learning and sharing knowledge accessible, engaging, and effective for everyone in the university community.
          </p>
          <p class="text-xl leading-relaxed text-gray-800 mb-5">
            Founded by educators and technologists, UniSite brings together course resources, peer connections, and campus updates in one seamless experience. We strive to foster a vibrant academic environment where ideas and opportunities are freely exchanged.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-blue-100 rounded-lg p-4 shadow mb-5">
              <h3 class="text-2xl font-semibold text-blue-700 mb-2">What Makes Us Unique?</h3>
              <ul class="list-disc pl-5 text-gray-700 space-y-1">
                <li>Integrated messaging and group tools</li>
                <li>Personalized dashboards for students and faculty</li>
                <li>Real-time campus news and event updates</li>
                <li>Resource sharing and collaborative workspaces</li>
              </ul>
            </div>
            <div class="bg-blue-100 rounded-lg p-4 shadow mb-5">
              <h3 class="text-2xl font-semibold text-blue-700 mb-2">Our Values</h3>
              <ul class="list-disc pl-5 text-gray-700 space-y-1">
                <li>Accessibility for all backgrounds and abilities</li>
                <li>Collaboration and community spirit</li>
                <li>Continuous improvement through feedback</li>
                <li>Transparency and respect for privacy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="mb-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="flex flex-col justify-center items-center bg-gray-50 rounded-xl p-6 shadow">
          <h2 class="text-2xl font-bold text-blue-700 mb-4">Meet the Team</h2>
          <div class="grid grid-cols-2 gap-4">
            <div class="flex flex-col items-center">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Founder" class="w-16 h-16 rounded-full mb-2 shadow-lg object-cover">
              <span class="font-semibold text-gray-800">Alex Kim</span>
              <span class="text-gray-500 text-sm">Co-Founder, Educator</span>
            </div>
            <div class="flex flex-col items-center">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Tech Lead" class="w-16 h-16 rounded-full mb-2 shadow-lg object-cover">
              <span class="font-semibold text-gray-800">Priya Patel</span>
              <span class="text-gray-500 text-sm">Lead Developer</span>
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-center bg-blue-100 rounded-xl p-6 shadow">
          <h2 class="text-2xl font-bold text-blue-700 mb-4">Our Mission</h2>
          <p class="text-gray-800 text-lg">
            To create a connected, inclusive, and innovative academic ecosystem where every member can thrive and contribute.
          </p>
        </div>
      </section>

      <section class="mb-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="flex flex-col justify-center bg-green-100 rounded-xl p-6 shadow">
          <h2 class="text-2xl font-bold text-green-700 mb-4">Student Success Stories</h2>
          <div class="space-y-4">
            <div class="bg-white rounded-lg p-4 shadow">
              <p class="text-gray-800 italic">"UniSite helped me connect with study groups and find resources I never knew existed!"</p>
              <span class="block text-right text-gray-500 mt-2">— Jamie, Biology Major</span>
            </div>
            <div class="bg-white rounded-lg p-4 shadow">
              <p class="text-gray-800 italic">"The dashboard keeps me organized and up-to-date with campus events."</p>
              <span class="block text-right text-gray-500 mt-2">— Marcus, Computer Science</span>
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-center bg-yellow-100 rounded-xl p-6 shadow">
          <h2 class="text-2xl font-bold text-yellow-700 mb-4">Faculty Testimonials</h2>
          <div class="space-y-4">
            <div class="bg-white rounded-lg p-4 shadow">
              <p class="text-gray-800 italic">"UniSite streamlines communication with my students and makes sharing materials effortless."</p>
              <span class="block text-right text-gray-500 mt-2">— Dr. Lee, Mathematics</span>
            </div>
            <div class="bg-white rounded-lg p-4 shadow">
              <p class="text-gray-800 italic">"I appreciate the privacy controls and collaborative tools for research projects."</p>
              <span class="block text-right text-gray-500 mt-2">— Prof. Nguyen, History</span>
            </div>
          </div>
        </div>
      </section>

      <section class="flex flex-col md:flex-row items-center justify-between bg-gray-100 rounded-xl p-8 shadow mb-8">
        <div class="w-full md:w-2/3 md:pr-8">
          <h2 class="text-2xl font-bold text-blue-700 mb-4">Contact Us</h2>
          <p class="text-gray-700 text-lg mb-4">
            Have a question, suggestion, or need support? Use the form below and our team will get back to you soon.
          </p>
          <form class="flex flex-col gap-4 max-w-lg" id="contact-form">
            <div class="flex gap-4">
              <input type="text" name="name" placeholder="Your Name" class="border rounded px-4 py-2 w-1/2" required>
              <input type="email" name="email" placeholder="Your Email" class="border rounded px-4 py-2 w-1/2" required>
            </div>
            <textarea name="message" rows="4" placeholder="Your Message" class="border rounded px-4 py-2" required></textarea>
            <button type="submit" class="bg-blue-600 text-white font-semibold px-6 py-2 rounded hover:bg-blue-700 transition">Send Message</button>
            <span id="contact-success" class="text-green-600 font-semibold hidden">Thank you! We'll be in touch soon.</span>
          </form>
        </div>
        <div class="hidden md:block md:w-1/3 pl-8">
          <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80" alt="Contact illustration" class="rounded-xl shadow-lg object-cover w-full h-64">
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