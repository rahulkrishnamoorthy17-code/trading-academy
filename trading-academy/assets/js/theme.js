/**
 * theme.js - Must be loaded as the FIRST script in <head>
 * Applies dark mode and RTL preference from localStorage before DOM renders.
 * This prevents flash of wrong theme on page load.
 */
(function () {
  try {
    var theme = localStorage.getItem('tm-theme') || 'light';
    var rtl   = localStorage.getItem('tm-rtl') === 'true';
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      document.documentElement.setAttribute('data-bs-theme', 'dark');
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.setAttribute('data-bs-theme', 'light');
    }
    if (rtl) {
      document.documentElement.setAttribute('dir', 'rtl');
    }
  } catch (e) {
    /* localStorage may be blocked in some contexts */
  }
})();
