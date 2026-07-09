// -- Login Page

// 1. Password visibility toggle
function togglePassword() {
  const passwordInput = document.getElementById('loginPassword');
  const toggleIcon = document.getElementById('toggleIcon');
  
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    toggleIcon.className = 'fa-regular fa-eye-slash';
  } else {
    passwordInput.type = 'password';
    toggleIcon.className = 'fa-regular fa-eye';
  }
}

// 2. Login form handler
function handleLogin(event) {
  event.preventDefault();
  
  const email = document.getElementById('loginEmail');
  const password = document.getElementById('loginPassword');
  const loginCard = document.querySelector('.login-card');
  
  // Remove any existing error states
  email.classList.remove('error', 'success');
  password.classList.remove('error', 'success');
  loginCard.classList.remove('shake');
  
  let isValid = true;
  let errorMsg = '';
  
  // Email validation
  if (!email.value.trim()) {
    email.classList.add('error');
    errorMsg = 'Please enter your email address.';
    isValid = false;
  } else if (!email.value.includes('@') || !email.value.includes('.')) {
    email.classList.add('error');
    errorMsg = 'Please enter a valid email address.';
    isValid = false;
  } else {
    email.classList.add('success');
  }
  
  // Password validation
  if (!password.value) {
    password.classList.add('error');
    if (!errorMsg) errorMsg = 'Please enter your password.';
    isValid = false;
  } else if (password.value.length < 6) {
    password.classList.add('error');
    if (!errorMsg) errorMsg = 'Password must be at least 6 characters.';
    isValid = false;
  } else {
    password.classList.add('success');
  }
  
  if (!isValid) {
    // Shake animation on the card
    loginCard.classList.add('shake');
    setTimeout(() => loginCard.classList.remove('shake'), 500);
    return;
  }
  
  // Success - animate the button
  const submitBtn = document.querySelector('.submit-btn');
  const btnText = submitBtn.querySelector('.btn-text');
  const btnIcon = submitBtn.querySelector('.btn-icon');
  
  submitBtn.disabled = true;
  btnText.textContent = 'Signing In...';
  btnIcon.className = 'fa-solid fa-spinner btn-icon fa-spin';
  
  // Simulate sign in delay
  setTimeout(() => {
    showToast('Welcome back! You have been logged in successfully.');
    
    // Reset button state
    submitBtn.disabled = false;
    btnText.textContent = 'Sign In';
    btnIcon.className = 'fa-solid fa-arrow-right btn-icon';
    email.classList.remove('success');
    password.classList.remove('success');
    document.getElementById('loginForm').reset();
  }, 800);
}

// 3. Google sign-in button
document.addEventListener('DOMContentLoaded', function() {
  const googleBtn = document.querySelector('.google-btn');
  if (googleBtn) {
    googleBtn.addEventListener('click', function() {
      // Add a brief loading state
      const originalContent = this.innerHTML;
      this.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i><span>Connecting...</span>';
      this.disabled = true;
      
      setTimeout(() => {
        showToast('Google Sign-In integration coming soon. Please use email login.', 'info');
        this.innerHTML = originalContent;
        this.disabled = false;
      }, 600);
    });
  }
  
  // 4. REAL-TIME INPUT VALIDATION CLEAR
  const emailInput = document.getElementById('loginEmail');
  const passwordInput = document.getElementById('loginPassword');
  
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
      if (this.classList.contains('error') && this.value.length >= 6) {
        this.classList.remove('error');
        this.classList.add('success');
      } else if (this.value.length < 6) {
        this.classList.remove('success');
      }
    });
  }
  
  // 6. ENTER KEY SUPPORT (handled by form submit)
});
