import { breakpointTablet } from './const.js';
const fontCardsElements = document.querySelectorAll('.fonts__list');

const initFontCards = (fontCards) => {
  const cardsElements = Array.from(fontCards.querySelectorAll('.font-card'));

  const changeOpenCard = () => {
    cardsElements[0].querySelector('.font-info').classList.remove('font-info--expanded');

    cardsElements[2].querySelector('.font-info').classList.add('font-info--expanded');
  };

  const changeOpenCardBack = () => {
    cardsElements[0].querySelector('.font-info').classList.add('font-info--expanded');

    cardsElements[2].querySelector('.font-info').classList.remove('font-info--expanded');
  };

  const onCardClick = (evt) => {
    if (evt.target.closest('.font-card__more')) {
      const currentCardElement = evt.target.closest('.font-card');
      const currentInfoElement = currentCardElement.querySelector('.font-info');
      const currenButtonElement = evt.target.closest('.font-card__more');

      currentInfoElement.classList.toggle('font-info--expanded');
      currenButtonElement.classList.toggle('button-more--active');
    }
  };

  const breakpointChecker = () => {
    if (breakpointTablet.matches) {
      changeOpenCard();
      fontCards.addEventListener('click', onCardClick);

    } else {
      changeOpenCardBack();
      fontCards.removeEventListener('click', onCardClick);
    }
  };

  breakpointTablet.addEventListener('change', breakpointChecker);
  breakpointChecker();
};

const initAllFontCards = () => {
  if (fontCardsElements.length) {
    fontCardsElements.forEach((fontCards) => {
      initFontCards(fontCards);
    });
  }
};

export {initAllFontCards};
