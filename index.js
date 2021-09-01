// index.js
const mobileMenu = document.getElementById('mobile-menu');
const body = document.querySelector('body');
const openButton = document.getElementById('hamburgerButton');
const closeButton = document.getElementById('times');
const popupContainer = document.querySelector('.popup-container');
const projectsContainer = document.querySelector('.grid-container');
const closePopupIcon = document.getElementById('closePopupIcon');

// hides elements
function hide(args) {
  args.forEach((arg) => {
    arg.style.display = 'none';
  });
}

// show elements
function show(args) {
  args.forEach((arg) => {
    arg.style.display = 'flex';
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

function popupWindow() {
  show([popupContainer]);
  body.style.overflow = 'hidden';
}

function closePopupWindow() {
  hide([popupContainer]);
  body.style.overflow = 'scroll';
}

// target all mobile menu options
document.querySelectorAll('.mobileMenuOption').forEach((item) => {
  item.addEventListener('click', closeMobileMenu);
});

// open button event listener
openButton.addEventListener('click', openMobileMenu);

// close button event listener
closeButton.addEventListener('click', closeMobileMenu);

closePopupIcon.addEventListener('click', closePopupWindow);

// Projects Dynamic data
const workProjects = [
  {
    title: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    image: {
      imageUrl: './img/wesing.png',
      imageAlt: 'Mobile Snapshot',
    },
    technologies: ['html', 'bootstrap', 'Ruby'],
    seeLive: 'https://mmsesay.github.io/my-microverse-portfolio/',
    sourceUrl: 'https://github.com/mmsesay/my-microverse-portfolio',
  },
  {
    title: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    image: {
      imageUrl: './img/todo.png',
      imageAlt: 'ToDo List',
    },
    technologies: ['html', 'bootstrap', 'Ruby'],
    seeLive: 'https://mmsesay.github.io/my-microverse-portfolio/',
    sourceUrl: 'https://github.com/mmsesay/my-microverse-portfolio',
  },
  {
    title: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    image: {
      imageUrl: './img/todo.png',
      imageAlt: 'ToDo List',
    },
    technologies: ['html', 'bootstrap', 'Ruby'],
    seeLive: 'https://mmsesay.github.io/my-microverse-portfolio/',
    sourceUrl: 'https://github.com/mmsesay/my-microverse-portfolio',
  },
  {
    title: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    image: {
      imageUrl: './img/todo.png',
      imageAlt: 'ToDo List',
    },
    technologies: ['html', 'bootstrap', 'Ruby'],
    seeLive: 'https://mmsesay.github.io/my-microverse-portfolio/',
    sourceUrl: 'https://github.com/mmsesay/my-microverse-portfolio',
  },
  {
    title: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    image: {
      imageUrl: './img/todo.png',
      imageAlt: 'ToDo List',
    },
    technologies: ['html', 'bootstrap', 'Ruby'],
    seeLive: 'https://mmsesay.github.io/my-microverse-portfolio/',
    sourceUrl: 'https://github.com/mmsesay/my-microverse-portfolio',
  },
  {
    title: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    image: {
      imageUrl: './img/todo.png',
      imageAlt: 'ToDo List',
    },
    technologies: ['html', 'bootstrap', 'Ruby'],
    seeLive: 'https://mmsesay.github.io/my-microverse-portfolio/',
    sourceUrl: 'https://github.com/mmsesay/my-microverse-portfolio',
  },
];

// variable to hold the injected html projects
let projectHTML = '';

// iterate through the projects
workProjects.forEach((project) => {
  projectHTML += `
    <div class="grid-items d-flex grid-item-1">
      <div class="grid-item-card text-white">
        <div class="grid-item-card-content d-flex show-on-small">
          <h2 class="font-crete-round">${project.title}</h2>
          <p class="font-inter">${project.description}</p>
          <div class="box-container d-flex">
            <ul class="d-flex font-inter list-none">`;
  project.technologies.forEach((tech) => {
    projectHTML += `<li class="box">${tech}</li>`;
  });
  projectHTML += `</ul>
          </div>
        </div>
        <div class="button-container openPopupWindow">
          <a
          class="font-inter text-white no-underline primary-button primary-color btn"
          rel="noopener noreferrer"
          >See Project</a>
        </div>
      </div>
    </div>`;
});

// hide-on-large
projectsContainer.innerHTML = projectHTML;

// iterate through the items and listen for popupwindow click
document.querySelectorAll('.openPopupWindow').forEach((item) => {
  item.addEventListener('click', popupWindow);
});
