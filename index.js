// index.js
const mobileMenu = document.getElementById('mobile-menu');
const body = document.querySelector('body');
const openButton = document.getElementById('hamburgerButton');
const closeButton = document.getElementById('times');
const popupContainer = document.querySelector('.popup-container');
const openPopupBtn = document.getElementById('openPopupWindow');

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

function openPopupWindow() {
  show([popupContainer]);
  // body.style.overflow = 'hidden';
}

// target all mobile menu options
document.querySelectorAll('.mobileMenuOption').forEach((item) => {
  item.addEventListener('click', closeMobileMenu);
});

// target all buttons of projects
document.querySelectorAll('.openPopupWindow').forEach((item) => {
  item.addEventListener('click', openPopupWindow);
});

// open button event listener
openButton.addEventListener('click', openMobileMenu);

// close button event listener
closeButton.addEventListener('click', closeMobileMenu);
