import CocktailAPI from './classes/cocktailAPI';
import Render from './classes/render';
import { btnUp } from './button-to-up.js';
import { refs } from './refs';
import _debounce from 'debounce';

btnUp.addEventListener();
const listCocktails = new CocktailAPI();
const listRender = new Render();

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

let currentWidth = 0;
let windowWidth = 0;
function adjustLayout() {
  windowWidth = window.innerWidth;
  if (currentWidth <= 375 && windowWidth <= 375) {
    currentWidth = windowWidth;
    return;
  } else if (
    currentWidth > 375 &&
    currentWidth <= 768 &&
    windowWidth > 375 &&
    windowWidth <= 768
  ) {
    currentWidth = windowWidth;
    return;
  } else if (currentWidth > 768 && windowWidth > 768) {
    currentWidth = windowWidth;
    return;
  }
  reRender()
  currentWidth = windowWidth;
}

adjustLayout();
window.addEventListener('resize', _debounce(adjustLayout, 700));

function reRender() {
  if (windowWidth < 768) {
    listCocktails.fetchCocktail(startRenderTablMobCocktail).then(data => {
      listRender.renderList(data);
    });
    // випадаючий список
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
