import CocktailAPI from './classes/cocktailAPI';
import Render from './classes/render';
import { btnUp } from './button-to-up.js';
import { refs } from './refs';
import _debounce from 'debounce';

btnUp.addEventListener();

const listCocktails = new CocktailAPI();
const listRender = new Render();
const windowWidth = window.innerWidth;

const startRenderDeskCocktail = 9;
const startRenderTablMobCocktail = 8;
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


refs.viewCoctailsBtn.addEventListener('click', onClickView);

function onClickView() {
  refs.cocktailsTitle.scrollIntoView({ behavior: 'smooth' });
};

renderFilter();
renderStartCoctailList();


function renderStartCoctailList() {

  if (windowWidth < 768) {
    listRender.renderAlphabetForMob(dataAlphabet);
    listCocktails.fetchCocktail(startRenderTablMobCocktail).then(data => {
    listRender.renderList(data);
    
    });
  } else if (windowWidth < 1280) {
    listRender.renderAlphabet(dataAlphabet);
    listCocktails.fetchCocktail(startRenderTablMobCocktail).then(data => {
    listRender.renderList(data);

    });
  } else {
    listRender.renderAlphabet(dataAlphabet);
    listCocktails.fetchCocktail(startRenderDeskCocktail).then(data => {
      listRender.renderList(data);
    });
  }
}
function renderFilter() {
  const windowWidthF = window.innerWidth;
  if (windowWidthF < 768) {
    refs.alphabet.classList.add('is-hidden');
    refs.select.classList.remove('is-hidden');
  } else if (windowWidthF < 1280) {
    refs.alphabet.classList.remove('is-hidden');
    refs.select.classList.add('is-hidden');
  } else {
    refs.alphabet.classList.remove('is-hidden');
    refs.select.classList.add('is-hidden');
  }
};