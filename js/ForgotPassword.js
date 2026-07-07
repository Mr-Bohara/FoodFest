// ==========================================
// FORGOT PASSWORD PAGE - INTERACTIVE FEATURES
// ==========================================

// 1. MOBILE HAMBURGER TOGGLE
function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  const hamburger = document.getElementById('hamburgerBtn');
  if (navLinks) navLinks.classList.toggle('open');
  if (hamburger) hamburger.classList.toggle('active');
}

// 2. FORGOT PASSWORD FORM HANDLER
function handleForgotPassword(event) {
  event.preventDefault();

  const emailInput = document.getElementById('resetEmail');
  const email = emailInput.value.trim();
  const submitBtn = document.querySelector('.submit-btn');

  // Validate email
  if (!email) {
    shakeElement(emailInput);
    emailInput.focus();
    return;
  }

  if (!email.includes('@') || !email.includes('.')) {
    showError(emailInput, 'Please enter a valid email address.');
    return;
  }

  // Disable button and show loading state
  submitBtn.disabled = true;
  submitBtn.textContent = 'SENDING...';

  // Simulate API call
  setTimeout(function() {
    // Hide the form card, show success card
    document.querySelector('.forgot-card:not(.success-card)').style.display = 'none';
    document.getElementById('sentEmail').textContent = email;
    document.getElementById('successCard').style.display = 'block';

    // Re-enable button (though it's hidden now)
    submitBtn.disabled = false;
    submitBtn.textContent = 'SEND RESET LINK';
  }, 1500);
}

// 3. ERROR DISPLAY
function showError(inputElement, message) {
  // Remove any existing error
  const existingError = inputElement.parentElement.querySelector('.error-message');
  if (existingError) existingError.remove();

  // Add error styling
  inputElement.style.borderColor = '#EF4444';
  inputElement.style.boxShadow = '0 0 0 3px rgba(239,68,68,0.2)';

  // Create error message
  const errorMsg = document.createElement('p');
  errorMsg.className = 'error-message';
  errorMsg.textContent = message;
  errorMsg.style.cssText = 'color: #EF4444; font-size: 12px; margin-top: 6px; font-weight: 500;';
  inputElement.parentElement.appendChild(errorMsg);

  // Remove error after 3 seconds
  setTimeout(function() {
    errorMsg.remove();
    inputElement.style.borderColor = '';
    inputElement.style.boxShadow = '';
  }, 3000);
}

// 4. SHAKE ANIMATION FOR INVALID INPUT
function shakeElement(element) {
  element.style.animation = 'shake 0.4s ease';
  element.style.borderColor = '#EF4444';
  setTimeout(function() {
    element.style.animation = '';
    element.style.borderColor = '';
  }, 500);
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
});
