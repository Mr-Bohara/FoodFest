// -- Food Stalls Page

function addToCart(itemName, itemPrice) {
  let cart = JSON.parse(localStorage.getItem('foodfestCart')) || [];
  cart.push({ name: itemName, price: itemPrice });
  localStorage.setItem('foodfestCart', JSON.stringify(cart));
}

document.addEventListener('DOMContentLoaded', function() {
  // Make stall cards clickable
  document.querySelectorAll('.stall-card').forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', function() {
      const name = this.getAttribute('data-name') || 'Item';
      const price = this.getAttribute('data-price') || '';
      addToCart(name, price);
      window.location.href = 'BookTickets.html';
    });
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
