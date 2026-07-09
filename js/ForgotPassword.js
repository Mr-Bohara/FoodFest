// -- Forgot Password Page

// 2. FORGOT PASSWORD FORM HANDLER
function handleForgotPassword(event) {
  event.preventDefault();

  const emailInput = document.getElementById('resetEmail');
  const email = emailInput.value.trim();
  const submitBtn = document.querySelector('.submit-btn');

  // Validate email
  if (!email) {
    emailInput.classList.add('shake');
    emailInput.style.borderColor = '#EF4444';
    setTimeout(function() {
      emailInput.classList.remove('shake');
      emailInput.style.borderColor = '';
    }, 500);
    emailInput.focus();
    return;
  }

  if (!email.includes('@') || !email.includes('.')) {
    showInlineError('resetEmail', 'Please enter a valid email address.');
    emailInput.classList.add('error');
    setTimeout(function() { emailInput.classList.remove('error'); }, 3000);
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

