import Render from './classes/render';
import CocktailAPI from './classes/cocktailAPI';
import DropDownList, { dropDownList } from './classes/drop-down-search';
import { refs } from './refs';
import { saveToLocal, loadFromLocal, removeFromLocal } from './storage.js';
import icons from '../images/icons.svg';
import { headerLinkFav, favMenu, onLinkClick, onBodyClick } from './header.js';
import Notiflix from 'notiflix';
refs.cocktailsList.addEventListener('click', onClick);

// const renderCocktailModal = new Render();

const listCocktails = new CocktailAPI();
const listRender = new Render();

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
    listCocktails.fetchCocktailByID(id).then(data => {
      listRender.renderModalCocktail(data);
    });
    return;
  }

  // Favorite button event
  if (
    event.target.nodeName === 'BUTTON' &&
    event.target.className === 'fav-btn'
  ) {
    const id = event.target.closest('.cocktails-item').id;
    // console.log(event.target.dataset.inLocalStorage)
    if (event.target.dataset.inLocalStorage === 'inStorage') {
      removeFromLocal('cocktails', id);
      event.target.dataset.inLocalStorage = 'notInStorage';
      event.target.innerHTML = `<svg class="fav-button-svg">
                <use xlink:href="${icons}#icon-footer-heart"></use>
                </svg>`;
      return;
    }
    saveToLocal('cocktails', event.target.closest('.cocktails-item').id);
    event.target.dataset.inLocalStorage = 'inStorage';
    event.target.innerHTML = `<svg class="del-btn-svg">
                <use xlink:href="${icons}#icon-remove"></use>
                </svg>`;
  }
}
// =============== MODAL COCKTAILS BUTTONS ===============
refs.modal.addEventListener('click', onClickModalCocktail);

function onClickModalCocktail(event) {
  if (
    (event.target.nodeName === 'svg' &&
      event.target.id === 'js-close-modal-cockt-svg') ||
    event.target.nodeName === 'use'
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
    // refs.favBtn.innerHTML = `<svg class="del-btn-svg">
    // <use xlink:href="${icons}#icon-remove"></use>
    // </svg>`;
    event.target.textContent = 'Remove from favorite';
  }

  if (
    event.target.nodeName === 'BUTTON' &&
    event.target.className === 'ingredient-list-item'
  ) {
    refs.modal.classList.toggle('is-hidden');
    refs.modalIngredient.classList.toggle('is-hidden');
    console.log(listCocktails.fetchIngrByID(event.target.dataset.ingId));
    listCocktails
      .fetchIngrByID(event.target.dataset.ingId)
      .then(data => listRender.renderIngModal(data));
  }
}
// =============== MODAL ING BUTTONS ===============
refs.modalIngredient.addEventListener('click', onIngrCloseBtnClick);

function onIngrCloseBtnClick(event) {
  if (
    (event.target.nodeName === 'svg' &&
      event.target.id === 'js-close-modal-ingr-svg') ||
    event.target.nodeName === 'use'
  ) {
    refs.modal.classList.toggle('is-hidden');
    refs.modalIngredient.classList.toggle('is-hidden');
    return;
  }
  console.log(event.target.dataset.ingId);
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
}

// =============== MODAL BURGER ===============

refs.burgerMenu.addEventListener('click', onBurgerMenuClick);
refs.modalBurger.addEventListener('click', onModalBurgerClick);

function onBurgerMenuClick(event) {
  console.log(event.target);
  if (event.target.nodeName === 'svg' || event.target.nodeName === 'use') {
    refs.modalBurger.classList.toggle('is-hidden');
    refs.body.classList.toggle('modal-open');
    listRender.renderBurgerModal();
    return;
  }
}

function onModalBurgerClick(event) {
  if (
    (event.target.nodeName === 'svg' &&
      event.target.classList === 'close-btn-cock-svg') ||
    event.target.nodeName === 'use' ||
    event.target.nodeName === 'BUTTON'
  ) {
    refs.modalBurger.classList.toggle('is-hidden');
    refs.body.classList.toggle('modal-open');
    return;
  }
}

//TODO реалізувати закриття модалки при кліку на backdrop + Esc

// =============== SEARCH INPUT ===============
// TODO
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
}
