const animationElements = document.querySelectorAll('.animation');

const onPageScroll = () => {
  if (animationElements.length) {
    animationElements.forEach((item) => {
      const itemRect = item.getBoundingClientRect();
      const itemBottom = itemRect.bottom - (item.offsetHeight / 2);
      const windowHeight = window.innerHeight;

      if (itemBottom < windowHeight && itemBottom > 0) {
        item.classList.add('animation--visible');
      }
    });
  }
};

const initAnimations = () => {
  window.addEventListener('scroll', onPageScroll);
  onPageScroll();
};

export {initAnimations};
