/** @type {import('tailwindcss').Config} */
module.exports = {
  // Where Tailwind looks for class names
  content: [
    './src/**/*.{js,jsx,ts,tsx,html}',
    './public/**/*.html',
    './**/*.html'
  ],

  // Use a class-based dark mode. The second item is the selector to toggle dark mode.
  // This lets you use any class name you want (here we keep ".dark" to match your script).
  darkMode: ['class', '.dark'],

  theme: {
    extend: {
      // Provide CSS-variable-backed tokens so components can use them and
      // automatically pick up the theme when `body.dark` is present.
      colors: {
        'site-bg': 'var(--site-bg)',
        'site-text': 'var(--site-text)',
        'site-card': 'var(--site-card)',
        'site-muted': 'var(--site-muted)',
        // convenience tokens
        'site-primary': 'var(--site-primary, #3b82f6)'
      }
    }
  },

  plugins: []
};
