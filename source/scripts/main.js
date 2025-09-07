import {initUserMenuMove} from './move-user-menu';
import {initNavBurger} from './burger';
import {initThemeSwitcher} from './theme-switcher';
import {initScrollButton} from './scroll-up';
import {initSliders} from './slider';
import {initAllTabs} from './tabs';
import {initCardGalleries} from './font-card-gallery';
import {initViewSwitchers} from './view-switcher';
import {initSelects} from './custom-select';
import {initAllFontCards} from './font-cards';
import {initFormsValidate} from './validate-form';
import {initChangeActiveLink} from './change-active-link';

window.addEventListener('DOMContentLoaded', () => {
  initUserMenuMove();
  initChangeActiveLink();
  initNavBurger();
  initThemeSwitcher();
  initScrollButton();
  initSliders();
  initAllTabs();
  initCardGalleries();
  initViewSwitchers();
  initSelects();
  initAllFontCards();
  initFormsValidate();
});
