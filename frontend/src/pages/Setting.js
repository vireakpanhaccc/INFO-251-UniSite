export default async function Setting() {
  const el = document.createElement('div');
  el.innerHTML = `
    <div class="setting-page flex flex-col items-center justify-center min-h-[70vh] w-full bg-gray-50 transition-colors px-4 py-8">
      <form class="w-full max-w-4xl bg-transparent space-y-12">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div class="flex flex-col gap-8">
            <section class="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <h2 class="text-lg font-bold mb-4 text-gray-900">Appearance</h2>
              <div class="mb-4">
                <label for="language" class="block mb-2 text-sm font-medium text-gray-700">Language</label>
                <select id="language" name="language" class="w-full px-4 py-2 border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
                  <option value="en">English</option>
                  <option value="km">Khmer</option>
                </select>
              </div>
              <div class="mb-4 flex items-center justify-between">
                <span class="text-sm font-medium text-gray-700">Dark Mode</span>
                <label class="inline-flex relative items-center cursor-pointer">
                  <input type="checkbox" id="darkMode" name="darkMode" class="sr-only peer">
                  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:bg-blue-600 transition"></div>
                  <div class="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition peer-checked:translate-x-5"></div>
                </label>
              </div>
              <div class="mb-4">
                <label for="fontSize" class="block mb-2 text-sm font-medium text-gray-700">Font Size</label>
                <select id="fontSize" name="fontSize" class="w-full px-4 py-2 border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
                  <option value="normal">Normal</option>
                  <option value="large">Large</option>
                  <option value="xlarge">Extra Large</option>
                </select>
              </div>
              <div>
                <label for="themeColor" class="block mb-2 text-sm font-medium text-gray-700">Theme Color</label>
                <select id="themeColor" name="themeColor" class="w-full px-4 py-2 border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
                  <option value="blue">Blue</option>
                  <option value="green">Green</option>
                  <option value="purple">Purple</option>
                  <option value="orange">Orange</option>
                </select>
              </div>
            </section>
            <section class="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <h2 class="text-lg font-bold mb-4 text-gray-900">Account</h2>
              <div class="mb-4">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" name="email" class="w-full px-4 py-2 border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition" placeholder="your@email.com">
              </div>
              <div class="mb-4">
                <label for="username" class="block mb-2 text-sm font-medium text-gray-700">Username</label>
                <input type="text" id="username" name="username" class="w-full px-4 py-2 border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition" placeholder="Username">
              </div>
              <div class="flex items-center justify-between">
                <span class="text-sm font-medium text-gray-700">Two-Factor Authentication</span>
                <label class="inline-flex relative items-center cursor-pointer">
                  <input type="checkbox" id="twoFactor" name="twoFactor" class="sr-only peer">
                  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:bg-blue-600 transition"></div>
                  <div class="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition peer-checked:translate-x-5"></div>
                </label>
              </div>
            </section>
          </div>
          <div class="flex flex-col gap-8">
            <section class="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <h2 class="text-lg font-bold mb-4 text-gray-900">Preferences</h2>
              <div class="mb-4 flex items-center justify-between">
                <span class="text-sm font-medium text-gray-700">Notifications</span>
                <label class="inline-flex relative items-center cursor-pointer">
                  <input type="checkbox" id="notifications" name="notifications" class="sr-only peer">
                  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:bg-blue-600 transition"></div>
                  <div class="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition peer-checked:translate-x-5"></div>
                </label>
              </div>
              <div class="mb-4">
                <label for="timezone" class="block mb-2 text-sm font-medium text-gray-700">Timezone</label>
                <select id="timezone" name="timezone" class="w-full px-4 py-2 border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
                  <option value="local">Local</option>
                  <option value="utc">UTC</option>
                  <option value="est">EST</option>
                  <option value="pst">PST</option>
                </select>
              </div>
              <div class="mb-4">
                <label for="dateFormat" class="block mb-2 text-sm font-medium text-gray-700">Date Format</label>
                <select id="dateFormat" name="dateFormat" class="w-full px-4 py-2 border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
                  <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                  <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                  <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                </select>
              </div>
              <div>
                <label for="privacy" class="block mb-2 text-sm font-medium text-gray-700">Profile Privacy</label>
                <select id="privacy" name="privacy" class="w-full px-4 py-2 border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
                  <option value="public">Public</option>
                  <option value="friends">Friends Only</option>
                  <option value="private">Private</option>
                </select>
              </div>
            </section>
          </div>
        </div>
      </form>
    </div>
  `;

  // Load saved preferences
  const languageSelect = el.querySelector('#language');
  const darkModeToggle = el.querySelector('#darkMode');
  const fontSizeSelect = el.querySelector('#fontSize');
  const themeColorSelect = el.querySelector('#themeColor');
  const emailInput = el.querySelector('#email');
  const usernameInput = el.querySelector('#username');
  const twoFactorToggle = el.querySelector('#twoFactor');
  const notificationsToggle = el.querySelector('#notifications');
  const timezoneSelect = el.querySelector('#timezone');
  const dateFormatSelect = el.querySelector('#dateFormat');
  const privacySelect = el.querySelector('#privacy');

  // Load preferences from localStorage
  languageSelect.value = localStorage.getItem('lang') || 'km';
  darkModeToggle.checked = localStorage.getItem('darkMode') === 'true';
  fontSizeSelect.value = localStorage.getItem('fontSize') || 'normal';
  themeColorSelect.value = localStorage.getItem('themeColor') || 'blue';
  emailInput.value = localStorage.getItem('email') || '';
  usernameInput.value = localStorage.getItem('username') || '';
  twoFactorToggle.checked = localStorage.getItem('twoFactor') === 'true';
  notificationsToggle.checked = localStorage.getItem('notifications') === 'true';
  timezoneSelect.value = localStorage.getItem('timezone') || 'local';
  dateFormatSelect.value = localStorage.getItem('dateFormat') || 'MM/DD/YYYY';
  privacySelect.value = localStorage.getItem('privacy') || 'public';

  // Event listeners to save preferences
  languageSelect.addEventListener('change', (e) => {
    localStorage.setItem('lang', e.target.value);
    location.reload(); // Reload to apply language change
  });
  darkModeToggle.addEventListener('change', (e) => {
    localStorage.setItem('darkMode', e.target.checked);
    document.documentElement.classList.toggle('dark', e.target.checked);
  });
  fontSizeSelect.addEventListener('change', (e) => {
    localStorage.setItem('fontSize', e.target.value);
    document.documentElement.style.fontSize = e.target.value === 'normal' ? '16px' : e.target.value === 'large' ? '18px' : '20px';
  });
  themeColorSelect.addEventListener('change', (e) => {
    localStorage.setItem('themeColor', e.target.value);
    document.documentElement.style.setProperty('--theme-color', e.target.value);
  });
  emailInput.addEventListener('input', (e) => {
    localStorage.setItem('email', e.target.value);
  });
  usernameInput.addEventListener('input', (e) => {
    localStorage.setItem('username', e.target.value);
  });
  twoFactorToggle.addEventListener('change', (e) => {
    localStorage.setItem('twoFactor', e.target.checked);
  });
  notificationsToggle.addEventListener('change', (e) => {
    localStorage.setItem('notifications', e.target.checked);
  });
  timezoneSelect.addEventListener('change', (e) => {
    localStorage.setItem('timezone', e.target.value);
  });
  dateFormatSelect.addEventListener('change', (e) => {
    localStorage.setItem('dateFormat', e.target.value);
  });
  privacySelect.addEventListener('change', (e) => {
    localStorage.setItem('privacy', e.target.value);
  });

  // Apply initial dark mode and font size
  if (darkModeToggle.checked) {
    document.documentElement.classList.add('dark');
  }
  document.documentElement.style.fontSize = fontSizeSelect.value === 'normal' ? '16px' : fontSizeSelect.value === 'large' ? '18px' : '20px';
  document.documentElement.style.setProperty('--theme-color', themeColorSelect.value);

  return el;
}
