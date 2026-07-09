// -- Sign Up Page

// 1. Password visibility toggle
function toggleSignupPassword(fieldId, iconId) {
  const passwordInput = document.getElementById(fieldId);
  const toggleIcon = document.getElementById(iconId);
  
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    toggleIcon.className = 'fa-regular fa-eye-slash';
  } else {
    passwordInput.type = 'password';
    toggleIcon.className = 'fa-regular fa-eye';
  }
}

// 2. Sign up form handler
function handleSignup(event) {
  event.preventDefault();
  
  const fullName = document.getElementById('signupName');
  const email = document.getElementById('signupEmail');
  const password = document.getElementById('signupPassword');
  const confirmPassword = document.getElementById('signupConfirm');
  const termsCheck = document.getElementById('termsCheck');
  const signupCard = document.querySelector('.signup-card');
  
  // Remove existing error states
  [fullName, email, password, confirmPassword].forEach(el => {
    el.classList.remove('error', 'success');
  });
  signupCard.classList.remove('signup-shake');
  
  // Remove any existing inline errors
  document.querySelectorAll('.signup-inline-error').forEach(el => el.remove());
  
  let isValid = true;
  let firstError = null;
  
  // Full Name validation
  if (!fullName.value.trim()) {
    showSignupError(fullName, 'Please enter your full name.');
    isValid = false;
    if (!firstError) firstError = fullName;
  } else if (fullName.value.trim().length < 2) {
    showSignupError(fullName, 'Name must be at least 2 characters.');
    isValid = false;
    if (!firstError) firstError = fullName;
  } else {
    fullName.classList.add('success');
  }
  
  // Email validation
  if (!email.value.trim()) {
    showSignupError(email, 'Please enter your email address.');
    isValid = false;
    if (!firstError) firstError = email;
  } else if (!email.value.includes('@') || !email.value.includes('.')) {
    showSignupError(email, 'Please enter a valid email address.');
    isValid = false;
    if (!firstError) firstError = email;
  } else {
    email.classList.add('success');
  }
  
  // Password validation
  if (!password.value) {
    showSignupError(password, 'Please enter a password.');
    isValid = false;
    if (!firstError) firstError = password;
  } else if (password.value.length < 8) {
    showSignupError(password, 'Password must be at least 8 characters.');
    isValid = false;
    if (!firstError) firstError = password;
  } else {
    password.classList.add('success');
  }
  
  // Confirm password validation
  if (!confirmPassword.value) {
    showSignupError(confirmPassword, 'Please confirm your password.');
    isValid = false;
    if (!firstError) firstError = confirmPassword;
  } else if (confirmPassword.value !== password.value) {
    showSignupError(confirmPassword, 'Passwords do not match.');
    isValid = false;
    if (!firstError) firstError = confirmPassword;
  } else if (password.classList.contains('success')) {
    confirmPassword.classList.add('success');
  }
  
  // Terms checkbox validation
  if (!termsCheck.checked) {
    if (!firstError) firstError = termsCheck;
    isValid = false;
    // Highlight terms with a message
    const termsLabel = document.querySelector('.signup-terms');
    const existingMsg = termsLabel.querySelector('.signup-inline-error');
    if (!existingMsg) {
      const msg = document.createElement('p');
      msg.className = 'signup-inline-error';
      msg.textContent = 'Please agree to the Terms of Service.';
      msg.style.cssText = 'color: #EF4444; font-size: 12px; margin-top: 2px; font-weight: 500;';
      termsLabel.appendChild(msg);
      setTimeout(function() { msg.remove(); }, 3000);
    }
  }
  
  if (!isValid) {
    signupCard.classList.add('signup-shake');
    setTimeout(function() { signupCard.classList.remove('signup-shake'); }, 500);
    if (firstError) firstError.focus();
    return;
  }
  
  // Success - animate the button
  const submitBtn = document.querySelector('.signup-submit-btn');
  const btnText = submitBtn.querySelector('.signup-btn-text');
  const btnIcon = submitBtn.querySelector('.signup-btn-icon');
  
  submitBtn.disabled = true;
  btnText.textContent = 'Creating Account...';
  btnIcon.className = 'fa-solid fa-spinner signup-btn-icon fa-spin';
  
  // Simulate registration delay
  setTimeout(function() {
    showToast('Account created successfully! Welcome to FoodFest.');
    
    // Reset form and button
    submitBtn.disabled = false;
    btnText.textContent = 'Create Account';
    btnIcon.className = 'fa-solid fa-user-plus signup-btn-icon';
    [fullName, email, password, confirmPassword].forEach(el => {
      el.classList.remove('success');
    });
    document.getElementById('signupForm').reset();
    termsCheck.checked = false;
  }, 1200);
}

