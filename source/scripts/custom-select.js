import { breakpointTablet } from './const.js';
const bodyElement = document.querySelector('.page');
const selectElements = bodyElement.querySelectorAll('.custom-select');

const initSelect = (selectElement) => {
  const triggerElement = selectElement.querySelector('.custom-select__trigger');
  const optiomsElement = selectElement.querySelector('.custom-select__options');

  const onSelectClick = () => {
    if (!selectElement.classList.contains('custom-select--expanded')) {
      openSelect();
    } else {
      closeSelect();
    }
  };

  const onOptionClick = (evt) => {
    if (evt.target.closest('.custom-select__option')) {
      triggerElement.textContent = evt.target.closest('.custom-select__option').textContent;
    }
  };

  const onBodyClick = (evt) => {
    if (evt.target.closest('.custom-select')) {
      evt.stopPropagation();
    } else {
      closeSelect();
    }
  };

  const onBodyTouch = (evt) => {
    onBodyClick(evt);
  };

  function openSelect() {
    selectElement.classList.add('custom-select--expanded');
    optiomsElement.addEventListener('click', onOptionClick);
    bodyElement.addEventListener('touchstart', onBodyTouch);
    bodyElement.addEventListener('click', onBodyClick);
  }

  function closeSelect() {
    selectElement.classList.remove('custom-select--expanded');
    optiomsElement.removeEventListener('click', onOptionClick);
    bodyElement.removeEventListener('touchstart', onBodyTouch);
    bodyElement.removeEventListener('click', onBodyClick);
  }

  const breakpointChecker = () => {
    if (breakpointTablet.matches) {
      selectElement.addEventListener('click', onSelectClick);
    } else {
      selectElement.removeEventListener('click', onSelectClick);
    }
  };

  breakpointTablet.addEventListener('change', breakpointChecker);
  breakpointChecker();
};

const initSelects = () => {
  if (selectElements.length) {
    selectElements.forEach((select) => {
      initSelect(select);
    });
  }
};

export {initSelects};
