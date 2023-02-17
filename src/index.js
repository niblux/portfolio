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

(function () {
  'use strict';

  /**
   * tabs
   *
   * @description The Tabs component.
   * @param {Object} options The options hash
   */
  var tabs = function (options) {
    var el = document.querySelector(options.el);
    var tabNavigationLinks = el.querySelectorAll(options.tabNavigationLinks);
    var tabContentContainers = el.querySelectorAll(
      options.tabContentContainers
    );
    var activeIndex = 0;
    var initCalled = false;

    /**
     * init
     *
     * @description Initializes the component by removing the no-js class from
     *   the component, and attaching event listeners to each of the nav items.
     *   Returns nothing.
     */
    var init = function () {
      if (!initCalled) {
        initCalled = true;
        el.classList.remove('no-js');

        for (var i = 0; i < tabNavigationLinks.length; i++) {
          var link = tabNavigationLinks[i];
          handleClick(link, i);
        }
      }
    };

    /**
     * handleClick
     *
     * @description Handles click event listeners on each of the links in the
     *   tab navigation. Returns nothing.
     * @param {HTMLElement} link The link to listen for events on
     * @param {Number} index The index of that link
     */
    var handleClick = function (link, index) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        goToTab(index);
      });
    };

    /**
     * goToTab
     *
     * @description Goes to a specific tab based on index. Returns nothing.
     * @param {Number} index The index of the tab to go to
     */
    var goToTab = function (index) {
      if (
        index !== activeIndex &&
        index >= 0 &&
        index <= tabNavigationLinks.length
      ) {
        tabNavigationLinks[activeIndex].classList.remove('is-active');
        tabNavigationLinks[index].classList.add('is-active');
        tabContentContainers[activeIndex].classList.remove('is-active');
        tabContentContainers[index].classList.add('is-active');
        activeIndex = index;
      }
    };

    /**
     * Returns init and goToTab
     */
    return {
      init: init,
      goToTab: goToTab,
    };
  };

  /**
   * Attach to global namespace
   */
  window.tabs = tabs;
})();

var myTabs = tabs({
  el: '#tabs',
  tabNavigationLinks: '.c-tabs-nav__link',
  tabContentContainers: '.c-tab',
});

myTabs.init();
