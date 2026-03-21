// ===== TAB SWITCHER =====
function switchTab(tab, btn) {
  document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
  document.querySelectorAll('.auth-tab').forEach(b => b.classList.remove('active'));
  document.getElementById(tab).classList.add('active');
  btn.classList.add('active');
}

// ===== HELPERS =====
function showError(id, show) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.toggle('show', show);
}

function markField(id, hasError) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.toggle('error', hasError);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ===== REGISTER VALIDATION =====
function validateRegister(e) {
  e.preventDefault();
  const name     = document.getElementById('reg-name').value.trim();
  const email    = document.getElementById('reg-email').value.trim();
  const password = document.getElementById('reg-password').value;
  const confirm  = document.getElementById('reg-confirm').value;
  let valid = true;

  const nameErr = name === '';
  markField('reg-name', nameErr); showError('err-name', nameErr);
  if (nameErr) valid = false;

  const emailErr = !isValidEmail(email);
  markField('reg-email', emailErr); showError('err-email', emailErr);
  if (emailErr) valid = false;

  const passErr = password.length < 6;
  markField('reg-password', passErr); showError('err-password', passErr);
  if (passErr) valid = false;

  const confirmErr = password !== confirm;
  markField('reg-confirm', confirmErr); showError('err-confirm', confirmErr);
  if (confirmErr) valid = false;

  if (valid) {
    document.getElementById('reg-success').classList.add('show');
    document.getElementById('registerForm').reset();
    setTimeout(() => document.getElementById('reg-success').classList.remove('show'), 4000);
  }
  return false;
}

// ===== LOGIN VALIDATION =====
function validateLogin(e) {
  e.preventDefault();
  const email    = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-password').value;
  let valid = true;

  const emailErr = !isValidEmail(email);
  markField('login-email', emailErr); showError('err-login-email', emailErr);
  if (emailErr) valid = false;

  const passErr = password === '';
  markField('login-password', passErr); showError('err-login-password', passErr);
  if (passErr) valid = false;

  if (valid) {
    document.getElementById('login-success').classList.add('show');
    document.getElementById('loginForm').reset();
    setTimeout(() => document.getElementById('login-success').classList.remove('show'), 3000);
  }
  return false;
}

// ===== CONTACT FORM VALIDATION =====
function submitContact(e) {
  e.preventDefault();
  const name    = document.getElementById('c-name').value.trim();
  const email   = document.getElementById('c-email').value.trim();
  const subject = document.getElementById('c-subject').value.trim();
  const message = document.getElementById('c-message').value.trim();
  let valid = true;

  const nameErr = name === '';
  markField('c-name', nameErr); showError('err-c-name', nameErr);
  if (nameErr) valid = false;

  const emailErr = !isValidEmail(email);
  markField('c-email', emailErr); showError('err-c-email', emailErr);
  if (emailErr) valid = false;

  const subjectErr = subject === '';
  markField('c-subject', subjectErr); showError('err-c-subject', subjectErr);
  if (subjectErr) valid = false;

  const msgErr = message === '';
  markField('c-message', msgErr); showError('err-c-message', msgErr);
  if (msgErr) valid = false;

  if (valid) {
    document.getElementById('contact-success').classList.add('show');
    e.target.reset();
    setTimeout(() => document.getElementById('contact-success').classList.remove('show'), 4000);
  }
  return false;
}
