import { breakpointTablet } from './const.js';

const headerTopElement = document.querySelector('.header__wrapper-top');
const userMenuElement = document.querySelector('.user-menu');
const headerBottomElement = document.querySelector('.header__wrapper-bottom');

const breakpointChecker = () => {
  if (breakpointTablet.matches) {
    headerBottomElement.append(userMenuElement);
  } else {
    headerTopElement.append(userMenuElement);
  }
};

const initUserMenuMove = () => {
  breakpointTablet.addEventListener('change', breakpointChecker);
  breakpointChecker();
};

export {initUserMenuMove};
