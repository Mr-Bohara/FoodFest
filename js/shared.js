// -- Shared Functions

// 1. Mobile Hamburger Toggle
function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  const hamburger = document.getElementById('hamburgerBtn');
  if (navLinks) navLinks.classList.toggle('open');
  if (hamburger) hamburger.classList.toggle('active');
}

// 2. Sidebar - Hover Show/Hide
var sidebarTimer = null;

function showSidebar() {
  clearTimeout(sidebarTimer);
  document.getElementById('sidebar').classList.add('open');
}

function hideSidebar() {
  sidebarTimer = setTimeout(function () {
    document.getElementById('sidebar').classList.remove('open');
  }, 300);
}

// 4. Show a toast notification (replaces alerts)
function showToast(message, type) {
  type = type || 'success';
  var existing = document.querySelector('.toast-notification');
  if (existing) existing.remove();

  var toast = document.createElement('div');
  toast.className = 'toast-notification toast-' + type;
  toast.innerHTML = message;
  document.body.appendChild(toast);

  requestAnimationFrame(function() {
    toast.classList.add('toast-visible');
  });

  setTimeout(function() {
    toast.classList.remove('toast-visible');
    setTimeout(function() { toast.remove(); }, 400);
  }, 3500);
}

// 5. Show inline error message on an element
function showInlineError(elementId, message) {
  var el = document.getElementById(elementId);
  if (!el) return;
  var existing = el.parentElement.querySelector('.inline-error');
  if (existing) existing.remove();

  var error = document.createElement('p');
  error.className = 'inline-error';
  error.textContent = message;
  error.style.cssText = 'color: #EF4444; font-size: 12px; margin-top: 6px; font-weight: 500;';
  el.parentElement.appendChild(error);

  setTimeout(function() { error.remove(); }, 3000);
}

// 6. Run on page load
document.addEventListener('DOMContentLoaded', function () {
  // Highlight current page in navbar
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === currentPage) {
      link.style.opacity = '0.7';
    }
  });

  // Close mobile menu when a nav link is clicked
  document.querySelectorAll('.nav-links a').forEach(function (link) {
    link.addEventListener('click', function () {
      var navLinks = document.getElementById('navLinks');
      var hamburger = document.getElementById('hamburgerBtn');
      if (navLinks) navLinks.classList.remove('open');
      if (hamburger) hamburger.classList.remove('active');
    });
  });

  // Sidebar hover setup
  var hoverZone = document.getElementById('sidebarHoverZone');
  var sidebar = document.getElementById('sidebar');

  if (hoverZone && sidebar) {
    // Show sidebar when hovering over the trigger zone
    hoverZone.addEventListener('mouseenter', showSidebar);
    hoverZone.addEventListener('mouseleave', hideSidebar);

    // Keep sidebar open when hovering on it
    sidebar.addEventListener('mouseenter', showSidebar);
    sidebar.addEventListener('mouseleave', hideSidebar);
  }

  // Close sidebar when a sidebar link is clicked
  document.querySelectorAll('.sidebar-links a').forEach(function (link) {
    link.addEventListener('click', function () {
      hideSidebar();
    });
  });
});
