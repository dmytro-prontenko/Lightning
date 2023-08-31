import CocktailAPI from './classes/cocktailAPI';
import Render from './classes/render';

const listCocktails = new CocktailAPI();
const listRender = new Render();

listCocktails.fetchCocktail().then(data => {
  listRender.renderList(data);
});
