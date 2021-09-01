// index.js
const mobileMenu = document.getElementById('mobile-menu');
const body = document.querySelector('body');
const openButton = document.getElementById('hamburgerButton');
const closeButton = document.getElementById('times');

// hides elements
function hide(args) {
  args.forEach((arg) => {
    arg.style.display = 'none';
  });
}

// show elements
function show(args) {
  args.forEach((arg) => {
    arg.style.display = 'block';
  });
}

function closeMobileMenu() {
  hide([mobileMenu, closeButton]);
  show([openButton]);
  body.style.overflow = 'scroll';
}

function openMobileMenu() {
  hide([openButton]);
  show([mobileMenu, closeButton]);
  body.style.overflow = 'hidden';
}

// target all mobile menu options
document.querySelectorAll('.mobileMenuOption').forEach((item) => {
  item.addEventListener('click', closeMobileMenu);
});

// open button event listener
openButton.addEventListener('click', openMobileMenu);

// close button event listener
closeButton.addEventListener('click', closeMobileMenu);

// Contact Form Validation
const form = document.querySelector('form');
const error = document.querySelector('.error-message');

form.addEventListener('submit', (e) => {
  if (email.value !== email.value.toLowerCase()) {
    e.preventDefault();
    error.style.display = 'block';
    error.textContent = 'Please change your email to lowercase';
  }
});