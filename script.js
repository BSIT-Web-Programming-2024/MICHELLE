// Popup on Scroll Animation
const popupElements = document.querySelectorAll('.popup-on-scroll');

function handlePopupScroll() {
  popupElements.forEach(element => {
    const position = element.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    // Check if the element is in the viewport
    if (position < screenHeight && position > 0) {
      element.classList.add('popup-visible');
    } else {
      element.classList.remove('popup-visible');
    }
  });
}

window.addEventListener('scroll', handlePopupScroll);

// Mobile Menu Toggle
const menuButton = document.querySelector('.menu-button');
const navMenu = document.querySelector('.nav-menu');

menuButton.addEventListener('click', () => {
  if (navMenu.classList.contains('show-mobile-menu')) {
    navMenu.classList.remove('show-mobile-menu');
    navMenu.classList.add('hide-mobile-menu');
  } else {
    navMenu.classList.add('show-mobile-menu');
    navMenu.classList.remove('hide-mobile-menu');
  }
});

// Fade In/Out Animation
const fadeElements = document.querySelectorAll('.fade-in-out');

function handleScroll() {
  fadeElements.forEach(element => {
    const position = element.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;
    
    if (position < screenHeight) {
      element.style.opacity = 1;
      element.style.visibility = 'visible';
    } else {
      element.style.opacity = 0;
      element.style.visibility = 'hidden';
    }
  });
}

window.addEventListener('scroll', handleScroll);

// Slide Image Animation
const heroImage = document.querySelector('.hero-image');

function slideImage() {
  heroImage.style.animation = 'slide 1s infinite alternate';
}

window.addEventListener('load', slideImage);

// Hero Title Lightning Animation
const heroTitle = document.querySelector('.title');

function addLightningEffect() {
  heroTitle.style.animation = 'lightning 2s infinite';
}

window.addEventListener('load', addLightningEffect);
