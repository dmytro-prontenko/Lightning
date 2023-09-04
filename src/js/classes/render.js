import { refs } from '../refs';
import Notiflix from 'notiflix';
import { loadFromLocal } from '../storage.js';
import icons from '../../images/icons.svg';

export default class Render {
  constructor() {}
  /*
│ =========================
│  Рендер масиву коктейлів
│ =========================
*/
  renderList(arr) {
    if (Array.isArray(arr)) {
      const cocktailCard = arr
        .map(
          card => `
        <li id=${card._id} class="cocktails-item">
        <h2 class="name-section"></h2>
              <img class="cocktails-img" src="${card.drinkThumb}" alt="${card.drink}">
              <h3 class="cocktails-title">${card.drink}</h3>
              <p class="cocktails-desc">${card.description}</p>
              <div class="buttons-wrapper">
                <button type="button" class="learn-more">Learn More</button>
                <button type="button" class="fav-btn">
                <svg class="fav-button-svg">
                <use xlink:href="${icons}#icon-footer-heart"></use>
                </svg>
                </button>
              </div>
          </li>`
        )
        .join('');
      refs.cocktailsList.innerHTML = cocktailCard;

      const item = document.querySelector('.cocktails-item');
      const tempBtn = item.lastElementChild.lastElementChild;

      const addToFavBtn = document.querySelector('.fav-btn');
      const children = [...refs.cocktailsList.children];
    
      if (loadFromLocal('cocktails').includes(arr[0]._id)) {
        for (const child of children) {
          if (loadFromLocal('cocktails').includes(child.id)) {
            // tempBtn.dataset.inLocalStorage = 'inStorage';
            child.lastElementChild.lastElementChild.classList.add('inStorage');
            child.lastElementChild.lastElementChild.innerHTML = `<svg class="del-btn-svg">
                    <use xlink:href="${icons}#icon-remove"></use>
                    </svg>`;
            // return;
          } else {
            // tempBtn.dataset.inLocalStorage = 'notInStorage';
            child.lastElementChild.lastElementChild.classList.add('notInStorage')
          }
        }
      }
    } else {
      Notiflix.Report.failure(
        'ERROR',
        'Oops! Something went wrong! Try reloading the page!',
        'Okay'
      );
    }
  }

  /*
│ ==========================
│  Рендер модалки коктейлів
│ ==========================
*/
  renderModalCocktail(arr) {
    if (Array.isArray(arr)) {
      const cocktailModal = arr
        .map(
          elem => `
          <div class="modal-cocktail" id="${elem._id}" js-modal-cocktail">
          <button type="button" class="btn-close">
          <svg class="close-btn-cock-svg" id="js-close-modal-cockt-svg">
                <use xlink:href="${icons}#icon-close"></use>
                </svg >
                </button>
          <div class="modal-cocktail-img-text-wrapper">
          <img src=${elem.drinkThumb} alt="" class="modal-cocktail-img" width="295" height="277" />
          <div class="modal-cocktail-text-wrapper">
          <h1>${elem.drink}</h1>
          <h2>Ingredients:</h2>
          <h3 class="modal-cocktail-instuction-text">Per cocktail</h3>
          <ul class="cocktail-ingr-list"></ul>
          </div>
          </div>
          <h2 class="modal-cocktail-instuction">Instructions:</h2>
          <p class="modal-cocktail-instuction-text">${elem.instructions}</p>
          <button type="button" class="add-to-fav">Add to favorite</button>
        </div>
        `
        )
        .join('');
      refs.modal.innerHTML = cocktailModal;
      const ingridList = document.querySelector('.cocktail-ingr-list');
      const ingToInsert = arr[0].ingredients
        .map(
          ing =>
            `<li class="ingredients-modal-item" data-ing-id="${ing.ingredientId}"><button class="ingredient-list-item" data-ing-id="${ing.ingredientId}">${ing.title}</button></li>`
        )
        .join('');
      ingridList.innerHTML = ingToInsert;

      const addToFavBtn = document.querySelector('.add-to-fav');

      if (loadFromLocal('cocktails').includes(arr[0]._id)) {
        addToFavBtn.textContent = 'Remove from favorite';
        return;
      }
    } else {
      Notiflix.Report.failure(
        'ERROR',
        'Oops! Something went wrong! Try reloading the page!',
        'Okay'
      );
    }
  }

