const tabsElements = document.querySelectorAll('.tabs');

const initTabs = (tabsElement) => {
  let currentTab = 0;
  const tabButtonsListElement = tabsElement.querySelector('.tabs__list');
  const tabButtonsElements = Array.from(tabButtonsListElement.querySelectorAll('.tabs__button'));

  const updateActiveButton = () => {
    tabButtonsElements.forEach((button) => {
      button.classList.remove('button-invert--active');
    });
    tabButtonsElements[currentTab].classList.add('button-invert--active');
  };

  const onTabButtonClick = (evt) => {
    if (evt.target.closest('.tabs__button')) {
      currentTab = Number(evt.target.closest('.tabs__button').dataset.id);
      updateActiveButton();
    }
  };

  updateActiveButton();
  tabButtonsListElement.addEventListener('click', onTabButtonClick);
};

const initAllTabs = () => {
  if (tabsElements.length) {
    tabsElements.forEach((tabs) => {
      initTabs(tabs);
    });
  }
};

export {initAllTabs};
