// ==========================================
// ABOUT PAGE - INTERACTIVE FEATURES
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

  // Scroll reveal animations for cards
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all animatable sections
  document.querySelectorAll('.pillar-card, .master-card, .content-card, .cta-section').forEach(el => {
    el.classList.add('scroll-reveal');
    observer.observe(el);
  });

  // Stagger pillar cards
  document.querySelectorAll('.pillar-card').forEach((card, i) => {
    card.style.transitionDelay = (i * 0.15) + 's';
  });

  // Stagger master cards
  document.querySelectorAll('.master-card').forEach((card, i) => {
    card.style.transitionDelay = (i * 0.12) + 's';
  });
});
