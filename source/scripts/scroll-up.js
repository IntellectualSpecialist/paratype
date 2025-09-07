import { breakpointTablet } from './const.js';
const SCROLL_TARGET_VALUE = 200;
const scrollButtonElement = document.querySelector('.button-scroll');

const onPageScroll = () => {
  if (window.pageYOffset > SCROLL_TARGET_VALUE) {
    scrollButtonElement.classList.add('button-scroll--shown');
  } else {
    scrollButtonElement.classList.remove('button-scroll--shown');
  }
};

const onButtonClick = () => {
  window.scrollTo(0, 0);
};

const breakpointChecker = () => {
  if (breakpointTablet.matches) {
    window.removeEventListener('scroll', onPageScroll);
  } else {
    window.addEventListener('scroll', onPageScroll);
  }
};

const initScrollButton = () => {
  if (scrollButtonElement) {
    scrollButtonElement.addEventListener('click', onButtonClick);

    breakpointTablet.addEventListener('change', breakpointChecker);
    breakpointChecker();
  }
};

export {initScrollButton};
