import CocktailAPI from './classes/cocktailAPI';
import Render from './classes/render';

import { refs } from './refs';

const listCocktails = new CocktailAPI();
const listRender = new Render();

listCocktails.fetchCocktail().then(data => {
  listRender.renderList(data);
});

const dataAlphabet = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
];
listRender.renderAlphabet(dataAlphabet);

listCocktails.fetchCocktailByID('64aebb7f82d96cc69e0eb4a5');
