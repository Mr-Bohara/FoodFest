// ==========================================
// LOGIN PAGE - INTERACTIVE FEATURES
// ==========================================

function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  const hamburger = document.getElementById('hamburgerBtn');
  if (navLinks) navLinks.classList.toggle('open');
  if (hamburger) hamburger.classList.toggle('active');
}

// 1. LOGIN FORM HANDLER
function handleLogin(event) {
  event.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  
  // Simple validation
  if (!email || !password) {
    alert('Please enter both email and password.');
    return;
  }
  
  if (!email.includes('@')) {
    alert('Please enter a valid email address.');
    return;
  }
  
  alert(`Welcome back! You have been logged in successfully.\n\nRedirecting to your dashboard...`);
  // In a real app: window.location.href = 'Home.html';
}

// 2. GOOGLE SIGN-IN BUTTON
document.addEventListener('DOMContentLoaded', function() {
  const googleBtn = document.querySelector('.google-btn');
  if (googleBtn) {
    googleBtn.addEventListener('click', function() {
      alert('Google Sign-In integration will be available soon. Please use email login for now.');
    });
  }

  // 3. HIGHLIGHT CURRENT PAGE IN NAV
  const currentPage = window.location.pathname.split('/').pop();
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref === currentPage) {
      link.style.opacity = '0.7';
    }
  });
});