/**
 * auth.js - Authentication & Session Management
 * Trading Academy | Front-end auth via localStorage.
 * Include AFTER data.js and BEFORE page-specific scripts.
 */

const AUTH = (() => {

  const USERS_KEY   = 'tm-users';
  const SESSION_KEY = 'tm-current-user';

  // Seed admin account on first load
  function _seedAdmin() {
    const users = getUsers();
    if (!users.find(u => u.email === 'admin@academy.com')) {
      users.push({
        id: 0,
        name: 'Admin User',
        email: 'admin@academy.com',
        password: 'Admin@123',
        role: 'admin',
        joinDate: '2024-01-01'
      });
      _saveUsers(users);
    }
  }

  function getUsers() {
    try {
      return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
    } catch { return []; }
  }

  function _saveUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }

  function getCurrentUser() {
    try {
      return JSON.parse(localStorage.getItem(SESSION_KEY));
    } catch { return null; }
  }

  function setCurrentUser(user) {
    localStorage.setItem(SESSION_KEY, JSON.stringify(user));
  }

  function clearCurrentUser() {
    localStorage.removeItem(SESSION_KEY);
  }

  function isLoggedIn() {
    return getCurrentUser() !== null;
  }

  function isAdmin() {
    const u = getCurrentUser();
    return u && u.role === 'admin';
  }

  function isStudent() {
    const u = getCurrentUser();
    return u && u.role === 'student';
  }

  /**
   * Register a new student account.
   * Returns { success, message }
   */
  function register(name, email, password) {
    const users = getUsers();
    if (users.find(u => u.email.toLowerCase() === email.toLowerCase())) {
      return { success: false, message: 'An account with this email already exists.' };
    }
    const newUser = {
      id: Date.now(),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      password,
      role: 'student',
      joinDate: new Date().toISOString().split('T')[0],
      phone: '',
      avatar: ''
    };
    users.push(newUser);
    _saveUsers(users);
    return { success: true, message: 'Registration successful. Please log in.' };
  }

  /**
   * Attempt login.
   * Returns { success, user, message }
   */
  function login(email, password) {
    _seedAdmin();
    const users = getUsers();
    const user  = users.find(
      u => u.email.toLowerCase() === email.trim().toLowerCase() && u.password === password
    );
    if (!user) {
      return { success: false, message: 'Invalid email or password. Please try again.' };
    }
    // Store session (without password)
    const sessionUser = { id: user.id, name: user.name, email: user.email, role: user.role, joinDate: user.joinDate, phone: user.phone || '', avatar: user.avatar || '' };
    setCurrentUser(sessionUser);
    return { success: true, user: sessionUser };
  }

  /**
   * Log out and redirect.
   */
  function logout(redirectTo = 'login.html') {
    clearCurrentUser();
    window.location.href = redirectTo;
  }

  /**
   * Redirect to login if not authenticated.
   * Call from protected pages.
   */
  function requireLogin(redirectBack = '') {
    if (!isLoggedIn()) {
      window.location.href = 'login.html' + (redirectBack ? '?next=' + encodeURIComponent(redirectBack) : '');
      return false;
    }
    return true;
  }

  /**
   * Redirect to student dashboard if wrong role.
   */
  function requireAdmin() {
    if (!isLoggedIn()) { window.location.href = 'login.html'; return false; }
    if (!isAdmin())    { window.location.href = 'dashboard.html'; return false; }
    return true;
  }

  /**
   * Update all navbar auth elements on the current page.
   * Looks for elements with data-auth attributes.
   */
  function updateNavbar() {
    const user    = getCurrentUser();
    const authBtn = document.getElementById('authBtn');
    const authBtnMobile = document.getElementById('authBtnMobile');

    if (!authBtn) return;

    if (user) {
      if (user.role === 'admin') {
        authBtn.innerHTML = '<i class="bi bi-speedometer2 me-1"></i>Admin Panel';
        authBtn.href = 'admin-dashboard.html';
        authBtn.className = 'btn btn-danger btn-sm fw-bold';
        if (authBtnMobile) { authBtnMobile.innerHTML = authBtn.innerHTML; authBtnMobile.href = authBtn.href; }
      } else {
        authBtn.innerHTML = '<i class="bi bi-person-circle me-1"></i>Dashboard';
        authBtn.href = 'dashboard.html';
        authBtn.className = 'btn btn-success btn-sm fw-bold';
        if (authBtnMobile) { authBtnMobile.innerHTML = authBtn.innerHTML; authBtnMobile.href = authBtn.href; }
      }
    } else {
      authBtn.innerHTML = '<i class="bi bi-person me-1"></i>Login';
      authBtn.href = 'login.html';
      authBtn.className = 'btn btn-warning btn-sm fw-bold';
      if (authBtnMobile) { authBtnMobile.innerHTML = authBtn.innerHTML; authBtnMobile.href = authBtn.href; }
    }
  }

  /**
   * Social Login (Google/Apple) integration
   */
  function socialLogin(provider) {
    const users = getUsers();
    const email = `${provider}@demo.com`.toLowerCase();
    let user = users.find(u => u.email === email);
    
    if (!user) {
      user = {
        id: Date.now(),
        name: `${provider.charAt(0).toUpperCase() + provider.slice(1)} User`,
        email: email,
        password: '',
        role: 'student',
        joinDate: new Date().toISOString().split('T')[0],
        phone: '',
        avatar: ''
      };
      users.push(user);
      _saveUsers(users);
    }
    
    const sessionUser = { id: user.id, name: user.name, email: user.email, role: user.role, joinDate: user.joinDate, phone: user.phone || '', avatar: user.avatar || '' };
    setCurrentUser(sessionUser);
    return { success: true, user: sessionUser };
  }

  // Auto-seed admin on load
  _seedAdmin();

  return { getUsers, getCurrentUser, setCurrentUser, clearCurrentUser, isLoggedIn, isAdmin, isStudent, register, login, socialLogin, logout, requireLogin, requireAdmin, updateNavbar };

})();
