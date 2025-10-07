export default async function Setting() {
  const el = document.createElement('div');
  el.innerHTML = `
    <div class="setting-page flex flex-col items-center justify-center min-h-[70vh] w-full bg-gray-50 dark:bg-gray-900 transition-colors px-4 py-8">
      <form class="w-full max-w-4xl bg-transparent space-y-12">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div class="flex flex-col gap-8">
            <section class="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-800 shadow-sm">
              <h2 class="text-lg font-bold mb-4 text-gray-900 dark:text-gray-100">Appearance</h2>
              <div class="mb-4">
                <label for="language" class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Language</label>
                <select id="language" name="language" class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                  <option value="zh">Chinese</option>
                </select>
              </div>
              <div class="mb-4 flex items-center justify-between">
                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Dark Mode</span>
                <label class="inline-flex relative items-center cursor-pointer">
                  <input type="checkbox" id="darkMode" name="darkMode" class="sr-only peer">
                  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 dark:bg-gray-600 rounded-full peer peer-checked:bg-blue-600 transition"></div>
                  <div class="absolute left-1 top-1 bg-white dark:bg-gray-300 w-4 h-4 rounded-full transition peer-checked:translate-x-5"></div>
                </label>
              </div>
              <div class="mb-4">
                <label for="fontSize" class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Font Size</label>
                <select id="fontSize" name="fontSize" class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
                  <option value="normal">Normal</option>
                  <option value="large">Large</option>
                  <option value="xlarge">Extra Large</option>
                </select>
              </div>
              <div>
                <label for="themeColor" class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Theme Color</label>
                <select id="themeColor" name="themeColor" class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
                  <option value="blue">Blue</option>
                  <option value="green">Green</option>
                  <option value="purple">Purple</option>
                  <option value="orange">Orange</option>
                </select>
              </div>
            </section>
            <section class="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-800 shadow-sm">
              <h2 class="text-lg font-bold mb-4 text-gray-900 dark:text-gray-100">Account</h2>
              <div class="mb-4">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                <input type="email" id="email" name="email" class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition" placeholder="your@email.com">
              </div>
              <div class="mb-4">
                <label for="username" class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Username</label>
                <input type="text" id="username" name="username" class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition" placeholder="Username">
              </div>
              <div class="flex items-center justify-between">
                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Two-Factor Authentication</span>
                <label class="inline-flex relative items-center cursor-pointer">
                  <input type="checkbox" id="twoFactor" name="twoFactor" class="sr-only peer">
                  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 dark:bg-gray-600 rounded-full peer peer-checked:bg-blue-600 transition"></div>
                  <div class="absolute left-1 top-1 bg-white dark:bg-gray-300 w-4 h-4 rounded-full transition peer-checked:translate-x-5"></div>
                </label>
              </div>
            </section>
          </div>
          <div class="flex flex-col gap-8">
            <section class="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-800 shadow-sm">
              <h2 class="text-lg font-bold mb-4 text-gray-900 dark:text-gray-100">Preferences</h2>
              <div class="mb-4 flex items-center justify-between">
                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Notifications</span>
                <label class="inline-flex relative items-center cursor-pointer">
                  <input type="checkbox" id="notifications" name="notifications" class="sr-only peer">
                  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 dark:bg-gray-600 rounded-full peer peer-checked:bg-blue-600 transition"></div>
                  <div class="absolute left-1 top-1 bg-white dark:bg-gray-300 w-4 h-4 rounded-full transition peer-checked:translate-x-5"></div>
                </label>
              </div>
              <div class="mb-4">
                <label for="timezone" class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Timezone</label>
                <select id="timezone" name="timezone" class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
                  <option value="local">Local</option>
                  <option value="utc">UTC</option>
                  <option value="est">EST</option>
                  <option value="pst">PST</option>
                </select>
              </div>
              <div class="mb-4">
                <label for="dateFormat" class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Date Format</label>
                <select id="dateFormat" name="dateFormat" class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
                  <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                  <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                  <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                </select>
              </div>
              <div>
                <label for="privacy" class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Profile Privacy</label>
                <select id="privacy" name="privacy" class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
                  <option value="public">Public</option>
                  <option value="friends">Friends Only</option>
                  <option value="private">Private</option>
                </select>
              </div>
            </section>
          </div>
        </div>
        <div class="flex justify-end pt-4">
          <button type="submit" class="w-full md:w-48 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">Save Changes</button>
        </div>
      </form>
    </div>
  `;

  // ...rest of your JS logic remains unchanged...
  // (copy your JS logic here)
  // Load saved preferences
  const language = localStorage.getItem("language_preference") || "en";
  const darkMode = localStorage.getItem("dark_mode") === "true";
  const notifications = localStorage.getItem("notifications_enabled") === "true";
  const fontSize = localStorage.getItem("font_size") || "normal";
  const timezone = localStorage.getItem("timezone") || "local";
  const themeColor = localStorage.getItem("theme_color") || "blue";
  const dateFormat = localStorage.getItem("date_format") || "MM/DD/YYYY";
  const privacy = localStorage.getItem("privacy") || "public";
  const email = localStorage.getItem("email") || "";
  const username = localStorage.getItem("username") || "";
  const twoFactor = localStorage.getItem("two_factor") === "true";

  el.querySelector("#language").value = language;
  el.querySelector("#darkMode").checked = darkMode;
  el.querySelector("#notifications").checked = notifications;
  el.querySelector("#fontSize").value = fontSize;
  el.querySelector("#timezone").value = timezone;
  el.querySelector("#themeColor").value = themeColor;
  el.querySelector("#dateFormat").value = dateFormat;
  el.querySelector("#privacy").value = privacy;
  el.querySelector("#email").value = email;
  el.querySelector("#username").value = username;
  el.querySelector("#twoFactor").checked = twoFactor;

  // Apply dark mode immediately
  if (darkMode) document.documentElement.classList.add("dark");
  else document.documentElement.classList.remove("dark");

  // Apply font size immediately
  document.documentElement.style.fontSize =
    fontSize === "large" ? "18px" : fontSize === "xlarge" ? "20px" : "";

  // Apply theme color immediately (simple example)
  document.documentElement.style.setProperty('--theme-color', themeColor);

  // Listen for dark mode toggle
  el.querySelector("#darkMode").addEventListener("change", (e) => {
    if (e.target.checked) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("dark_mode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("dark_mode", "false");
    }
  });

  // Listen for font size change
  el.querySelector("#fontSize").addEventListener("change", (e) => {
    const val = e.target.value;
    document.documentElement.style.fontSize =
      val === "large" ? "18px" : val === "xlarge" ? "20px" : "";
  });

  // Listen for theme color change
  el.querySelector("#themeColor").addEventListener("change", (e) => {
    document.documentElement.style.setProperty('--theme-color', e.target.value);
  });

  const form = el.querySelector("form");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const language = el.querySelector("#language").value;
    const darkMode = el.querySelector("#darkMode").checked;
    const notifications = el.querySelector("#notifications").checked;
    const fontSize = el.querySelector("#fontSize").value;
    const timezone = el.querySelector("#timezone").value;
    const themeColor = el.querySelector("#themeColor").value;
    const dateFormat = el.querySelector("#dateFormat").value;
    const privacy = el.querySelector("#privacy").value;
    const email = el.querySelector("#email").value;
    const username = el.querySelector("#username").value;
    const twoFactor = el.querySelector("#twoFactor").checked;

    // Save preferences locally
    localStorage.setItem("language_preference", language);
    localStorage.setItem("dark_mode", darkMode);
    localStorage.setItem("notifications_enabled", notifications);
    localStorage.setItem("font_size", fontSize);
    localStorage.setItem("timezone", timezone);
    localStorage.setItem("theme_color", themeColor);
    localStorage.setItem("date_format", dateFormat);
    localStorage.setItem("privacy", privacy);
    localStorage.setItem("email", email);
    localStorage.setItem("username", username);
    localStorage.setItem("two_factor", twoFactor);

    alert("Settings saved!");
    window.location.reload();
  });

  return el;
}
