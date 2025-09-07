const viewSwitchElements = document.querySelectorAll('.view-switch');

const initViewSwitcher = (viewSwitch) => {
  const viewSwitcherElement = viewSwitch.querySelector('.view-switcher');
  const viewSwitcherButtonElements = viewSwitch.querySelectorAll('.view-switcher__button');

  const onSwitcherClick = (evt) => {
    if (evt.target.closest('.view-switcher__button')) {
      const currentControl = evt.target.closest('.view-switcher__button');

      viewSwitcherButtonElements.forEach((button) => {
        button.classList.remove('view-switcher__button--active');
      });

      currentControl.classList.add('view-switcher__button--active');
    }
  };

  viewSwitcherElement.addEventListener('click', onSwitcherClick);
};

const initViewSwitchers = () => {

  if (viewSwitchElements.length) {
    viewSwitchElements.forEach((item) => {
      initViewSwitcher(item);
    });
  }
};

export {initViewSwitchers};
