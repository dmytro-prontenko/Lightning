import { refs } from "../refs";
import Notiflix from 'notiflix';

export function renderList(arr) {
    if (Array.isArray(arr)) {
        const cocktailCard = arr.map(card => `
     <li class="cocktails-item"> 
      <h2 class="name-section"></h2>
            <img class="cocktails-img" src="${}" alt="${}">
            <h3 class="cocktails-title">${}</h3>
            <p class="cocktails-desc">${}</p>
            <button type="button" class="learn-more"><span class="learn-more-text">${}</span></button>
            <button type="button" class="fav-btn"><span class="fav-btn-text">${}</span></button>
        </li>`).join('')
      refs.cocktailsList.innerHTML(cocktailCard)
    }
    else {
       Notiflix.Report.failure (
      'ERROR',
      'Oops! Something went wrong! Try reloading the page!',
      'Okay'
    );
    };
};