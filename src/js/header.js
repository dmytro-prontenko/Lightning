const headerLinkFav = document.querySelector('.header-nav-link-fav');
const favMenu = document.querySelector('.header-favorite-menu');
import { gsap } from 'gsap';

headerLinkFav.addEventListener('click', onClick);

function onClick(event) {
  if (
    event.target.nodeName === 'BUTTON' ||
    event.target.nodeName === 'svg' ||
    event.target.nodeName === 'use'
  ) {
    if (favMenu.classList.contains('show')) {
      favMenu.classList.remove('show');
      favMenu.classList.add('hide');
    } else {
      favMenu.classList.remove('hide');
      favMenu.classList.add('show');
    }
  }
}
