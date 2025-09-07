const themeSwitcherElement = document.querySelector('.theme-switcher');
let themeSwitcherControlElements;

if (themeSwitcherElement) {
  themeSwitcherControlElements = themeSwitcherElement.querySelectorAll('.theme-switcher__control');
}

const onSwitcherClick = (evt) => {
  if (evt.target.closest('.theme-switcher__control')) {
    const currentControl = evt.target.closest('.theme-switcher__control');

    themeSwitcherControlElements.forEach((control) => {
      control.classList.remove('theme-switcher__control--active');
    });

    currentControl.classList.add('theme-switcher__control--active');
  }
};

const initThemeSwitcher = () => {
  if (themeSwitcherElement) {
    themeSwitcherElement.addEventListener('click', onSwitcherClick);
  }
};

export {initThemeSwitcher};
