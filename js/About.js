// ==========================================
// ABOUT PAGE - FIRE THEME INTERACTIVE FEATURES
// ==========================================

function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  const hamburger = document.getElementById('hamburgerBtn');
  if (navLinks) navLinks.classList.toggle('open');
  if (hamburger) hamburger.classList.toggle('active');
}

// ==========================================
// 1. ANIMATED COUNTER FOR STATS
// ==========================================
function animateCounters() {
  const statNumbers = document.querySelectorAll('.stat-number');
  if (!statNumbers.length) return;

  let animationStarted = false;

  const startCounting = () => {
    if (animationStarted) return;
    animationStarted = true;

    statNumbers.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'));
      const duration = 2000;
      const startTime = performance.now();

      function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Ease-out cubic for smooth deceleration
        const eased = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.floor(eased * target);

        counter.textContent = currentValue;

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target;
        }
      }

      requestAnimationFrame(updateCounter);
    });
  };

  // Intersection Observer to start counting when visible
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startCounting();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  const statsSection = document.querySelector('.stats-grid');
  if (statsSection) observer.observe(statsSection);
}

// ==========================================
// 2. SCROLL REVEAL ANIMATIONS
// ==========================================
function initScrollReveals() {
  const animateElements = [
    '.pillar-card', '.master-card', '.value-card',
    '.story-container', '.cta-section', '.stats-grid',
    '.hero-main-title', '.hero-desc', '.hero-badge-row'
  ];

  const observerOptions = {
    threshold: 0.12,
    rootMargin: '0px 0px -30px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll(animateElements.join(', ')).forEach(el => {
    // Don't add scroll-reveal to elements that are already visible
    // or that shouldn't have the animation
    if (el.classList.contains('no-reveal')) return;

    el.classList.add('scroll-reveal');
    observer.observe(el);
  });

  // Stagger pillar cards
  document.querySelectorAll('.pillar-card').forEach((card, i) => {
    card.style.transitionDelay = (i * 0.15) + 's';
  });

  // Stagger master cards
  document.querySelectorAll('.master-card').forEach((card, i) => {
    card.style.transitionDelay = (i * 0.1) + 's';
  });

  // Stagger value cards
  document.querySelectorAll('.value-card').forEach((card, i) => {
    card.style.transitionDelay = (i * 0.15) + 's';
  });
}

// ==========================================
// 3. FLAME BAR INTERACTIVE EFFECT
// ==========================================
function initFlameBar() {
  const segments = document.querySelectorAll('.flame-segment');
  if (!segments.length) return;

  segments.forEach(segment => {
    segment.addEventListener('mouseenter', function() {
      // Reset all segments first
      segments.forEach(s => {
        s.style.opacity = '0.4';
        s.style.transform = 'scaleY(1)';
      });

      // Highlight this segment and neighbors
      const index = Array.from(segments).indexOf(this);
      const range = [-1, 0, 1]; // neighbors

      range.forEach(offset => {
        const neighborIndex = index + offset;
        if (neighborIndex >= 0 && neighborIndex < segments.length) {
          segments[neighborIndex].style.opacity = '1';
          segments[neighborIndex].style.transform = 'scaleY(1.4)';
        }
      });
    });

    segment.addEventListener('mouseleave', function() {
      segments.forEach((s, i) => {
        s.style.opacity = '';
        s.style.transform = '';
      });
    });
  });
}

// ==========================================
// 4. PARALLAX ON HERO DECORATIVE ELEMENTS
// ==========================================
function initParallax() {
  const heroDecor = document.querySelector('.about-hero-bg-decor');
  if (!heroDecor) return;

  document.querySelector('.about-hero').addEventListener('mousemove', function(e) {
    const rect = this.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;

    heroDecor.style.transform = `translate(${x}px, ${y}px)`;
  });

  // Reset on mouse leave
  document.querySelector('.about-hero').addEventListener('mouseleave', function() {
    heroDecor.style.transform = 'translate(0, 0)';
    heroDecor.style.transition = 'transform 0.5s ease';
    setTimeout(() => {
      heroDecor.style.transition = '';
    }, 500);
  });
}

// ==========================================
// 5. MASTERS CARD INTERACTION
// ==========================================
function initMasterCards() {
  const cards = document.querySelectorAll('.master-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      // Subtle tilt effect via CSS transform
      this.style.transform = 'translateY(-6px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function() {
      this.style.transform = '';
    });
  });
}

// ==========================================
// INIT ON DOM READY
// ==========================================
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
    if (linkHref === currentPage) {
      link.style.opacity = '0.7';
    }
  });

  // Initialize all features
  animateCounters();
  initScrollReveals();
  initFlameBar();
  initParallax();
  initMasterCards();
});
