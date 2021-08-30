// index.js
let mobileMenu = document.getElementById('mobile-menu');
let hamburgerButton = document.getElementById('hamburgerButton');
let times = document.getElementById('times');

document.querySelectorAll('.mobileMenuOption').forEach((item) => {
  item.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
    times.style.display = "none";
  });
});

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
});
