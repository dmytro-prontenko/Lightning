import { refs } from './refs';
import { renderModalCocktail } from './classes/render';
import { saveToLocal, loadFromLocal } from './storage.js';

refs.cocktailsList.addEventListener('click', onClick);

//?? Чи будемо розносити по файлам fav-cocktails / fav-ingridients?

function onClick(event) {
  // Details button event
  if (
    event.target.nodeName === 'BUTTON' &&
    event.target.className === 'learn-more'
  ) {
    //TODO дописати логіку до кнопки на відкриття модалки

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
//TODO зробити перемикання класу для зміни статусу кнопки Додати/Видалити з обраного
