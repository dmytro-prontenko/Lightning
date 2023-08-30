import {get} from './fav-ingredients.js'

import { refs } from './refs';
import { renderModalCocktail } from './classes/render';
import { saveToLocal, loadFromLocal } from './storage.js';

refs.cocktailsList.addEventListener('click', onClick);

function onClick(event) {
  // Details button event
  if (
    event.target.nodeName === 'BUTTON' &&
    event.target.className === 'learn-more'
  ) {
    console.log(event.target);

    return;
  }

  // Favorite button event
  if (
    event.target.nodeName === 'BUTTON' &&
    event.target.className === 'fav-btn'
  ) {
    saveToLocal('cocktails', event.target.closest('.cocktails-item').id);
  }

  console.log(localStorage.getItem('cocktails'));
}









