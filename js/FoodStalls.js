// ==========================================
// FOOD STALLS PAGE - FILTER & SEARCH
// ==========================================

function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  const hamburger = document.getElementById('hamburgerBtn');
  if (navLinks) navLinks.classList.toggle('open');
  if (hamburger) hamburger.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function() {
  // Highlight current page in nav
  const currentPage = window.location.pathname.split('/').pop();
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref === currentPage) link.style.opacity = '0.7';
  });

  // Search functionality
  const searchInput = document.getElementById('stallSearch');
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      const query = this.value.toLowerCase().trim();
      document.querySelectorAll('.stall-card').forEach(card => {
        const name = card.querySelector('h3')?.textContent?.toLowerCase() || '';
        const desc = card.querySelector('p')?.textContent?.toLowerCase() || '';
        card.style.display = (name.includes(query) || desc.includes(query)) ? '' : 'none';
      });
    });
  }
});

function filterStalls(category, btn) {
  // Update active category button
  document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  // Filter stalls
  document.querySelectorAll('.stall-card').forEach(card => {
    if (category === 'all') {
      card.style.display = '';
    } else {
      card.style.display = card.getAttribute('data-category') === category ? '' : 'none';
    }
  });
}
