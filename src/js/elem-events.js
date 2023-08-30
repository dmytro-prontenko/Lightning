import { refs } from './refs';
import Render from './classes/render';
import CocktailAPI from './classes/cocktailAPI';
import { saveToLocal, loadFromLocal, removeFromLocal } from './storage.js';

refs.cocktailsList.addEventListener('click', onClick);

const modalCocktail = new CocktailAPI();
const renderCocktailModal = new Render();

//?? Чи будемо розносити по файлам fav-cocktails / fav-ingridients?

function onClick(event) {
  // Details button event
  if (
    event.target.nodeName === 'BUTTON' &&
    event.target.className === 'learn-more'
  ) {
    //TODO дописати логіку до кнопки на відкриття модалки
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('modal-open');
    const id = event.target.closest('.cocktails-item').id;
    modalCocktail.fetchCocktailByID(id).then(data => {
      renderCocktailModal.renderModalCocktail(data);
    });

    return;
  }

  // Favorite button event
  if (
    event.target.nodeName === 'BUTTON' &&
    event.target.className === 'fav-btn'
  ) {
    saveToLocal('cocktails', event.target.closest('.cocktails-item').id);
  }
}

refs.backdrop.addEventListener('click', onClickModalCocktail);

function onClickModalCocktail(event) {
  if (
    event.target.nodeName === 'BUTTON' &&
    event.target.className === 'btn-close'
  ) {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('modal-open');
    const id = event.target.closest('.modal-cocktail').id;
    return;
  }

  if (
    event.target.nodeName === 'BUTTON' &&
    event.target.className === 'add-to-fav'
  ) {
    const id = event.target.closest('.modal-cocktail').id;
    if (event.target.textContent === 'Remove from favorite') {
      removeFromLocal('cocktails', id);
      event.target.textContent = 'Add to favorite';
      return;
    }

    saveToLocal('cocktails', id);
    event.target.textContent = 'Remove from favorite';
  }
}
