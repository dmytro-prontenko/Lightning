import { refs } from '../refs';
import Notiflix from 'notiflix';

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
                <button type="button" class="learn-more"><span class="learn-more-text">Learn More</span></button>
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
    console.log(refs);
    refs.favBtn = document.querySelector('.fav-btn');
    console.log(refs);
  }

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
                <button type="button" class="learn-more"><span class="learn-more-text">Learn More</span></button>
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
  }

  renderModalCocktail(arr) {
    if (Array.isArray(arr)) {
      const cocktailmodal = arr
        .map(
          card => `
           <div class="modal-cocktail-wrapper ">
           <button type="button" class="modal-cocktail-close-btn" data-modal-close>
           <svg class="icon-modal-cocktail" height="22" width="22">
           <use href="#"></use>
           </svg>
           </button>
           <img
            class="modal-cocktail-img"
            src=""
            alt=""
            width="295"
            height="277"
          />
          <div class="cocktail-desc">
            <h3 class="cocktail-desc-name">INGREDIENTS:</h3>

            <p class="cocktail-desc-subtitle"></p>

            <ul class="cocktail-desc-list">
              <li class="ingredients-modal-item"></li>
              <li class="ingredients-modal-item"></li>
              <li class="ingredients-modal-item"></li>
              <li class="ingredients-modal-item"></li>
              <li class="ingredients-modal-item"></li>
            </ul>
          </div>
        </div>
        <div class="cocktail-instruction">
          <h3 class="instruction-name">INSTRACTIONS:</h3>
          <p class="instruction-text">
            
          </p>
        </div>
        <button id="idDrink" type="button" class="cocktails-modal-btn">
          add to favorite
        </button>
      </div>
        `
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
  }

  renderIngModal(arr) {
    if (Array.isArray(arr)) {
      const ingrModal = arr
        .map(
          card => `
              <div class="ing">
        <button type="button" class="btn-close">#</button>
        <h2 class="ing-name"></h2>
        <h3 class="cocktail-name"></h3>
        <p class="ing-des"><span class="first-word"></span></p>
        <ul class="ing-info-list">
            <li class="ing-info-item">Type:</li>
            <li class="ing-info-item">Country of origin:</li>
            <li class="ing-info-item">Alcohol by volume:</li>
            <li class="ing-info-item">Flavour:</li>
        </ul>
        <button type="button" class="ing-add-fav"><span class="ing-add-fav-text">add to favorite</span></button>
    </div>
        `
        )
        .join('');
      refs.modalIngredient.innerHTML = ingrModa;
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

  // TODO рендер на фільтр по першій літері
  // TODO рендер модалка бургера
  // TODO рендер модалка коктейлю
  // TODO рендер модалка інгридієнти
  // TODO рендер favorite інгридієнти
  // TODO рендер favorite інгридієнти
}
