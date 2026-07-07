// ==========================================
// SCHEDULE PAGE - DAY TAB SWITCHING
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

  // Highlight current page in nav
  const currentPage = window.location.pathname.split('/').pop();
  const navLinksAll = document.querySelectorAll('.nav-links a');
  navLinksAll.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref === currentPage) link.style.opacity = '0.7';
  });
});

function switchDay(day, btn) {
  // Hide all days
  document.querySelectorAll('.schedule-day').forEach(d => d.classList.remove('active'));
  // Deactivate all tabs
  document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
  // Activate selected day and tab
  document.getElementById('day' + day).classList.add('active');
  btn.classList.add('active');
}
