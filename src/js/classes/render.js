import { refs } from '../refs';
import Notiflix from 'notiflix';
import { loadFromLocal } from '../storage.js';
import icons from '../../images/icons.svg';

export default class Render {
  constructor() { }
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

      const addToFavBtn = document.querySelector('.fav-btn');
      if (loadFromLocal('cocktails').includes(arr[0]._id)) {
        addToFavBtn.target.dataset.inLocalStorage = 'inStorage';
        addToFavBtn.textContent = `<svg class="del-btn-svg">
                <use xlink:href="${icons}#icon-remove"></use>
                </svg>`;
        return;
      } else {
        addToFavBtn.dataset.inLocalStorage = 'notInStorage';
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
      // TODO скопіювати до інгридієнтів
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
            <li class="ing-info-item">Type: ${arr[0].alcohol === "Yes" ? "Alcoholic" : "Non-Alcoholic"}</li>
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
    if (Array.isArray(arr)) {
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
                <button type="button" class="del-btn">
                <svg class="del-btn-svg">
                <use xlink:href="${icons}#icon-remove"></use>
                </svg></button>
              </div>
          </li>
        `
        )
        .join('');
      refs.favCocktailsList.innerHTML = favPage;

    } else {
      Notiflix.Report.failure(
        'ERROR',
        'Oops! Something went wrong! Try reloading the page!',
        'Okay'
      );
    }
  }

  renderFavIngPage(arr) {
    if (Array.isArray(arr)) {
      console.log(arr);
      const favIngPage = arr
        .map(
          card => `
              <li id=${card._id} class="cocktails-item">
                <h2 class="cocktails-title">${card.title}</h2>
                <h3 class="alco-title">${card.alcohol === "Yes" ? "Alcoholic" : "Non-Alcoholic"}</h3>
                <p class="ing-des">${card.description}</p>
              <div class="buttons-wrapper">
                <button type="button" class="learn-more"><span class="learn-more-text">Learn More</span></button>
                <button type="button" class="del-btn"><span class="lel-btn-text">
                <svg class="del-btn-svg">
                <use xlink:href="${icons}#icon-remove"></use>
                </svg></span></button>
              </div>
          </li>
        `
        )
        .join('');
      refs.ingredientsList.innerHTML = favIngPage;
      

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
              <li class="custom-list-item" data-js-query="${letter}">${letter}</li>
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
    <div class="modal-burger container">

    <div class="header-burger-wrap">
    <a href="index.html" class=" header-link-burger">Drinkify
        <svg class="header-svg-burger" width="24" height="20">
            <use xlink:href="${icons}#icon-hero-logo-cocktail"></use>
        </svg>
    </a>

     <div class="burger-wrap">
  <label class="toggle-modal">
    <input class="toggle-checkbox" type="checkbox" />
    <div class="toggle-switch toggle-switch-burger"></div>
  </label>

  <button type="button" class="btn-close btn-close-burg">
    <svg class=" close-btn-svg close-btn-svg-burger" width="32" height="32" >
      <use xlink:href="${icons}#icon-close"></use>
    </svg>
  </button>
</div>
</div>


   
<div class="search-form-burger" id="search-form">
  <input
    class="search-form-burger__input"
    id="input"
    type="text"
    name="searchQuery"
    autocomplete="off"
    placeholder="Search"
  />
  <svg class="svg-search svg-search-burger" width="16" height="16">
    <use xlink:href="${icons}#icon-search"></use>
  </svg>
</div>


    <div class="modal-navi">
      <a class="modal-nav-item modal-navi-ul" href="index.html">Home</a>

      <button type="button" class=" modal-navi-ul">
        Favorites
        <svg class="header-arrow" width="12" height="6">
          <use xlink:href="${icons}#icon-header-arrow-down"></use>
        </svg>
      </button>
  <ul class="header-favorite-menu">
              <li>
                <a href="favorite-cocktails.html" class="header-fav-unactive"
                  >Favorite cocktails</a
                >
              </li>
              <li>
                <a href="favorite-ingridients.html" class="header-fav-unactive"
                  >Favorite ingredients</a
                >
              </li>
            </ul>
    </div>
  </div>`;
      refs.modalBurger.innerHTML = burgerModalMarkup;
    }

      
    }
  

