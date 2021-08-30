// index.js

function toggleMobileMenu() {
  // target the element
  let hamburgerButton = document.getElementById('hamburgerButton');
  let mobileMenu = document.getElementById('mobile-menu');
  let times = document.getElementById('times');

  // add event listener
  hamburgerButton.addEventListener('click', function() {
    mobileMenu.style.display = "block";
    hamburgerButton.style.display = "none";
    times.style.display = "block";
  });

  times.addEventListener('click', function() {
    mobileMenu.style.display = "none";
    hamburgerButton.style.display = "block";
    times.style.display = "none";
  })
}
