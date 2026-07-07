// ==========================================
// EVENTS PAGE - INTERACTIVE FEATURES
// ==========================================

function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  const hamburger = document.getElementById('hamburgerBtn');
  if (navLinks) navLinks.classList.toggle('open');
  if (hamburger) hamburger.classList.toggle('active');
}

// 1. QUICK VIEW MODAL FUNCTIONS
function openQuickView(title, price, desc, stall, chef, ingredients) {
  document.getElementById('m-title').innerText = title;
  document.getElementById('m-price').innerText = price;
  document.getElementById('m-desc').innerText = desc;
  document.getElementById('m-stall').innerText = stall;
  document.getElementById('m-chef').innerText = chef;
  document.getElementById('m-ingredients').innerText = ingredients;
  
  document.getElementById('quickViewOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeQuickView() {
  document.getElementById('quickViewOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeQuickView();
  }
});

// 2. BOOK NOW FUNCTION
function bookNow(itemName) {
  alert(`🎉 "${itemName}" has been added to your cart!\n\nProceed to Book Tickets page to complete your purchase.`);
}

// 3. SEARCH EVENTS FUNCTIONALITY
document.addEventListener('DOMContentLoaded', function() {
  // Highlight current page in navbar
  const currentPage = window.location.pathname.split('/').pop();
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref === currentPage) {
      link.style.opacity = '0.7';
    }
  });

  const searchInput = document.getElementById('searchInput');
  if (!searchInput) return;

  searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase().trim();
    const cards = document.querySelectorAll('.product-card, .wide-card');
    
    cards.forEach(card => {
      const name = (card.getAttribute('data-name') || '').toLowerCase();
      const desc = (card.querySelector('.product-desc')?.textContent || '').toLowerCase();
      
      if (name.includes(query) || desc.includes(query)) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
});