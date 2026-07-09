// -- Events Page

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

// 2. CART FUNCTIONS
function addToCart(itemName, itemPrice) {
  let cart = JSON.parse(localStorage.getItem('foodfestCart')) || [];
  cart.push({ name: itemName, price: itemPrice });
  localStorage.setItem('foodfestCart', JSON.stringify(cart));
}

function bookNow(itemName) {
  addToCart(itemName, '');
  showToast(`"${itemName}" added to cart! <a href="BookTickets.html" style="color:#fff;text-decoration:underline;">Go to Cart</a>`);
}

function confirmSlotBooking() {
  closeQuickView();
  addToCart(document.getElementById('m-title').innerText, document.getElementById('m-price').innerText);
  showToast('Item added to cart! <a href="BookTickets.html" style="color:#fff;text-decoration:underline;">Go to Cart</a>');
}

// 3. Make entire product cards clickable
function initCardClicks() {
  document.querySelectorAll('.product-card, .wide-card').forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', function(e) {
      // Don't trigger if clicking a button inside the card
      if (e.target.closest('button')) return;
      const name = this.getAttribute('data-name') || 'Item';
      const price = this.getAttribute('data-price') || '';
      addToCart(name, price);
      window.location.href = 'BookTickets.html';
    });
  });
}

// 4. SEARCH EVENTS FUNCTIONALITY
document.addEventListener('DOMContentLoaded', function() {
  initCardClicks();
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