// Live Target Countdown Timer (Set to 10 days out)
    const targetDate = new Date().getTime() + (10 * 24 * 60 * 60 * 1000);

    function updateCountdown() {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(timerInterval);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      document.getElementById("days").innerText = String(days).padStart(2, '0');
      document.getElementById("hours").innerText = String(hours).padStart(2, '0');
      document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
      document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
    }

    const timerInterval = setInterval(updateCountdown, 1000);
    updateCountdown();

// Menu Modal open/close
function openMenuModal() {
  document.getElementById('menuOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeMenuModal(e) {
  if (e && e.target !== e.currentTarget) return;
  document.getElementById('menuOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

// Close menu modal with Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    var overlay = document.getElementById('menuOverlay');
    if (overlay && overlay.classList.contains('active')) {
      closeMenuModal();
    }
  }
});

// Hero Background Slideshow (changes every 5 seconds)
(function initHeroSlideshow() {
  const slides = document.querySelectorAll('.hero-slide');
  if (!slides.length) return;
  let current = 0;

  setInterval(function() {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, 5000);
})();