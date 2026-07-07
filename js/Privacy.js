// ==========================================
// PRIVACY PAGE - NAV HIGHLIGHT
// ==========================================

function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  const hamburger = document.getElementById('hamburgerBtn');
  if (navLinks) navLinks.classList.toggle('open');
  if (hamburger) hamburger.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function() {
  // Close mobile menu on link click
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      const navLinks = document.getElementById('navLinks');
      const hamburger = document.getElementById('hamburgerBtn');
      if (navLinks) navLinks.classList.remove('open');
      if (hamburger) hamburger.classList.remove('active');
    });
  });

  const currentPage = window.location.pathname.split('/').pop();
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref === currentPage) link.style.opacity = '0.7';
  });
});
