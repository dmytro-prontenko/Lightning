import CocktailAPI from './classes/cocktailAPI';
import Render from './classes/render';
import { btnUp } from './button-to-up';
import { refs } from './refs';
import { removeFromLocal } from './storage.js';


const listCocktails = new CocktailAPI();
const listRender = new Render();

listCocktails.fetchFavorites('cocktails').then(data => {
  listRender.renderFavCocktailPage(data);
});

btnUp.addEventListener();

refs.favCocktailsList.addEventListener('click', onClickInFav);

function onClickInFav(event) {
  if (
    (event.target.nodeName === 'BUTTON' &&
      event.target.classList.contains('fav-btn-del') ) ||
    (event.target.nodeName === 'svg' && event.target.id === 'del-btn-svg') ||
    event.target.nodeName === 'use'
  ) {
    const list = refs.favCocktailsList.children;
    for (const el of list) {
      if (el.id === event.target.id) {
        removeFromLocal('cocktails', el.id)
        el.style.opacity = '0'; 
        setTimeout(function () {
        el.style.display = 'none'; 
        }, 500);
      }
    }
  }
}
