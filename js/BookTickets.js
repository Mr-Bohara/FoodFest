// ==========================================
// BOOK TICKETS PAGE - INTERACTIVE FEATURES
// ==========================================

function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  const hamburger = document.getElementById('hamburgerBtn');
  if (navLinks) navLinks.classList.toggle('open');
  if (hamburger) hamburger.classList.toggle('active');
}

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

// 4. CONFIRM PURCHASE
function confirmPurchase() {
  if (!selectedTier) {
    alert('Please select a ticket tier first.');
    return;
  }
  
  const total = document.getElementById('summaryTotal').textContent;
  alert(`🎉 Purchase Confirmed!\n\nTier: ${selectedName}\nQuantity: ${quantity}\nTotal: ${total}\n\nThank you for booking with FoodFest 2026! Your e-tickets will be sent to your registered email.`);
}

// 5. HIGHLIGHT CURRENT PAGE IN NAV
document.addEventListener('DOMContentLoaded', function() {
  const currentPage = window.location.pathname.split('/').pop();
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref === currentPage) {
      link.style.opacity = '0.7';
    }
  });
  
  updateSummary();
});