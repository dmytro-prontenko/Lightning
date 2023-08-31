import { refs } from '../refs';
import Notiflix from 'notiflix';
import { loadFromLocal } from '../storage.js';

export default class Render {
  constructor() {}

  renderList(arr) {
    if (Array.isArray(arr)) {
      const cocktailCard = arr
        .map(
          card => `
        <li id=${card._id} class="cocktails-item">
        <h2 class="name-section"></h2>
              <img class="cocktails-img" src="${card.drinkThumb}" alt="${card.drink}">
              <h3 class="cocktails-title">${card.drink}</h3>
              <p class="cocktails-desc">${card.instructions}</p>
              <div class="buttons-wrapper">
                <button type="button" class="learn-more">Learn More</button>
                <button type="button" class="fav-btn"><span class="fav-btn-text">#</span></button>
              </div>
          </li>`
        )
        .join('');
      refs.cocktailsList.innerHTML = cocktailCard;
    } else {
      Notiflix.Report.failure(
        'ERROR',
        'Oops! Something went wrong! Try reloading the page!',
        'Okay'
      );
    }
    // refs.favBtn = document.querySelector('.fav-btn');
  }

  renderModalCocktail(arr) {
    if (Array.isArray(arr)) {
      const cocktailModal = arr
        .map(
          elem => `
          <div class="modal-cocktail" id="${elem._id}" js-modal-cocktail">
          <button type="button" class="btn-close">#</button>
          <img src=${elem.drinkThumb} alt="" width="295" height="277" />
          <h2>Ingredients:</h2>
          <h3>Per cocktail</h3>
          <ul class="cocktail-ingr-list"></ul>
          <h2>Instuction:</h2>
          <p>${elem.instructions}</p>
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
            `<li class="ingredients-modal-item"><button class="ingredient-list-item">${ing.title}</button></li>`
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

  renderIngModal(arr) {
    if (Array.isArray(arr)) {
      const ingrModal = arr
        .map(
          card => `
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
        `
        )
        .join('');
      refs.modalIngredient.innerHTML = ingrModal;
    } else {
      Notiflix.Report.failure(
        'ERROR',
        'Oops! Something went wrong! Try reloading the page!',
        'Okay'
      );
    }
  }

  renderFavPage(arr) {
    if (Array.isArray(arr)) {
      const favPage = arr
        .map(
          card => `
              <li id=${card._id} class="cocktails-item">
        <h2 class="name-section"></h2>
              <img class="cocktails-img" src="${card.drinkThumb}" alt="${card.drink}">
              <h3 class="cocktails-title">${card.drink}</h3>
              <p class="cocktails-desc">${card.instructions}</p>
              <div class="buttons-wrapper">
                <button type="button" class="learn-more"><span class="learn-more-text">Learn More</span></button>
                <button type="button" class="del-btn"><span class="lel-btn-text">#</span></button>
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
      const favIngPage = arr
        .map(
          card => `
              <li id=${card._id} class="cocktails-item">
                <h2 class="ing-name"></h2>
                <h3 class="cocktail-name"></h3>
                <p class="ing-des">${card.instructions}</p>
              <div class="buttons-wrapper">
                <button type="button" class="learn-more"><span class="learn-more-text">Learn More</span></button>
                <button type="button" class="del-btn"><span class="lel-btn-text">#</span></button>
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
}
