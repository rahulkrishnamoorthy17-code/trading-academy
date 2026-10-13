/**
 * auth.js - Static Front-End Authentication & Navbar State
 * Trading Academy | Session management, navbar auth state & accessible toast notifications.
 * Include AFTER data.js and BEFORE page-specific scripts.
 */

const AUTH = (() => {
  const SESSION_KEY = 'tm-user';
  const LEGACY_KEY  = 'tm-current-user';

  function escapeHtml(str) {
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  /**
   * Get current user from localStorage with try/catch safeguard.
   */
  function getCurrentUser() {
    try {
      const raw = localStorage.getItem(SESSION_KEY) || localStorage.getItem(LEGACY_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      console.warn('Unable to read user session from storage', e);
      return null;
    }
  }

  /**
   * Persist user to localStorage with try/catch safeguard.
   */
  function setCurrentUser(user) {
    try {
      const data = JSON.stringify(user);
      localStorage.setItem(SESSION_KEY, data);
      localStorage.setItem(LEGACY_KEY, data);
    } catch (e) {
      console.warn('Unable to persist user session to storage', e);
    }
    updateNavbar();
  }

  /**
   * Clear user session from storage.
   */
  function clearCurrentUser() {
    try {
      localStorage.removeItem(SESSION_KEY);
      localStorage.removeItem(LEGACY_KEY);
      localStorage.removeItem('tm-token');
      localStorage.removeItem('tm-auth-token');
      localStorage.removeItem('isLoggedIn');
      sessionStorage.removeItem('tm-user');
      sessionStorage.removeItem('tm-current-user');
    } catch (e) {
      console.warn('Unable to clear user session from storage', e);
    }
    updateNavbar();
  }

  function isLoggedIn() {
    return getCurrentUser() !== null;
  }

  /**
   * Central Logout Function
   * - Clears all auth keys from localStorage and sessionStorage
   * - Sets transient flag for post-logout toast
   * - Updates navbar state immediately
   * - Uses location.replace so history back button does not return to protected dashboard
   */
  function logout(redirectTo = 'index.html') {
    try {
      localStorage.removeItem(SESSION_KEY);
      localStorage.removeItem(LEGACY_KEY);
      localStorage.removeItem('tm-token');
      localStorage.removeItem('tm-auth-token');
      localStorage.removeItem('isLoggedIn');
      sessionStorage.removeItem('tm-user');
      sessionStorage.removeItem('tm-current-user');
      sessionStorage.setItem('tm-logout-toast', '1');
    } catch (e) {
      console.warn('Unable to clear session storage during logout', e);
    }

    updateNavbar();

    // If currently on dashboard or protected page, redirect using replace
    const currentPath = window.location.pathname.split('/').pop() || '';
    if (currentPath === 'dashboard.html' || currentPath === 'admin-dashboard.html' || redirectTo) {
      window.location.replace(redirectTo || 'index.html');
    } else {
      showToast('Signed out successfully', 'info');
    }
  }

  /**
   * Name source: Sign Up name field, or the part of email before "@" if no name was given.
   */
  function getUserDisplayName(user) {
    if (!user) return '';
    if (typeof user.name === 'string' && user.name.trim()) {
      return user.name.trim();
    }
    if (typeof user.firstName === 'string' && user.firstName.trim()) {
      const last = typeof user.lastName === 'string' ? user.lastName.trim() : '';
      return (user.firstName.trim() + (last ? ' ' + last : '')).trim();
    }
    if (typeof user.email === 'string' && user.email.includes('@')) {
      return user.email.split('@')[0];
    }
    return 'User';
  }

  /**
   * Helper: Get user initials for avatar
   */
  function getUserInitials(user, displayName) {
    const name = displayName || (user && user.name) || '';
    if (name && typeof name === 'string' && name.trim()) {
      const parts = name.trim().split(/\s+/).filter(Boolean);
      if (parts.length >= 2) {
        return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
      }
      return parts[0].slice(0, 2).toUpperCase();
    }
    if (user && typeof user.email === 'string' && user.email.includes('@')) {
      return user.email.slice(0, 2).toUpperCase();
    }
    return 'ST';
  }

  /**
   * Helper: Get user email address
   */
  function getUserEmail(user) {
    if (user && typeof user.email === 'string' && user.email.trim()) {
      return user.email.trim();
    }
    return 'student@tradingacademy.demo';
  }

  /**
   * Close any open navbar user dropdowns.
   */
  function closeAllDropdowns() {
    document.querySelectorAll('.auth-user-dropdown.show, .auth-dropdown-menu.show').forEach(el => {
      el.classList.remove('show');
    });
    document.querySelectorAll('.auth-user-chip[aria-expanded="true"]').forEach(el => {
      el.setAttribute('aria-expanded', 'false');
    });
  }

  /**
   * Update all navbar auth elements on current page.
   * Logged out: single rectangular button labelled "Sign In" linking to login.html.
   * Logged in: profile chip with avatar and comprehensive student dropdown (Dashboard, My Courses, Live Classes, Recorded Lessons, Assignments, Mock Portfolio, Certificates, Profile, Settings, Sign Out).
   */
  function updateNavbar() {
    const user = getCurrentUser();
    const authElements = [
      document.getElementById('authBtn'),
      document.getElementById('authBtnMobile')
    ].filter(Boolean);

    authElements.forEach(el => {
      if (user) {
        const displayName = getUserDisplayName(user);
        const initials = getUserInitials(user, displayName);
        const email = getUserEmail(user);

        const container = document.createElement('div');
        container.id = el.id;
        container.className = 'auth-user-dropdown dropdown d-inline-block';

        container.innerHTML = `
          <button type="button" 
                  class="auth-user-chip dropdown-toggle" 
                  id="${el.id}-chip" 
                  aria-expanded="false" 
                  aria-haspopup="true">
            <span class="auth-chip-avatar">${escapeHtml(initials)}</span>
            <span class="auth-user-name">${escapeHtml(displayName)}</span>
            <i class="bi bi-chevron-down auth-user-chevron"></i>
          </button>
          <ul class="dropdown-menu auth-dropdown-menu dropdown-menu-end" aria-labelledby="${el.id}-chip">
            <!-- User Profile Header Card -->
            <li class="auth-dropdown-header-item">
              <div class="auth-dropdown-user-card">
                <div class="auth-dropdown-avatar">${escapeHtml(initials)}</div>
                <div class="auth-dropdown-user-info">
                  <div class="auth-dropdown-user-name">${escapeHtml(displayName)}</div>
                  <div class="auth-dropdown-user-email" title="${escapeHtml(email)}">${escapeHtml(email)}</div>
                  <div class="auth-dropdown-badge">
                    <i class="bi bi-patch-check-fill me-1"></i>Student Account
                  </div>
                </div>
              </div>
            </li>

            <li><hr class="dropdown-divider my-1"></li>

            <!-- Section 1: Learning Portal -->
            <li class="auth-dropdown-section-header">LEARNING PORTAL</li>
            <li>
              <a class="dropdown-item auth-dropdown-item" href="dashboard.html" data-hash="overview">
                <i class="bi bi-grid-1x2-fill auth-item-icon text-primary"></i>
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a class="dropdown-item auth-dropdown-item" href="dashboard.html#courses" data-hash="courses">
                <i class="bi bi-book-fill auth-item-icon text-primary"></i>
                <span>My Courses</span>
              </a>
            </li>
            <li>
              <a class="dropdown-item auth-dropdown-item d-flex align-items-center justify-content-between" href="dashboard.html#live" data-hash="live">
                <span class="d-flex align-items-center">
                  <i class="bi bi-camera-video-fill auth-item-icon text-danger"></i>
                  <span>Live Classes</span>
                </span>
                <span class="badge bg-danger-subtle text-danger auth-tag-badge">Live</span>
              </a>
            </li>
            <li>
              <a class="dropdown-item auth-dropdown-item" href="dashboard.html#recorded" data-hash="recorded">
                <i class="bi bi-play-circle-fill auth-item-icon text-primary"></i>
                <span>Recorded Lessons</span>
              </a>
            </li>
            <li>
              <a class="dropdown-item auth-dropdown-item" href="dashboard.html#assignments" data-hash="assignments">
                <i class="bi bi-clipboard-check-fill auth-item-icon text-primary"></i>
                <span>Assignments</span>
              </a>
            </li>

            <li><hr class="dropdown-divider my-1"></li>

            <!-- Section 2: Trading & Progress -->
            <li class="auth-dropdown-section-header">TRADING & PROGRESS</li>
            <li>
              <a class="dropdown-item auth-dropdown-item" href="dashboard.html#portfolio" data-hash="portfolio">
                <i class="bi bi-pie-chart-fill auth-item-icon text-success"></i>
                <span>Mock Portfolio</span>
              </a>
            </li>
            <li>
              <a class="dropdown-item auth-dropdown-item" href="dashboard.html#certificates" data-hash="certificates">
                <i class="bi bi-award-fill auth-item-icon text-warning"></i>
                <span>Certificates</span>
              </a>
            </li>

            <li><hr class="dropdown-divider my-1"></li>

            <!-- Section 3: Account & Settings -->
            <li class="auth-dropdown-section-header">ACCOUNT</li>
            <li>
              <a class="dropdown-item auth-dropdown-item" href="dashboard.html#profile" data-hash="profile">
                <i class="bi bi-person-fill auth-item-icon text-info"></i>
                <span>My Profile</span>
              </a>
            </li>
            <li>
              <a class="dropdown-item auth-dropdown-item" href="dashboard.html#settings" data-hash="settings">
                <i class="bi bi-gear-fill auth-item-icon text-secondary"></i>
                <span>Settings</span>
              </a>
            </li>

            <li><hr class="dropdown-divider my-1"></li>

            <!-- Section 4: Sign Out Option -->
            <li>
              <button type="button" class="dropdown-item auth-dropdown-item text-danger auth-signout-btn">
                <i class="bi bi-box-arrow-right auth-item-icon text-danger"></i>
                <span>Sign Out</span>
              </button>
            </li>
          </ul>
        `;

        el.parentNode.replaceChild(container, el);

        const chipBtn = container.querySelector('.auth-user-chip');
        const menu = container.querySelector('.auth-dropdown-menu');
        const signOutBtn = container.querySelector('.auth-signout-btn');

        function toggleMenu(e) {
          if (e) {
            e.preventDefault();
            e.stopPropagation();
          }
          const isOpen = menu.classList.contains('show');
          closeAllDropdowns();
          if (!isOpen) {
            menu.classList.add('show');
            container.classList.add('show');
            chipBtn.setAttribute('aria-expanded', 'true');
          }
        }

        chipBtn.addEventListener('click', toggleMenu);

        chipBtn.addEventListener('keydown', function(e) {
          if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            if (!menu.classList.contains('show')) {
              toggleMenu();
            }
            const firstItem = menu.querySelector('.auth-dropdown-item');
            if (firstItem) firstItem.focus();
          }
        });

        // Dropdown internal keyboard navigation
        menu.addEventListener('keydown', function(e) {
          const items = Array.from(menu.querySelectorAll('.auth-dropdown-item'));
          const currentIndex = items.indexOf(document.activeElement);
          if (e.key === 'ArrowDown') {
            e.preventDefault();
            const nextIndex = (currentIndex + 1) % items.length;
            items[nextIndex].focus();
          } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            const prevIndex = (currentIndex - 1 + items.length) % items.length;
            items[prevIndex].focus();
          } else if (e.key === 'Escape') {
            e.preventDefault();
            closeAllDropdowns();
            chipBtn.focus();
          }
        });

        // Dropdown link items click behavior (support immediate section switch if already on dashboard)
        container.querySelectorAll('.auth-dropdown-item:not(.auth-signout-btn)').forEach(item => {
          item.addEventListener('click', function(e) {
            closeAllDropdowns();
            const hash = this.getAttribute('data-hash');
            const isDashboard = window.location.pathname.endsWith('dashboard.html') || window.location.pathname.includes('/dashboard');
            if (isDashboard && hash && typeof window.navigate === 'function') {
              e.preventDefault();
              window.navigate(hash);
            }
          });
        });

        if (signOutBtn) {
          signOutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            closeAllDropdowns();
            logout('index.html');
          });
        }
      } else {
        // Logged out: Single rectangular "Sign In" button
        const btn = document.createElement('a');
        btn.id = el.id;
        btn.className = 'btn btn-sm fw-bold px-3 btn-primary auth-signin-btn';
        btn.href = 'login.html';
        btn.textContent = 'Sign In';
        el.parentNode.replaceChild(btn, el);
      }
    });
  }

  // Global listeners for dropdown dismiss (outside click & Escape key)
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.auth-user-dropdown')) {
      closeAllDropdowns();
    }
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeAllDropdowns();
    }
  });

  /**
   * Multi-tab sync: Listen to storage event across tabs
   */
  window.addEventListener('storage', function(e) {
    if (e.key === SESSION_KEY || e.key === LEGACY_KEY) {
      updateNavbar();
      // If logged out in another tab and currently on protected page, redirect
      if (!isLoggedIn()) {
        const path = window.location.pathname.split('/').pop() || '';
        if (path === 'dashboard.html' || path === 'admin-dashboard.html') {
          window.location.replace('login.html');
        }
      }
    }
  });

  /**
   * Small, accessible Toast notification component.
   * - Auto-dismisses after ~3s
   * - Has close button
   * - Appears top-right (top-left in RTL using logical properties)
   * - role="status" and aria-live="polite"
   * - Works in both light and dark themes
   */
  function showToast(message, type = 'success') {
    let container = document.getElementById('authToastContainer');
    if (!container) {
      container = document.createElement('div');
      container.id = 'authToastContainer';
      container.className = 'auth-toast-container';
      container.setAttribute('role', 'region');
      container.setAttribute('aria-label', 'Notifications');
      document.body.appendChild(container);
    }

    // Dismiss existing toasts in container to prevent duplicate pop up notifications
    container.innerHTML = '';

    const toast = document.createElement('div');
    const isError = type === 'danger' || type === 'error';
    const isInfo  = type === 'info';
    let typeClass = 'auth-toast-success';
    if (isError) typeClass = 'auth-toast-error';
    else if (isInfo) typeClass = 'auth-toast-info';

    toast.className = 'auth-toast ' + typeClass;
    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');

    let iconHtml = '<i class="bi bi-check-circle-fill"></i>';
    if (isError) iconHtml = '<i class="bi bi-exclamation-circle-fill"></i>';
    else if (isInfo) iconHtml = '<i class="bi bi-info-circle-fill"></i>';

    toast.innerHTML = `
      <div class="auth-toast-icon">${iconHtml}</div>
      <div class="auth-toast-message">${escapeHtml(message)}</div>
      <button type="button" class="auth-toast-close" aria-label="Close notification">&times;</button>
    `;

    container.appendChild(toast);

    function removeToast() {
      if (toast.classList.contains('fade-out')) return;
      toast.classList.add('fade-out');
      setTimeout(() => {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 250);
    }

    const closeBtn = toast.querySelector('.auth-toast-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', removeToast);
    }

    setTimeout(removeToast, 3000);
  }

  /**
   * Static mock Sign In
   */
  function mockSignIn(email) {
    const namePart = email.includes('@') ? email.split('@')[0] : 'User';
    const user = {
      name: namePart,
      email: email.trim().toLowerCase(),
      signedInAt: new Date().toISOString()
    };
    setCurrentUser(user);
    showToast('Successfully signed in', 'success');
    return user;
  }

  /**
   * Static mock Sign Up
   */
  function mockSignUp(name, email, phone = '') {
    const cleanName = (name || '').trim() || (email.includes('@') ? email.split('@')[0] : 'User');
    const user = {
      name: cleanName,
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      signedInAt: new Date().toISOString()
    };
    setCurrentUser(user);
    showToast('Account created successfully', 'success');
    return user;
  }

  // Check for post-logout or post-login toast on page load
  document.addEventListener('DOMContentLoaded', () => {
    updateNavbar();
    try {
      if (sessionStorage.getItem('tm-logout-toast') === '1') {
        sessionStorage.removeItem('tm-logout-toast');
        showToast('Signed out successfully', 'info');
      }
      const loginToastMsg = sessionStorage.getItem('tm-login-toast');
      if (loginToastMsg) {
        sessionStorage.removeItem('tm-login-toast');
        showToast(loginToastMsg, 'success');
      }
    } catch (e) {}
  });

  // Global expose
  window.showToast = showToast;

  return {
    getCurrentUser,
    setCurrentUser,
    clearCurrentUser,
    logout,
    isLoggedIn,
    getUserDisplayName,
    getUserInitials,
    updateNavbar,
    showToast,
    mockSignIn,
    mockSignUp
  };
})();
