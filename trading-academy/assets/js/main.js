/**
 * main.js - Public Site JavaScript
 * Handles: navbar scroll, dark mode, RTL, active link, AOS,
 *          counter animation, mobile menu, auth-aware navbar, footer links.
 */

document.addEventListener('DOMContentLoaded', function () {

  //  1. Auth-aware Navbar 
  AUTH.updateNavbar();

  //  2. Navbar Scroll Effect 
  const navbar = document.getElementById('mainNavbar');
  if (navbar) {
    function updateNavbarScroll() {
      navbar.classList.toggle('scrolled', window.scrollY > 30);
    }
    window.addEventListener('scroll', updateNavbarScroll, { passive: true });
    updateNavbarScroll();
  }

  //  3. Active Nav Link 
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.tm-navbar .nav-link, .tm-navbar .dropdown-item').forEach(link => {
    const href = (link.getAttribute('href') || '').split('?')[0].split('#')[0];
    if (href && href !== '#' && (href === currentPage || (currentPage === '' && href === 'index.html'))) {
      link.classList.add('active');
      // Also mark parent dropdown toggle active
      const parent = link.closest('.dropdown');
      if (parent) parent.querySelector('.nav-link.dropdown-toggle')?.classList.add('active');
    }
  });

  //  4. Dark Mode Toggle 
  function applyTheme(theme) {
    const isDark = theme === 'dark';
    document.documentElement.classList.toggle('dark-mode', isDark);
    if (isDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
      document.documentElement.setAttribute('data-bs-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      document.documentElement.setAttribute('data-bs-theme', 'light');
    }
    const icon = document.getElementById('themeIcon');
    if (icon) {
      icon.className = isDark ? 'bi bi-sun-fill' : 'bi bi-moon-fill';
    }
    localStorage.setItem('tm-theme', theme);
  }

  // Apply current theme
  const savedTheme = localStorage.getItem('tm-theme') || 'light';
  applyTheme(savedTheme);

  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      const current = document.documentElement.classList.contains('dark-mode') ? 'dark' : 'light';
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  //  5. RTL / LTR Toggle 
  const rtlToggle = document.getElementById('rtlToggle');
  function applyDirection(dir) {
    const normalized = dir === 'rtl' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', normalized);
    document.body?.setAttribute('dir', normalized);
    if (rtlToggle) {
      const label = rtlToggle.querySelector('.rtl-toggle-label');
      const targetLabel = normalized === 'rtl' ? 'LTR' : 'RTL';
      if (label) label.textContent = targetLabel;
      rtlToggle.setAttribute('aria-label', `Switch to ${targetLabel} layout`);
      rtlToggle.setAttribute('title', `Switch to ${targetLabel} layout`);
    }
    localStorage.setItem('tm-rtl', normalized === 'rtl');
  }
  if (rtlToggle) {
    const savedRTL = localStorage.getItem('tm-rtl') === 'true';
    applyDirection(savedRTL ? 'rtl' : 'ltr');

    rtlToggle.addEventListener('click', function () {
      const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
      applyDirection(isRTL ? 'ltr' : 'rtl');
    });
  }

  //  6. Mobile Sidebar Overlay Close 
  const navbarCollapse = document.getElementById('navbarContent');
  if (navbarCollapse) {
    document.addEventListener('click', function (e) {
      if (!navbarCollapse.contains(e.target) && !e.target.closest('.navbar-toggler')) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) bsCollapse.hide();
      }
    });
  }

  //  7. Scroll-Triggered AOS 
  function initAOS() {
    const elements = document.querySelectorAll('[data-aos]');
    if (!elements.length) return;

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('aos-animate');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    elements.forEach(el => observer.observe(el));
  }

  initAOS();

  //  8. Counter Animation 
  function animateCounter(el) {
    const target = parseFloat(el.dataset.target || el.textContent.replace(/[^\d.]/g, ''));
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    const duration = 2000;
    const steps    = 60;
    const increment = target / steps;
    let current = 0;
    const isInt = Number.isInteger(target);

    const timer = setInterval(() => {
      current = Math.min(current + increment, target);
      el.textContent = prefix + (isInt ? Math.round(current) : current.toFixed(1)) + suffix;
      if (current >= target) clearInterval(timer);
    }, duration / steps);
  }

  const counterObserver = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('[data-counter]').forEach(el => {
    el.dataset.target = parseFloat(el.textContent.replace(/[^\d.]/g, ''));
    counterObserver.observe(el);
  });

  //  9. Newsletter Form 
  const strictEmailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const validName = value => /^[A-Za-z][A-Za-z .'-]{1,}$/.test((value || '').trim());
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const emailInput = this.querySelector('input[type="email"]');
      const email = (emailInput?.value || '').trim();
      if (!strictEmailPattern.test(email)) {
        emailInput?.setCustomValidity('Please enter a valid email such as name@example.com');
        emailInput?.reportValidity();
        emailInput?.setCustomValidity('');
        return;
      }
      showToast('You\'ve successfully subscribed to our newsletter!', 'success');
      this.reset();
    });
  }

  //  10. Contact Form 
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!this.checkValidity()) { this.reportValidity(); return; }

      const nameInput = document.getElementById('contactName');
      const emailInput = document.getElementById('contactEmail');
      if (nameInput && !validName(nameInput.value)) {
        nameInput.setCustomValidity('Please enter at least 2 valid name characters.');
        nameInput.reportValidity();
        nameInput.setCustomValidity('');
        return;
      }
      if (emailInput && !strictEmailPattern.test(emailInput.value.trim())) {
        emailInput.setCustomValidity('Please enter a valid email such as name@example.com');
        emailInput.reportValidity();
        emailInput.setCustomValidity('');
        return;
      }

      const phone = document.getElementById('contactPhone')?.value || '';
      if (phone && !/^[6-9]\d{9}$/.test(phone.replace(/\s/g, ''))) {
        showToast('Please enter a valid 10-digit Indian mobile number.', 'danger');
        return;
      }

      showToast('Thank you! Your message has been sent. We\'ll get back to you within 24 hours.', 'success');
      this.reset();
      this.classList.remove('was-validated');
    });

    contactForm.addEventListener('submit', function () {
      this.classList.add('was-validated');
    }, { once: false, capture: true });
  }

  //  11. Password Toggle 
  document.querySelectorAll('.password-toggle').forEach(btn => {
    btn.addEventListener('click', function () {
      const input = this.closest('.password-wrap')?.querySelector('input');
      if (!input) return;
      const isPassword = input.type === 'password';
      input.type = isPassword ? 'text' : 'password';
      this.querySelector('i').className = isPassword ? 'bi bi-eye-slash' : 'bi bi-eye';
    });
  });

  //  12. Enroll Buttons 
  document.querySelectorAll('[data-enroll]').forEach(btn => {
    btn.addEventListener('click', function () {
      const courseId = parseInt(this.dataset.enroll);
      if (!AUTH.isLoggedIn()) {
        showToast('Please log in to enroll in a course.', 'warning');
        setTimeout(() => window.location.href = 'login.html', 1500);
        return;
      }
      // Add to enrollments in localStorage
      let enrollments = JSON.parse(localStorage.getItem('tm-enrollments') || '[]');
      if (!enrollments.find(e => e.courseId === courseId)) {
        enrollments.push({ courseId, enrollDate: new Date().toISOString().split('T')[0], progress: 0 });
        localStorage.setItem('tm-enrollments', JSON.stringify(enrollments));
        showToast('Successfully enrolled! Check your dashboard.', 'success');
        this.textContent = ' Enrolled';
        this.disabled = true;
      } else {
        showToast('You are already enrolled in this course.', 'info');
      }
    });
  });

  //  13. Smooth Scroll for anchor links 
  document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(link => {
    link.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  //  14. Tab Filter (courses, resources) 
  document.querySelectorAll('[data-filter-target]').forEach(tab => {
    tab.addEventListener('click', function () {
      const target = this.dataset.filterTarget;
      const group  = this.closest('[data-filter-group]')?.dataset.filterGroup;

      document.querySelectorAll(`[data-filter-group="${group}"] [data-filter-target]`).forEach(t => t.classList.remove('active'));
      this.classList.add('active');

      document.querySelectorAll('[data-filter-item]').forEach(item => {
        const itemGroup = item.dataset.filterGroup;
        if (itemGroup && itemGroup !== group) return;
        if (target === 'all' || item.dataset.filterItem === target) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

});

//  Toast Utility 
function showToast(message, type = 'info') {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container position-fixed bottom-0 end-0 p-3';
    container.style.zIndex = '9999';
    document.body.appendChild(container);
  }

  const colorMap = { success: 'bg-success', danger: 'bg-danger', warning: 'bg-warning text-dark', info: 'bg-primary' };
  const toastEl = document.createElement('div');
  toastEl.className = 'toast align-items-center text-white border-0 ' + (colorMap[type] || colorMap.info);
  toastEl.setAttribute('role', 'alert');
  toastEl.innerHTML = `
    <div class="d-flex">
      <div class="toast-body fw-semibold">${message}</div>
      <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
    </div>`;
  container.appendChild(toastEl);
  const bsToast = new bootstrap.Toast(toastEl, { delay: 4000 });
  bsToast.show();
  toastEl.addEventListener('hidden.bs.toast', () => toastEl.remove());
}
