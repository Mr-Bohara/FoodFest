// Responsive Navbar Menu Toggle
    function toggleMenu() {
      const navLinks = document.getElementById("navLinks");
      const hamburgerBtn = document.getElementById("hamburgerBtn");
      navLinks.classList.toggle("open");
      hamburgerBtn.classList.toggle("active");
    }

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