import './theme/styles.scss';
// TODO:  create image/assets folder
import img from './avatar.jpg';

var innerHam = document.querySelector('.ham-inner');

var hamContainer = document.querySelector('.ham-wrapper');

var mobileMenu = document.querySelector('.mobile-menu');

function animateHamburger() {
  if (!innerHam.classList.contains('transform-after', 'transform-before')) {
    innerHam.classList.add('transform-after');
    innerHam.classList.add('transform-before');
    innerHam.style.backgroundColor = 'transparent';
  } else {
    innerHam.classList.remove('transform-after');
    innerHam.classList.remove('transform-before');
    innerHam.style.backgroundColor = '';
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
