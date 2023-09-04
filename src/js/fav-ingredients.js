import CocktailAPI from './classes/cocktailAPI';
import Render from './classes/render';

const listCocktails = new CocktailAPI();
const listRender = new Render();


listCocktails.fetchFavorites('ingredients').then(data => {
    listRender.renderFavIngPage(data)
})

refs.ingredientsList.addEventListener('click', onIngrCloseBtnClick);

// function onIngrCloseBtnClick(event) {
//   if (
//     (event.target.nodeName === 'svg' &&
//       event.target.id === 'js-close-modal-ingr-svg') ||
//     event.target.nodeName === 'use'
//   ) {
//     refs.modal.classList.toggle('is-hidden');
//     refs.modalIngredient.classList.toggle('is-hidden');
//     return;
//   }
//   console.log(event.target.dataset.ingId);
//   if (
//     event.target.nodeName === 'BUTTON' &&
//     event.target.className === 'add-fav-ing'
//   ) {
//     const id = event.target.closest('.modal-ing').id;
//     if (event.target.textContent === 'Remove from favorite') {
//       removeFromLocal('ingredients', id);
//       event.target.textContent = 'Add to favorite';
//       return;
//     }
//     saveToLocal('ingredients', id);
//     event.target.textContent = 'Remove from favorite';
//   }
// };