import './theme/styles.scss';
// TODO:  create image/assets folder
import img from './avatar.jpg';
import img2 from './me.jpeg';
import img3 from './laptop.jpg';

let lastScroll = 0;

const header = document.querySelector('header');

var innerHam = document.querySelector('.ham-inner');

var hamContainer = document.querySelector('.ham-wrapper');

var mobileMenu = document.querySelector('.mobile-menu');

var mainContent = document.getElementById('main');

function scrollingHeader() {
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
      header.classList.remove('scroll-up');
      return;
    }
    if (
      currentScroll > lastScroll &&
      !header.classList.contains('scroll-down')
    ) {
      // down
      header.classList.add('scroll-down');
      header.classList.remove('scroll-up');
    } else if (
      currentScroll < lastScroll &&
      header.classList.contains('scroll-down')
    ) {
      // up
      header.classList.add('scroll-up');
      header.classList.remove('scroll-down');
    }
    lastScroll = currentScroll;
  });
}

function animateHamburger() {
  if (!innerHam.classList.contains('transform-after', 'transform-before')) {
    innerHam.classList.add('transform-after');
    innerHam.classList.add('transform-before');
    innerHam.style.backgroundColor = 'transparent';
    mainContent.classList.toggle('blur');
  } else {
    innerHam.classList.remove('transform-after');
    innerHam.classList.remove('transform-before');
    innerHam.style.backgroundColor = '';
    mainContent.classList.toggle('blur');
  }
}

function openCloseMenu() {
  if (!mobileMenu.classList.contains('open')) {
    mobileMenu.classList.toggle('open');
    mobileMenu.classList.remove('close');
  } else {
    mobileMenu.classList.remove('open');
    mobileMenu.classList.toggle('close');
  }
}

hamContainer.addEventListener('click', () => {
  console.log('clickety click');
  animateHamburger();
  openCloseMenu();
});

scrollingHeader();
