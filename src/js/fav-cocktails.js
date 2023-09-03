import CocktailAPI from './classes/cocktailAPI';
import Render from './classes/render';
import { refs } from './refs';
import Notiflix from 'notiflix';
import icons from '../images/icons.svg';
import { saveToLocal, loadFromLocal, removeFromLocal } from './storage.js';

const listCocktails = new CocktailAPI();
const listRender = new Render();

listCocktails.fetchFavorites('cocktails').then(data => {
    listRender.renderFavCocktailPage(data)
})
