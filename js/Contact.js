// ==========================================
// CONTACT PAGE - INTERACTIVE FEATURES
// ==========================================

function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  const hamburger = document.getElementById('hamburgerBtn');
  if (navLinks) navLinks.classList.toggle('open');
  if (hamburger) hamburger.classList.toggle('active');
}

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

  // 1. FORM CATEGORY DROPDOWN TOGGLE
  const dropdown = document.getElementById('inquiryDropdown');
  if (!dropdown) return;

  const trigger = dropdown.querySelector('.dropdown-trigger');
  const menu = dropdown.querySelector('.dropdown-menu');
  const arrow = trigger.querySelector('i');
  const textContainer = document.getElementById('selectedCategory');

  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    const isShown = menu.classList.toggle('show');
    arrow.classList.toggle('rotate-arrow', isShown);
  });

  dropdown.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', (e) => {
      textContainer.textContent = e.target.textContent;
      menu.classList.remove('show');
      arrow.classList.remove('rotate-arrow');
    });
  });

  document.addEventListener('click', () => {
    menu.classList.remove('show');
    arrow.classList.remove('rotate-arrow');
  });

  // 2. FAQ ACCORDION EXPAND/COLLAPSE LOGIC
  const accordions = document.querySelectorAll('.accordion-header');

  accordions.forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      const icon = header.querySelector('i');
      
      if (content.style.maxHeight && content.style.maxHeight !== '0px') {
        content.style.maxHeight = '0px';
        icon.classList.remove('rotate-arrow');
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        icon.classList.add('rotate-arrow');
      }
    });
  });
});

// 3. FORM SUBMIT HANDLER
function handleSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  
  if (!email.includes('@') || !email.includes('.')) {
    alert('Please enter a valid email address.');
    return;
  }
  
  alert(`Thank you, ${name}! Your message has been submitted successfully. Our team will get back to you shortly.`);
  document.getElementById('contactForm').reset();
}