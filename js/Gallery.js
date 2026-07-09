// -- Gallery Page

let currentLightboxIndex = 0;
let visibleItems = [];

document.addEventListener('DOMContentLoaded', function() {
  // Initialize visible items for lightbox navigation
  updateVisibleItems();

  // Attach click handlers to gallery items
  const galleryItems = document.querySelectorAll('.gallery-item');
  galleryItems.forEach((item, index) => {
    item.addEventListener('click', function() {
      openLightbox(item);
    });
  });
});

// 1. GALLERY FILTERING
function filterGallery(category, btn) {
  // Update active filter button
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const items = document.querySelectorAll('.gallery-item');

  items.forEach(item => {
    if (category === 'all' || item.getAttribute('data-category') === category) {
      item.style.display = '';
      // Reset animation
      item.style.opacity = '0';
      item.style.transform = 'scale(0.95)';
      requestAnimationFrame(() => {
        item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        item.style.opacity = '1';
        item.style.transform = 'scale(1)';
      });
    } else {
      item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      item.style.opacity = '0';
      item.style.transform = 'scale(0.95)';
      setTimeout(() => {
        item.style.display = 'none';
      }, 300);
    }
  });

  // Update visible items after filter animation
  setTimeout(updateVisibleItems, 350);
}

function updateVisibleItems() {
  visibleItems = Array.from(document.querySelectorAll('.gallery-item')).filter(
    item => item.style.display !== 'none'
  );
}

// 2. LIGHTBOX FUNCTIONS
function openLightbox(item) {
  updateVisibleItems();
  currentLightboxIndex = visibleItems.indexOf(item);
  if (currentLightboxIndex === -1) currentLightboxIndex = 0;

  showLightboxImage();

  const overlay = document.getElementById('lightboxOverlay');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function showLightboxImage() {
  const item = visibleItems[currentLightboxIndex];
  if (!item) return;

  const fullSrc = item.getAttribute('data-full') || '';
  const caption = item.getAttribute('data-caption') || '';

  const img = document.getElementById('lightboxImg');
  const captionEl = document.getElementById('lightboxCaption');
  const counterEl = document.getElementById('lightboxCounter');

  // Fade out
  img.style.opacity = '0';
  captionEl.style.opacity = '0';

  setTimeout(() => {
    img.src = fullSrc;
    img.alt = caption;
    captionEl.textContent = caption;
    counterEl.textContent = `${currentLightboxIndex + 1} / ${visibleItems.length}`;

    // Fade in
    img.style.opacity = '1';
    captionEl.style.opacity = '1';
  }, 200);
}

function closeLightbox() {
  const overlay = document.getElementById('lightboxOverlay');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

function navigateLightbox(direction) {
  currentLightboxIndex += direction;
  if (currentLightboxIndex < 0) currentLightboxIndex = visibleItems.length - 1;
  if (currentLightboxIndex >= visibleItems.length) currentLightboxIndex = 0;
  showLightboxImage();
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
  const overlay = document.getElementById('lightboxOverlay');
  if (!overlay || !overlay.classList.contains('active')) return;

  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') navigateLightbox(-1);
  if (e.key === 'ArrowRight') navigateLightbox(1);
});