  /*
│ =============================
│  Рендер модалки інгридієнтів
│ =============================
*/
  renderIngModal(arr) {
    if (Array.isArray(arr)) {
      const ingrModal = arr
        .map(
          card => `
            <div class="modal-ing" id="${arr[0]._id}">
            <button type="button" class="btn-close">
            <svg class="close-btn-svg" id="js-close-modal-ingr-svg">
                <use xlink:href="${icons}#icon-close"></use>
                </svg >
                </button>
            <h2 class="ing-name">${arr[0].title}</h2>
            <h3 class="cocktail-name">${arr[0].type}</h3>
            <p class="ing-des-modal">${arr[0].description}</p>
            <ul class="ing-info-list">
            <li class="ing-info-item">Type: ${
              arr[0].alcohol === 'Yes' ? 'Alcoholic' : 'Non-Alcoholic'
            }</li>
            <li class="ing-info-item">Country of origin: ${arr[0].country}</li>
            <li class="ing-info-item">Alcohol by volume: ${arr[0].abv}</li>
            <li class="ing-info-item">Flavour: ${arr[0].flavour}</li>
        </ul>
        <button type="button" class="add-fav-ing" >Add to favorite</button>
    </div>
        `
        )
        .join('');
      refs.modalIngredient.innerHTML = ingrModal;

      const addToFavBtnIng = document.querySelector('.add-fav-ing');

      if (loadFromLocal('ingredients').includes(arr[0]._id)) {
        addToFavBtnIng.textContent = 'Remove from favorite';
        return;
      }
    } else {
      Notiflix.Report.failure(
        'ERROR',
        'Oops! Something went wrong! Try reloading the page!',
        'Okay'
      );
    }
  }
  /*
│ =====================================
│  Рендер сторінки улюблених коктейлів
│ =====================================
*/
  renderFavCocktailPage(arr) {
    if (Array.isArray(arr) && arr.length > 0) {
      const favPage = arr
        .map(
          card => `
              <li id=${card._id} class="cocktails-item">
        <h2 class="name-section"></h2>
              <img class="cocktails-img" src="${card.drinkThumb}" alt="${card.drink}">
              <h3 class="cocktails-title">${card.drink}</h3>
              <p class="cocktails-desc">${card.description}</p>
              <div class="buttons-wrapper">
                <button type="button" class="learn-more">Learn More</button>
                <button type="button" class="fav-btn fav-btn-del" >
                <svg class="del-btn-svg">
                <use xlink:href="${icons}#icon-remove"></use>
                </svg></button>
              </div>
          </li>
        `
        )
        .join('');

     
        refs.favCocktailsList.innerHTML = favPage;
    }
  }

  renderFavIngPage(arr) {
    if (Array.isArray(arr)) {
      const favIngPage = arr
        .map(
          card => `
                     <li id=${card._id} class="cocktails-item">
                <h2 class=" ing-name cocktails-title">${card.title}</h2>
                <h3 class=" ing-info-item alco-title">${
                  card.alcohol === 'Yes' ? 'Alcoholic' : 'Non-Alcoholic'
                }</h3>
                <p class=" ing-des-modal ing-des">${card.description}</p>
              <div class="buttons-wrapper">
                <button type="button" class="learn-more">Learn More</button>
                <button type="button" class="fav-btn-del"><span class="lel-btn-text">
                <svg class="del-btn-svg" id="del-btn-svg">
                <use xlink:href="${icons}#icon-remove"></use>
                </svg></span></button>
              </div>
          </li>
        `
        )
        .join('');
      refs.ingredientsList.innerHTML = favIngPage;
      // refs.cocktailsList.innerHTML = favIngPage;
    } else {
      Notiflix.Report.failure(
        'ERROR',
        'Oops! Something went wrong! Try reloading the page!',
        'Okay'
      );
    }
  }
  /*
  │ =========================
  │    Рендер алфавіту
  │ =========================
  */
  renderAlphabet(arr) {
    if (Array.isArray(arr)) {
      const alphabetList = arr
        .map(
          letter => `
              <button type="button" class="custom-list-item" data-js-query="${letter}">${letter}</button>
        `
        )
        .join('');
      refs.alphabet.innerHTML = alphabetList;
    } else {
      Notiflix.Report.failure(
        'ERROR',
        'Oops! Something went wrong! Try reloading the page!',
        'Okay'
      );
    }
  }

