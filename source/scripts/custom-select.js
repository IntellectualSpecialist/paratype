import { breakpointTablet } from './const.js';
const selectElements = document.querySelectorAll('.custom-select');

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

  function openSelect() {
    selectElement.classList.add('custom-select--expanded');
    optiomsElement.addEventListener('click', onOptionClick);
  }

  function closeSelect() {
    selectElement.classList.remove('custom-select--expanded');
    optiomsElement.removeEventListener('click', onOptionClick);
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
