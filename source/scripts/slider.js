import { breakpointTablet } from './const.js';
const DRAG_THRESHOLD = 50;
const sliders = document.querySelectorAll('.slider');

const initSlider = (sliderElement) => {
  let currentSlide = 0;
  let startX = 0;
  let currentX = 0;
  let isDragging = false;

  const sliderWrapperElement = sliderElement.querySelector('.slider__wrapper');
  const paginationElement = sliderElement.querySelector('.slider__pagination');
  const slides = sliderWrapperElement.querySelectorAll('.slider__slide');
  const totalSlides = slides.length;

  const startDrag = (evt) => {
    if (evt.type === 'touchstart' && !evt.target.closest('.slider__pagination-button')) {
      evt.preventDefault();
    }

    isDragging = true;

    startX = evt.type.includes('mouse') ? evt.pageX : evt.touches[0].pageX;

    sliderWrapperElement.style.transition = 'none';
  };

  const drag = (evt) => {
    if (!isDragging) {
      return;
    }

    currentX = evt.type.includes('mouse') ? evt.pageX : evt.touches[0].pageX;

    const offsetX = currentX - startX;

    if (currentSlide === 0 && offsetX > 0) {
      sliderWrapperElement.style.transform = `translateX(${offsetX * 0.3}px)`;
    } else if (currentSlide === totalSlides - 1 && offsetX < 0) {
      sliderWrapperElement.style.transform = `translateX(calc(${-currentSlide * 100}% + ${offsetX * 0.3}px))`;
    } else {
      sliderWrapperElement.style.transform = `translateX(calc(${-currentSlide * 100}% + ${offsetX}px))`;
    }
  };

  const goToSlide = (index) => {
    if (index < 0) {
      index = 0;
    } else if (index >= totalSlides) {
      index = totalSlides - 1;
    }

    currentSlide = index;

    sliderWrapperElement.style.transform = `translateX(-${currentSlide * 100}%)`;

    paginationElement.querySelectorAll('.slider__pagination-button').forEach((item, i) => {
      item.classList.toggle('slider__pagination-button--active', i === currentSlide);
    });
  };

  const endDrag = (evt) => {
    if (!isDragging) {
      return;
    }
    isDragging = false;

    sliderWrapperElement.style.transition = 'transform 0.3s ease';

    const endX = evt.type.includes('mouse') ? evt.pageX : evt.changedTouches[0].pageX;
    const diffX = endX - startX;

    if (Math.abs(diffX) > DRAG_THRESHOLD) {
      if (diffX > 0 && currentSlide > 0) {
        goToSlide(currentSlide - 1);
      } else if (diffX < 0 && currentSlide < totalSlides - 1) {
        goToSlide(currentSlide + 1);
      } else {
        goToSlide(currentSlide);
      }
    } else {
      goToSlide(currentSlide);
    }
  };

  paginationElement.innerHTML = '';

  slides.forEach((_, index) => {
    const paginationItemElement = document.createElement('li');
    paginationItemElement.classList.add('slider__pagination-item');

    const paginationButtonElement = document.createElement('button');
    paginationButtonElement.classList.add('slider__pagination-button');
    paginationButtonElement.setAttribute('type', 'button');
    paginationItemElement.appendChild(paginationButtonElement);

    if (index === 0) {
      paginationButtonElement.classList.add('slider__pagination-button--active');
    }

    paginationButtonElement.addEventListener('click', (evt) => {
      evt.preventDefault();
      goToSlide(index);
    });
    paginationElement.appendChild(paginationItemElement);
  });

  const onSliderMouseleave = (evt) => {
    endDrag(evt);
  };

  const onSliderTouchstart = (evt) => {
    startDrag(evt);
  };

  const onSliderTouchmove = (evt) => {
    drag(evt);
  };

  const onSliderTouchend = (evt) => {
    endDrag(evt);
  };

  const startSlider = () => {
    sliderWrapperElement.style.transform = 'translateX(0%)';

    sliderElement.addEventListener('mousedown', startDrag);
    sliderElement.addEventListener('mousemove', drag);
    sliderElement.addEventListener('mouseup', endDrag);
    sliderElement.addEventListener('mouseleave', onSliderMouseleave);

    sliderElement.addEventListener('touchstart', onSliderTouchstart, { passive: false });
    sliderElement.addEventListener('touchmove', onSliderTouchmove, { passive: false });
    sliderElement.addEventListener('touchend', onSliderTouchend);
  };

  const destroySlider = () => {
    sliderWrapperElement.removeAttribute('style');

    sliderElement.removeEventListener('mousedown', startDrag);
    sliderElement.removeEventListener('mousemove', drag);
    sliderElement.removeEventListener('mouseup', endDrag);
    sliderElement.removeEventListener('mouseleave', endDrag);

    sliderElement.removeEventListener('touchstart', startDrag, { passive: false });
    sliderElement.removeEventListener('touchmove', drag, { passive: false });
    sliderElement.removeEventListener('touchend', endDrag);
  };


  const breakpointChecker = () => {
    if (breakpointTablet.matches) {
      startSlider();
    } else {
      destroySlider();
    }
  };

  breakpointTablet.addEventListener('change', breakpointChecker);
  breakpointChecker();
};

const initSliders = () => {
  if (sliders.length) {
    sliders.forEach((slider) => {
      initSlider(slider);
    });
  }
};

export {initSliders};
