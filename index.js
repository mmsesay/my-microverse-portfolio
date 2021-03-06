// index.js
const mobileMenu = document.getElementById('mobile-menu');
const body = document.querySelector('body');
const openButton = document.getElementById('hamburgerButton');
const closeButton = document.getElementById('times');
const popupContainer = document.querySelector('.popup-container');
const projectsContainer = document.querySelector('.grid-container');
const headlineSection = document.querySelector('.headline-section');
const portfolioSection = document.getElementById('portfolio');
const aboutSection = document.getElementById('bout');
const contactSection = document.getElementById('contact');
const closePopupButton = document.getElementById('closePopupIcon');
const windowWidth = window.innerWidth;

// hides elements
const hide = (args) => {
  args.forEach((arg) => {
    arg.style.display = 'none';
  });
};

// show elements
const show = (args) => {
  args.forEach((arg) => {
    arg.style.display = 'flex';
  });
};

// blur elements
const blurElements = (args, state) => {
  args.forEach((element) => {
    if (state) {
      element.style.filter = 'blur(3px)';
    } else {
      element.style.filter = 'blur(0px)';
    }
  });
};

const closeMobileMenu = () => {
  hide([mobileMenu, closeButton]);
  show([openButton]);
  body.style.overflow = 'scroll';
};

const openMobileMenu = () => {
  hide([openButton]);
  show([mobileMenu, closeButton]);
  body.style.overflow = 'hidden';
};

// target all mobile menu options
document.querySelectorAll('.mobileMenuOption').forEach((item) => {
  item.addEventListener('click', closeMobileMenu);
});

// open button event listener
openButton.addEventListener('click', openMobileMenu);

// close button event listener
closeButton.addEventListener('click', closeMobileMenu);

// Projects Dynamic data
const workProjects = [
  {
    title: 'Profesional Art Printing Data',
    summary:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    image: {
      imageUrl: './public/images/img-placeholder-2.png',
      imageAlt: 'Project image',
    },
    technologies: ['html', 'bootstrap', 'Ruby'],
    seeLive: 'https://mmsesay.github.io/my-microverse-portfolio',
    sourceUrl: 'https://github.com/mmsesay/my-microverse-portfolio',
  },
  {
    title: 'Profesional Art Printing Data',
    title_two: 'Data Dashboard Healthcare',
    summary:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    image: {
      imageUrl: './public/images/img-placeholder-2.png',
      imageAlt: 'Project image',
    },
    technologies: ['html', 'bootstrap', 'Ruby'],
    seeLive: 'https://mmsesay.github.io/my-microverse-portfolio',
    sourceUrl: 'https://github.com/mmsesay/my-microverse-portfolio',
  },
  {
    title: 'Profesional Art Printing Data',
    title_two: 'Website Protfolio',
    summary:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    image: {
      imageUrl: './public/images/img-placeholder-2.png',
      imageAlt: 'Project image',
    },
    technologies: ['html', 'bootstrap', 'Ruby'],
    seeLive: 'https://mmsesay.github.io/my-microverse-portfolio',
    sourceUrl: 'https://github.com/mmsesay/my-microverse-portfolio',
  },
  {
    title: 'Profesional Art Printing Data',
    title_two: 'Profesional Art Printing Data',
    summary:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    image: {
      imageUrl: './public/images/img-placeholder-2.png',
      imageAlt: 'Project image',
    },
    technologies: ['html', 'bootstrap', 'Ruby'],
    seeLive: 'https://mmsesay.github.io/my-microverse-portfolio',
    sourceUrl: 'https://github.com/mmsesay/my-microverse-portfolio',
  },
  {
    title: 'Profesional Art Printing Data',
    title_two: 'Data Dashboard Healthcare',
    summary:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    image: {
      imageUrl: './public/images/img-placeholder-2.png',
      imageAlt: 'Project image',
    },
    technologies: ['html', 'bootstrap', 'Ruby'],
    seeLive: 'https://mmsesay.github.io/my-microverse-portfolio',
    sourceUrl: 'https://github.com/mmsesay/my-microverse-portfolio',
  },
  {
    title: 'Profesional Art Printing Data',
    title_two: 'Website Protfolio',
    summary:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    image: {
      imageUrl: './public/images/img-placeholder-2.png',
      imageAlt: 'Project image',
    },
    technologies: ['html', 'bootstrap', 'Ruby'],
    seeLive: 'https://mmsesay.github.io/my-microverse-portfolio',
    sourceUrl: 'https://github.com/mmsesay/my-microverse-portfolio',
  },
];

// variable to hold the injected html projects
let projectHTML = '';

// iterate through the projects
workProjects.forEach((project, index) => {
  projectHTML += `
    <div class="grid-items d-flex grid-item-${(index += 1)}">
      <div class="grid-item-card text-white">`;
  projectHTML += `<div class="grid-item-card-content d-flex ${
    windowWidth >= 992 && index === 1 ? 'hide-on-large' : 'show-on-small'
  }">
          <h2 class="font-crete-round hide-on-large">${project.title}</h2>
          <h2 class="font-crete-round show-on-large hide-on-small">
          ${project.title_two}
          </h2>
          <p class="font-inter">${project.summary}</p>
          <div class="box-container d-flex">
            <ul class="d-flex font-inter list-none">`;
  // iterate through the technologies
  project.technologies.forEach((tech) => {
    projectHTML += `<li class="box">${tech}</li>`;
  });
  projectHTML += `
          </ul>
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

// project container
projectsContainer.innerHTML = projectHTML;

const popupWindow = () => {
  show([popupContainer]);
  // body.style.overflow = 'hidden';
};

const closePopupWindow = () => {
  hide([popupContainer]);
  body.style.overflow = 'scroll';
  blurElements([headlineSection, portfolioSection, aboutSection, contactSection], false);
};

// close the popup modal
closePopupButton.addEventListener('click', closePopupWindow);

// iterate through the items and listen for popupwindow click
document.querySelectorAll('.openPopupWindow').forEach((item) => {
  item.addEventListener('click', () => {
    popupWindow();
    blurElements([headlineSection, portfolioSection, aboutSection, contactSection], true);
  });
});

// Contact Form Validation
const form = document.querySelector('form');
const error = document.querySelector('.error-message');
const email = document.getElementById('email');

form.addEventListener('submit', (e) => {
  if (email.value !== email.value.toLowerCase()) {
    e.preventDefault();
    error.style.display = 'block';
    error.textContent = 'Please use lowercase characters for your email';
    error.style.color = 'red';
    error.style.fontFamily = 'Roboto, sans-serif';
  }
});

// Local storage
const fullName = document.getElementById('name');
const message = document.getElementById('message');

// form event listener for inputs
form.addEventListener('input', () => {
  // form objects
  const formObject = {
    fullNameInput: fullName.value,
    emailInput: email.value,
    messageInput: message.value,
  };

  // setting the form data to the local storage
  localStorage.setItem('formData', JSON.stringify(formObject));
});

// extracting data from local storage
const fetchdata = JSON.parse(localStorage.getItem('formData'));
if (fetchdata) {
  fullName.value = fetchdata.fullNameInput;
  message.value = fetchdata.messageInput;
  email.value = fetchdata.emailInput;
}
