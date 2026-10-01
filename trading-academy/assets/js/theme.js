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


// FINAL PHONE INPUT NUMERIC-ONLY GUARD
// Prevent letters/symbols from ever remaining in phone/tel fields across the site.
(function () {
  const isPhoneField = (el) => el && el.matches && el.matches('input[type="tel"], input[data-phone-numeric]');
  const digitsOnly = (value) => String(value || '').replace(/[^0-9]/g, '');

  document.addEventListener('beforeinput', function (event) {
    const el = event.target;
    if (!isPhoneField(el) || event.isComposing) return;
    if (event.inputType && event.inputType.startsWith('delete')) return;
    if (typeof event.data === 'string' && /[^0-9]/.test(event.data)) {
      event.preventDefault();
    }
  });

  document.addEventListener('input', function (event) {
    const el = event.target;
    if (!isPhoneField(el)) return;
    const clean = digitsOnly(el.value);
    if (el.value !== clean) el.value = clean;
  });

  document.addEventListener('paste', function (event) {
    const el = event.target;
    if (!isPhoneField(el)) return;
    const text = (event.clipboardData || window.clipboardData)?.getData('text') || '';
    if (/[^0-9]/.test(text)) {
      event.preventDefault();
      const clean = digitsOnly(text);
      const start = typeof el.selectionStart === 'number' ? el.selectionStart : el.value.length;
      const end = typeof el.selectionEnd === 'number' ? el.selectionEnd : start;
      const max = Number(el.getAttribute('maxlength')) || Infinity;
      el.value = (el.value.slice(0, start) + clean + el.value.slice(end)).slice(0, max);
      el.dispatchEvent(new Event('input', { bubbles: true }));
    }
  });
})();
