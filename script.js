function checkPasswordStrength() {
    const password = document.getElementById('password').value;
    let strength = 0;
    let message = "";
  
    // Check password length
    if (password.length >= 8) {
      strength += 1;
    } else {
      message += "- Password must be at least 8 characters long.\n";
    }
  
    // Check for lowercase letters
    if (/[a-z]/.test(password)) {
      strength += 1;
    } else {
      message += "- Password must contain lowercase letters (a-z).\n";
    }
  
    // Check for uppercase letters
    if (/[A-Z]/.test(password)) {
      strength += 1;
    } else {
      message += "- Password must contain uppercase letters (A-Z).\n";
    }
  
    // Check for numbers
    if (/[0-9]/.test(password)) {
      strength += 1;
    } else {
      message += "- Password must contain numbers (0-9).\n";
    }
  
    // Check for special characters
    if (/[!@#$%^&*()]/.test(password)) {
      strength += 1;
    } else {
      message += "- Password must contain special characters (!@#$%^&*()).\n";
    }
  
    // Determine strength level based on score
    switch (strength) {
      case 0:
      case 1:
        message = "Weak password. Please consider using a stronger password.";
        break;
      case 2:
      case 3:
        message = "Medium strength password. Consider adding more complexity.";
        break;
      case 4:
      case 5:
        message = "Strong password.";
        break;
    }
  
    // Update the message paragraph
    const messageElement = document.getElementById('strength-message');
    messageElement.textContent = message;
  
    // Optional: Apply visual cues based on strength (using CSS classes)
    const passwordInput = document.getElementById('password');
    passwordInput.classList.remove('weak', 'medium', 'strong');
    switch (strength) {
      case 0:
      case 1:
        passwordInput.classList.add('weak');
        break;
      case 2:
      case 3:
        passwordInput.classList.add('medium');
        break;
      case 4:
      case 5:
        passwordInput.classList.add('strong');
        break;
    }
  }
  const aboutBtn = document.getElementById('about-btn');
const servicesBtn = document.getElementById('services-btn');
const aboutSection = document.getElementById('about');
const servicesSection = document.getElementById('services');

aboutBtn.addEventListener('click', () => {
  aboutSection.classList.toggle('hidden');
});

servicesBtn.addEventListener('click', () => {
  servicesSection.classList.toggle('hidden');
});
