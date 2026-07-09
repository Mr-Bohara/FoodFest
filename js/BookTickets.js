// -- Book Tickets Page

let selectedTier = null;
let selectedPrice = 0;
let selectedName = '';
let quantity = 1;
const serviceFeeRate = 0.05; // 5% service fee

// 1. SELECT TIER
function selectTier(tier, name, price) {
  selectedTier = tier;
  selectedName = name;
  selectedPrice = price;
  
  // Highlight selected tier using CSS class
  document.querySelectorAll('.tier-card').forEach(card => {
    card.classList.remove('selected');
  });
  
  const activeCard = document.querySelector(`.tier-card[data-tier="${tier}"]`);
  if (activeCard) {
    activeCard.classList.add('selected');
  }
  
  updateSummary();
}

// 2. CHANGE QUANTITY
function changeQty(delta) {
  quantity = Math.max(1, Math.min(10, quantity + delta));
  document.getElementById('summaryQty').textContent = quantity;
  updateSummary();
}

// 3. UPDATE SUMMARY
function updateSummary() {
  const fee = selectedPrice > 0 ? Math.round(selectedPrice * serviceFeeRate) : 0;
  const total = selectedPrice > 0 ? (selectedPrice + fee) * quantity : 0;
  
  document.getElementById('summaryTier').textContent = selectedName || '—';
  document.getElementById('summaryPrice').textContent = selectedPrice > 0 ? `$${selectedPrice}` : '$0';
  document.getElementById('summaryFee').textContent = fee > 0 ? `$${fee}` : '$0';
  document.getElementById('summaryTotal').textContent = total > 0 ? `$${total.toLocaleString()}` : '$0';
}

// 4. CART FUNCTIONS
function renderCartItems() {
  const cart = JSON.parse(localStorage.getItem('foodfestCart')) || [];
  const container = document.getElementById('cartItemsContainer');
  const cartSection = document.getElementById('cartSection');
  
  if (!container) return;
  
  if (cart.length === 0) {
    cartSection.style.display = 'none';
    return;
  }
  
  cartSection.style.display = 'block';
  container.innerHTML = '';
  
  cart.forEach((item, index) => {
    const row = document.createElement('div');
    row.className = 'cart-item-row';
    row.innerHTML = `
      <span class="cart-item-name">${item.name}</span>
      <span class="cart-item-price">${item.price || '—'}</span>
      <button class="cart-remove-btn" onclick="removeCartItem(${index})">&times;</button>
    `;
    container.appendChild(row);
  });
}

function removeCartItem(index) {
  let cart = JSON.parse(localStorage.getItem('foodfestCart')) || [];
  cart.splice(index, 1);
  localStorage.setItem('foodfestCart', JSON.stringify(cart));
  renderCartItems();
  showToast('Item removed from cart.');
}

function clearCart() {
  localStorage.removeItem('foodfestCart');
  renderCartItems();
  showToast('Cart cleared.');
}

// 5. CONFIRM PURCHASE
function confirmPurchase() {
  if (!selectedTier) {
    showInlineError('summaryTotal', 'Please select a ticket tier first.');
    return;
  }
  
  const total = document.getElementById('summaryTotal').textContent;
  showToast('Purchase Confirmed! Thank you for your order.');
  clearCart();
  // Reset selection
  selectedTier = null;
  selectedName = '';
  selectedPrice = 0;
  quantity = 1;
  document.querySelectorAll('.tier-card').forEach(card => card.classList.remove('selected'));
  document.getElementById('summaryQty').textContent = '1';
  updateSummary();
}

// 6. INIT ON DOM READY
document.addEventListener('DOMContentLoaded', function() {
  updateSummary();
  renderCartItems();
});