// 3. Inline error display
function showSignupError(inputElement, message) {
  inputElement.classList.add('error');
  
  // Remove any existing error for this field
  const existingError = inputElement.parentElement.querySelector('.signup-inline-error');
  if (existingError) existingError.remove();
  
  // Create error message
  const errorMsg = document.createElement('p');
  errorMsg.className = 'signup-inline-error';
  errorMsg.textContent = message;
  errorMsg.style.cssText = 'color: #EF4444; font-size: 12px; margin-top: 6px; font-weight: 500;';
  inputElement.parentElement.appendChild(errorMsg);
  
  // Remove error after 3 seconds
  setTimeout(function() {
    errorMsg.remove();
    inputElement.classList.remove('error');
  }, 3000);
}

// 4. Google sign-up & real-time validation
document.addEventListener('DOMContentLoaded', function() {
  // Google button handler
  const googleBtn = document.getElementById('signupGoogleBtn');
  if (googleBtn) {
    googleBtn.addEventListener('click', function() {
      const originalContent = this.innerHTML;
      this.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i><span>Connecting...</span>';
      this.disabled = true;
      
      setTimeout(function() {
        showToast('Google Sign-Up integration coming soon. Please use email sign up.', 'info');
        googleBtn.innerHTML = originalContent;
        googleBtn.disabled = false;
      }, 600);
    });
  }
  
  // 5. Real-time input validation
  const nameInput = document.getElementById('signupName');
  const emailInput = document.getElementById('signupEmail');
  const passwordInput = document.getElementById('signupPassword');
  const confirmInput = document.getElementById('signupConfirm');
  
  if (nameInput) {
    nameInput.addEventListener('input', function() {
      if (this.classList.contains('error') && this.value.trim().length >= 2) {
        this.classList.remove('error');
        this.classList.add('success');
      } else if (this.value.trim().length < 2) {
        this.classList.remove('success');
      }
    });
  }
  
  if (emailInput) {
    emailInput.addEventListener('input', function() {
      if (this.classList.contains('error')) {
        if (this.value.includes('@') && this.value.includes('.')) {
          this.classList.remove('error');
          this.classList.add('success');
        } else {
          this.classList.remove('success');
        }
      }
    });
  }
  
  if (passwordInput) {
    passwordInput.addEventListener('input', function() {
      if (this.classList.contains('error') && this.value.length >= 8) {
        this.classList.remove('error');
        this.classList.add('success');
      } else if (this.value.length < 8) {
        this.classList.remove('success');
      }
      
      // Real-time confirm match check
      if (confirmInput && confirmInput.value && this.value !== confirmInput.value) {
        confirmInput.classList.remove('success');
        confirmInput.classList.add('error');
      } else if (confirmInput && confirmInput.value && this.value === confirmInput.value) {
        confirmInput.classList.remove('error');
        confirmInput.classList.add('success');
      }
    });
  }
  
  if (confirmInput) {
    confirmInput.addEventListener('input', function() {
      if (this.value && passwordInput && this.value === passwordInput.value) {
        this.classList.remove('error');
        this.classList.add('success');
      } else if (this.value && passwordInput && this.value !== passwordInput.value) {
        this.classList.remove('success');
        this.classList.add('error');
      } else {
        this.classList.remove('success', 'error');
      }
    });
  }
});
