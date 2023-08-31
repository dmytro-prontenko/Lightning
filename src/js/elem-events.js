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
    console.log(event.target);
    //TODO дописати логіку до кнопки на відкриття модалки
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('modal-open');
    const id = event.target.closest('.cocktails-item').id;
    modalCocktail.fetchCocktailByID(id).then(data => {
      renderCocktailModal.renderModalCocktail(data);
    });
    // console.log(event.target);
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
// =============== MODAL COCKTAILS BUTTONS ===============
refs.modal.addEventListener('click', onClickModalCocktail);

function onClickModalCocktail(event) {
  if (
    event.target.nodeName === 'BUTTON' &&
    event.target.className === 'btn-close'
  ) {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('modal-open');
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

  if (
    event.target.nodeName === 'BUTTON' &&
    event.target.className === 'ingredient-list-item'
  ) {
    refs.modal.classList.toggle('is-hidden');
    refs.modalIngredient.classList.toggle('is-hidden');
    refs.body.classList.toggle('modal-open');

    //TODO переробити для інгридієнтів
    // modalCocktail.fetchCocktailByID(id).then(data => {
    //   renderCocktailModal.renderModalCocktail(data);
    // });

    refs.modalIngredient.innerHTML = `
    <div class="modal-ing">
    <button type="button" class="btn-close">#</button>
    <h2 class="ing-name">Malina</h2>
    <h3 class="cocktail-name">Malinovka</h3>
    <p class="ing-des"><span class="first-word"></span></p>
    <ul class="ing-info-list">
    <li class="ing-info-item">Type: alcohol</li>
    <li class="ing-info-item">Country of origin: Ukraine</li>
    <li class="ing-info-item">Alcohol by volume: 30%</li>
    <li class="ing-info-item">Flavour: sweet</li>
</ul>
<button type="button" class="ing-add-fav"><span class="ing-add-fav-text">Add to favorite</span></button>
</div>
`;
  }
}

refs.modalIngredient.addEventListener('click', onIngrCloseBtnClick)

function onIngrCloseBtnClick(event) {
  if (
    event.target.nodeName === 'BUTTON' &&
    event.target.className === 'btn-close'
  ) {
    refs.modal.classList.toggle('is-hidden');
    refs.modalIngredient.classList.toggle('is-hidden');
    return;
  }
}