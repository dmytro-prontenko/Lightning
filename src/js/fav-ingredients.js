import CocktailAPI from './classes/cocktailAPI';
import Render from './classes/render';

const listCocktails = new CocktailAPI();
const listRender = new Render();


listCocktails.fetchFavorites('cocktails').then(data => {
    listRender.renderFavIngPage(data)
})