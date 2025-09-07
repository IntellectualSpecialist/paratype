import { breakpointTablet } from './const.js';
const cardGalleryElements = document.querySelectorAll('.font-card__gallery');

const initCardGallery = (gallery) => {
  const galleryItems = gallery.querySelectorAll('.font-card__gallery-item');

  const onGalleryMouseover = (evt) => {
    if (evt.target.closest('.font-card__gallery-item')) {
      galleryItems.forEach((item) => {
        item.classList.remove('font-card__gallery-item--shown');
      });

      evt.target.closest('.font-card__gallery-item').classList.add('font-card__gallery-item--shown');
    }
  };

  const breakpointChecker = () => {
    if (breakpointTablet.matches) {
      gallery.removeEventListener('mouseover', onGalleryMouseover);
    } else {
      gallery.addEventListener('mouseover', onGalleryMouseover);
    }
  };

  breakpointTablet.addEventListener('change', breakpointChecker);
  breakpointChecker();
};

const initCardGalleries = () => {
  if (cardGalleryElements.length) {
    cardGalleryElements.forEach((galleryItem) => {
      initCardGallery(galleryItem);
    });
  }
};

export {initCardGalleries};
