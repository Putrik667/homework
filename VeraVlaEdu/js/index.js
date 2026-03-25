import BurgerMenu from './burger.js';

const burgerConfig = {
   BURGER: 'header__burger',
   BURGER_OPEN: 'burger--open',
   HEADER_MENU: 'header__phone',
   HEADER_MENU_OPEN: 'header__burger--open',
   PAGE_BODY: 'page',
   PAGE_BODY_NO_SCROLL: 'page--no-scroll',
   MAIN: 'main',
   MENU_LINK: 'header__phone',
   BREAKPOINT: 576,
   lABEL: {
      OPEN: 'Открыть меню',
      CLOSE: 'Закрыть меню'
   }
};

new BurgerMenu(burgerConfig);