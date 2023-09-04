import CocktailAPI from './classes/cocktailAPI';
import Render from './classes/render';
import { refs } from './refs';
import { dropDownList } from './classes/drop-down-search';
import { saveToLocal, removeFromLocal } from './storage.js';
import icons from '../images/icons.svg';
import Notiflix from 'notiflix';

const listCocktails = new CocktailAPI();
const listRender = new Render();


listCocktails.fetchFavorites('ingredients').then(data => {
    listRender.renderFavIngPage(data)
})
refs.hero.classList.add('is-hidden')
// refs.ingredientsList.addEventListener('click', onIngrCloseBtnClick);

// =============== MODAL BURGER ===============

refs.burgerMenu.addEventListener('click', onBurgerMenuClick);
refs.modalBurger.addEventListener('click', onModalBurgerClick);

function onBurgerMenuClick(event) {
  if (event.target.nodeName === 'svg' || event.target.nodeName === 'use') {
    refs.modalBurger.classList.toggle('is-hidden');
    refs.body.classList.toggle('modal-open');
    listRender.renderBurgerModal();
    return;
  }
};

function onModalBurgerClick(event) {
  if (
    (event.target.nodeName === 'svg' &&
      event.target.classList === 'close-btn-cock-svg') ||
    event.target.nodeName === 'use'
  ) {
    refs.modalBurger.classList.toggle('is-hidden');
    refs.body.classList.toggle('modal-open');
    return;
  }
};


// =============== SEARCH INPUT ===============

refs.searchField.addEventListener('input', onSearchInput);
function onSearchInput(event) {
  refs.searchField.addEventListener('keydown', onEnterPress);
}

function onEnterPress(event) {
  if (event.keyCode === 13) {
    if (event.target.value.length >= 3) {
      listCocktails
        .fetchCocktailByName(event.target.value.trim())
        .then(data => listRender.renderList(data));
      refs.cocktailsTitle.scrollIntoView({ behavior: 'smooth' });
      refs.searchField.value = '';
      dropDownList.removeList();
    } else {
      Notiflix.Notify.failure('Enter more than two symbols!');
    }
  }
};



refs.ingredientsList.addEventListener('click', onClickLearnMoreIng);

function onClickLearnMoreIng(event) {
  console.log(event.target);
 if (
    (event.target.nodeName === 'BUTTON' &&
    event.target.className === 'learn-more')|| event.target.nodeName === 'SPAN'
  ) {
   refs.modalIngredient.classList.toggle('is-hidden');
   console.log(event.target);
    console.log(listCocktails.fetchIngrByID(event.target.closest(".cocktails-item").id));
    listCocktails
      .fetchIngrByID(event.target.closest(".cocktails-item").id)
      .then(data => listRender.renderIngModal(data));
  };

};

refs.modalIngredient.addEventListener('click', onIngrCloseBtnClick);

function onIngrCloseBtnClick(event) {
  if (
    (event.target.nodeName === 'svg' &&
      event.target.id === 'js-close-modal-ingr-svg') ||
    event.target.nodeName === 'use'
  ) {
    // refs.modal.classList.toggle('is-hidden');
    refs.modalIngredient.classList.toggle('is-hidden');
    return;
  }

  if (
    event.target.nodeName === 'BUTTON' &&
    event.target.className === 'add-fav-ing'
  ) {
    const id = event.target.closest('.modal-ing').id;
    if (event.target.textContent === 'Remove from favorite') {
      removeFromLocal('ingredients', id);
      event.target.textContent = 'Add to favorite';
      return;
    }
    saveToLocal('ingredients', id);
    event.target.textContent = 'Remove from favorite';
  }
  if (
    (event.target.nodeName === 'svg' &&
      event.target.id === 'js-close-modal-cockt-svg') ||
    event.target.nodeName === 'use'
  ) {
    refs.modalIngredient.classList.toggle('is-hidden');
    refs.body.classList.toggle('modal-open');
    
    return;
  }
}