  /*
  │ =============================
  │    Рендер алфавіту мобільна
  │ =============================
  */

  renderAlphabetForMob(arr) {
    if (Array.isArray(arr)) {
      const alphabetList = arr
        .map(
          letter => `
          <option class="alphabet-select" value="${letter}">
          ${letter}
          </option>`
        )
        .join('');
      refs.select.innerHTML = alphabetList;
    } else {
      Notiflix.Report.failure(
        'ERROR',
        'Oops! Something went wrong! Try reloading the page!',
        'Okay'
      );
    }
  }
  /*
  │ =========================
  │    Рендер бургер меню
  │ =========================
  */
  renderBurgerModal() {
    const burgerModalMarkup = `
<div class="section-burger">
    <div class="modal-burger container">
    
        <div class="header-burger-wrap">
            <a href="index.html" class=" header-link-burger">Drinkify
                <svg class="header-svg-burger" width="24" height="20">
                    <use xlink:href="${icons}#icon-hero-logo-cocktail"></use>
                </svg>
            </a>
    
            <div class="burger-wrap">
                <label class="toggle-modal">
                    <input class="toggle-checkbox burger-checkbox " type="checkbox" />
                    <div class="toggle-switch toggle-switch-burger"></div>
                </label>
    
                <button type="button" class="btn-close btn-close-burg">
                    <svg class=" close-btn-svg close-btn-svg-burger" width="32" height="32">
                        <use xlink:href="${icons}#icon-close"></use>
                    </svg>
                </button>
            </div>
        </div>
    
    
    
        <div class="search-form-burger" id="search-form">
            <input class="search-form-burger__input" id="input" type="text" name="searchQuery" autocomplete="off"
                placeholder="Search" />
            <svg class="svg-search svg-search-burger" width="16" height="16">
                <use xlink:href="${icons}#icon-search"></use>
            </svg>
        </div>

        <div class="burger-navi">
    <a class="burger-navi-ul burger-home" href="index.html">Home</a>
    <button type="button" class="burger-navi-btn burger-navi-ul">
        Favorite
        <svg class="burger-arrow" width="24" height="24">
            <use xlink:href="${icons}#icon-burger-arrow-down"></use>
        </svg>
    </button>
    <ul class="burger-favorite-menu">
        <li class="burger-fav-unactive">
            <a href="favorite-cocktails.html" >Favorite cocktails</a>
        </li>
        <li class="burger-fav-unactive">
            <a href="favorite-ingridients.html" >Favorite ingredients</a>
        </li>
    </ul>

</div>
            <div class="burger-bg">
        <svg class="burger-bg-svg" width="391" height="391">
            <use xlink:href="${icons}#icon-hero-background"></use>
        </svg>
    </div>
    </div>
</div>`;
    refs.modalBurger.innerHTML = burgerModalMarkup;
  }

  renderPaginationBtns(quant) {
    const arrMarkupBtns = [];
    for (let i = 1; i <= quant; i++) {
      arrMarkupBtns.push(
        `<button type="button" class="pagination-page" id="page_${i}">${i}</button>`
      );
    }
    const markupBtns = arrMarkupBtns.join('');
    refs.paginationContainer.innerHTML = markupBtns;
  }
}
