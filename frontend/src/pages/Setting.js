

export default async function Setting() {
  const el = document.createElement('div');
  el.innerHTML = `
    <div class="setting-page flex flex-col items-center justify-center min-h-[70vh] w-full transition-colors px-4 py-8 bg-gray-50 dark:bg-[#27292b]">
      <form class="w-full max-w-4xl space-y-12">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div class="flex flex-col gap-8">
        <section class="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <h2 class="text-lg font-bold mb-4 text-gray-900 dark:text-white">Appearance</h2>
          <div class="mb-4">
          <label for="language" class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Language</label>
          <select id="language" name="language" class="w-full px-4 py-2 border border-gray-300 bg-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100">
            <option value="en">English</option>
            <option value="km">Khmer</option>
          </select>
          </div>
          <div class="mb-4 flex items-center justify-between">
          <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Dark Mode</span>
          <label class="inline-flex relative items-center cursor-pointer">
            <input type="checkbox" id="darkMode" name="darkMode" class="sr-only peer">
            <div class="w-11 h-6 bg-gray-200 rounded-full transition peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 peer peer-checked:bg-blue-600 dark:bg-gray-600 dark:peer-checked:bg-blue-500"></div>
            <div class="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition peer-checked:translate-x-5"></div>
          </label>
          </div>
          <div class="mb-4">
          <label for="fontSize" class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Font Size</label>
          <select id="fontSize" name="fontSize" class="w-full px-4 py-2 border border-gray-300 bg-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100">
            <option value="normal">Normal</option>
            <option value="large">Large</option>
            <option value="xlarge">Extra Large</option>
          </select>
          </div>
          <div>
          <label for="themeColor" class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Theme Color</label>
          <select id="themeColor" name="themeColor" class="w-full px-4 py-2 border border-gray-300 bg-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100">
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="purple">Purple</option>
            <option value="orange">Orange</option>
          </select>
          </div>
        </section>
        <section class="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <h2 class="text-lg font-bold mb-4 text-gray-900 dark:text-white">Account</h2>
          <div class="mb-4">
          <label for="email" class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
          <input type="email" id="email" name="email" class="w-full px-4 py-2 border border-gray-300 bg-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100" placeholder="your@email.com">
          </div>
          <div class="mb-4">
          <label for="username" class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Username</label>
          <input type="text" id="username" name="username" class="w-full px-4 py-2 border border-gray-300 bg-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100" placeholder="Username">
          </div>
          <div class="flex items-center justify-between">
          <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Two-Factor Authentication</span>
          <label class="inline-flex relative items-center cursor-pointer">
            <input type="checkbox" id="twoFactor" name="twoFactor" class="sr-only peer">
            <div class="w-11 h-6 bg-gray-200 rounded-full transition peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 peer peer-checked:bg-blue-600 dark:bg-gray-600 dark:peer-checked:bg-blue-500"></div>
            <div class="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition peer-checked:translate-x-5"></div>
          </label>
          </div>
        </section>
        </div>
        <div class="flex flex-col gap-8">
        <section class="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <h2 class="text-lg font-bold mb-4 text-gray-900 dark:text-white">Preferences</h2>
          <div class="mb-4 flex items-center justify-between">
          <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Notifications</span>
          <label class="inline-flex relative items-center cursor-pointer">
            <input type="checkbox" id="notifications" name="notifications" class="sr-only peer">
            <div class="w-11 h-6 bg-gray-200 rounded-full transition peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 peer peer-checked:bg-blue-600 dark:bg-gray-600 dark:peer-checked:bg-blue-500"></div>
            <div class="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition peer-checked:translate-x-5"></div>
          </label>
          </div>
          <div class="mb-4">
          <label for="timezone" class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Timezone</label>
          <select id="timezone" name="timezone" class="w-full px-4 py-2 border border-gray-300 bg-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100">
            <option value="local">Local</option>
            <option value="utc">UTC</option>
            <option value="est">EST</option>
            <option value="pst">PST</option>
          </select>
          </div>
          <div class="mb-4">
          <label for="dateFormat" class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Date Format</label>
          <select id="dateFormat" name="dateFormat" class="w-full px-4 py-2 border border-gray-300 bg-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100">
            <option value="MM/DD/YYYY">MM/DD/YYYY</option>
            <option value="DD/MM/YYYY">DD/MM/YYYY</option>
            <option value="YYYY-MM-DD">YYYY-MM-DD</option>
          </select>
          </div>
          <div>
          <label for="privacy" class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Profile Privacy</label>
          <select id="privacy" name="privacy" class="w-full px-4 py-2 border border-gray-300 bg-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100">
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
  const user_profile = localStorage.getItem('user_profile') ? JSON.parse(localStorage.getItem('user_profile')) : {};
  emailInput.value = user_profile.email || localStorage.getItem('email') || '';
  usernameInput.value = user_profile.name || localStorage.getItem('username') || '';
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
    if (e.target.checked) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  });
  fontSizeSelect.addEventListener('change', (e) => {
    localStorage.setItem('fontSize', e.target.value);
    document.documentElement.style.fontSize = e.target.value === 'normal' ? '12px' : e.target.value === 'large' ? '16px' : '18px';
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

  return el;
}
