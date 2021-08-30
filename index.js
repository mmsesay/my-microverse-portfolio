// index.js

function toggleMobileMenu() {
  // target the element
  let hamburgerButton = document.getElementById('hamburgerButton');
  let mobileMenu = document.getElementById('mobile-menu');

  // add event listener
  hamburgerButton.addEventListener('click', function() {
    mobileMenu.style.display = "block";
  });
}
