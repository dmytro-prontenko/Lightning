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
  }
  // TODO рендер на фільтр по першій літері
  // TODO рендер модалка бургера
  // TODO рендер модалка коктейлю
  // TODO рендер модалка інгридієнти
  // TODO рендер favorite інгридієнти
  // TODO рендер favorite інгридієнти
}
