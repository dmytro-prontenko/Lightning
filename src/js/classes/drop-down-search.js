import CocktailAPI from './cocktailAPI';
import Render from './render';
import { refs } from '../refs';
import { gsap } from 'gsap';

const itemForDropDown = new CocktailAPI();
const renderInputedCocktail = new Render();

let data = [];

async function getAllCocktailsNames() {
  try {
    const totalCount = await itemForDropDown.fetchTotalCountCocktails();
    const resp = await itemForDropDown.fetchRandomCocktailsNames(totalCount);
    resp.forEach(el => data.push(el));
  } catch (error) {
    console.log(error);
  }
}

getAllCocktailsNames();

// async function test() {
//   try {
//     const totalCount = await itemForDropDown.fetchTotalCountCocktails();
//     const cocktailIds = await itemForDropDown.fetchRandomCocktailsNames(totalCount);
//     return cocktailIds;
//   } catch (error) {
//     console.log(error);
//   }
// }
// let arr;
// test().then(data => arr = data)
// console.log(arr)

class DropDownList {
  constructor({ element, data }) {
    this.element = element;
    this.data = data;

    this.listElement = null;

    this._onElementInput = this._onElementInput.bind(this);
    this._onItemListClick = this._onItemListClick.bind(this);

    this._onDocumentKeyDown = this._onDocumentKeyDown.bind(this);

    this.bind();
  }

  _onDocumentKeyDown({keyCode}) {
  }

  _onElementInput({ target }) {
    this.removeList();

    if (!target.value) {
      gsap.to('.images-wrapper', {
        x: 0,
        duration: 0.1,
        // delay: 0.2,
      });
      return;
    }

    this.createList(
      this.data.filter(
        it => it.toLowerCase().indexOf(target.value.toLowerCase()) !== -1
      )
    );
    this.appendList();

    gsap.to('.images-wrapper', {
      x: 400,
      duration: 0.1,
      // delay: 0.2,
    });
  }

  _onItemListClick({ target }) {
    this.element.value = target.textContent;
    itemForDropDown
      .fetchCocktailByName(this.element.value)
      .then(data => renderInputedCocktail.renderList(data));
    refs.cocktailsTitle.scrollIntoView({ behavior: 'smooth' });
    refs.searchField.value = '';
    this.removeList();
    gsap.to('.images-wrapper', {
      x: 0,
      duration: 0.2,
      // delay: 0.2,
    });
  }

  createList(data) {
    this.listElement = document.createElement(`ul`);
    this.listElement.className = `drop-down__list`;
    this.listElement.innerHTML = data
      .map(it => `<li tabindex="0" class="drop-down__item">${it}</li>`)
      .join(``);

    [...this.listElement.querySelectorAll(`.drop-down__item`)].forEach(it => {
      it.addEventListener(`click`, this._onItemListClick);
    });

    document.addEventListener(`keydown`, this._onDocumentKeyDown);
  }

  appendList() {
    const { left, width, bottom } = this.element.getBoundingClientRect();
    this.listElement.style.width = width + `px`;
    this.listElement.style.left = left + `px`;
    this.listElement.style.top = bottom + `px`;
    document.body.appendChild(this.listElement);
  }

  removeList() {
    if (this.listElement) {
      this.listElement.remove();
      this.listElement = null;
    }

    document.removeEventListener(`keydown`, this._onDocumentKeyDown);
  }

  bind() {
    this.element.addEventListener(`input`, this._onElementInput);
  }
}

new DropDownList({ element: document.querySelector(`#input`), data });
