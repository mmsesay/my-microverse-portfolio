// index.js
let mobileMenu = document.getElementById('mobile-menu');
let body = document.querySelector('body');
let openButton = document.getElementById('hamburgerButton');
let closeButton = document.getElementById('times');

// hides elements
function hide(args) {
  args.forEach((arg) => {
    arg.style.display = "none";
  })
}

// show elements
function show(args) {
  args.forEach((arg) => {
    arg.style.display = "block";
  })
}

function closeMobileMenu() {
  hide([mobileMenu, closeButton]);
  show([openButton]);
  toggleScroll(false); // makes the body to scroll
}

function openMobileMenu() {
  hide([openButton]);
  show([mobileMenu, closeButton]);
  toggleScroll(true); // makes the body non-scrollable
}

// toggle body scrolling
function toggleScroll(state) {
  // param state: is a boolean
  state? `${body.style.overflow = 'hidden'}`: `${body.style.overflow = 'scroll'}`;
}

// target all mobile menu options
document.querySelectorAll('.mobileMenuOption').forEach((item) => {
  item.addEventListener('click', closeMobileMenu());
});

// open button event listener
openButton.addEventListener('click', openMobileMenu);

// close button event listener
closeButton.addEventListener('click', closeMobileMenu);
