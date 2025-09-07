import { breakpointTablet } from './const.js';
import { isEscapeKey } from './utils';

const bodyElement = document.querySelector('body');
const menuElement = document.querySelector('.header__menu');
const navBurgerElement = document.querySelector('.burger');

const openMenu = () => {
  menuElement.classList.add('header__menu--shown');
  navBurgerElement.classList.add('burger--active');
  document.addEventListener('keydown', onDocumentKeydown);
  bodyElement.classList.add('page__body--scroll-lock');
};

const closeMenu = () => {
  navBurgerElement.classList.remove('burger--active');
  document.removeEventListener('keydown', onDocumentKeydown);
  menuElement.classList.remove('header__menu--shown');
  bodyElement.classList.remove('page__body--scroll-lock');
};

const onNavBurgerClick = (evt) => {
  evt.preventDefault();

  if (menuElement.classList.contains('header__menu--shown')) {
    closeMenu();
  } else {
    openMenu();
  }
};

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeMenu();
  }
}

const breakpointChecker = () => {
  if (breakpointTablet.matches) {
    navBurgerElement.addEventListener('click', onNavBurgerClick);
  } else {
    if (menuElement.classList.contains('header__menu--shown')) {
      closeMenu();
    }
  }
};

const initNavBurger = () => {
  if (navBurgerElement) {
    breakpointTablet.addEventListener('change', breakpointChecker);
    breakpointChecker();
  }
};

export {initNavBurger};
