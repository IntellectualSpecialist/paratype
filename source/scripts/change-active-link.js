import { breakpointTablet } from './const.js';
const TARGET_INDEX = 2;
const navLinksElements = Array.from(document.querySelectorAll('.site-list__link'));
const targetLinkElement = navLinksElements[TARGET_INDEX];

const breakpointChecker = () => {
  if (breakpointTablet.matches) {
    targetLinkElement.classList.add('button-invert--active');
  } else {
    targetLinkElement.classList.remove('button-invert--active');
  }
};

const initChangeActiveLink = () => {
  breakpointTablet.addEventListener('change', breakpointChecker);
  breakpointChecker();
};

export {initChangeActiveLink};
