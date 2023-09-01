import Render from './classes/render';
import CocktailAPI from './classes/cocktailAPI';
import DropDownList from './classes/drop-down-search';
import { refs } from './refs';
import { saveToLocal, loadFromLocal, removeFromLocal } from './storage.js';
import icons from '../images/icons.svg';
import {headerLinkFav, favMenu, onLinkClick} from './header.js'
refs.cocktailsList.addEventListener('click', onClick);

// const renderCocktailModal = new Render();
headerLinkFav.addEventListener("click", onLinkClick)
const listCocktails = new CocktailAPI();
const listRender = new Render();

//?? Чи будемо розносити по файлам fav-cocktails / fav-ingridients?

function onClick(event) {
  // Details button event
  if (
    event.target.nodeName === 'BUTTON' &&
    event.target.className === 'learn-more'
  ) {
    console.log(event.target);
    //TODO дописати логіку до кнопки на відкриття модалки
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('modal-open');
    const id = event.target.closest('.cocktails-item').id;
    listCocktails.fetchCocktailByID(id).then(data => {
      listRender.renderModalCocktail(data);
    });
    return;
  }

  // Favorite button event
  if (
    event.target.nodeName === 'BUTTON' &&
    event.target.className === 'fav-btn'
  ) {
    const id = event.target.closest('.cocktails-item').id;
    // console.log(event.target.dataset.inLocalStorage)
    if (event.target.dataset.inLocalStorage === 'inStorage') {
      removeFromLocal('cocktails', id);
      event.target.dataset.inLocalStorage = 'notInStorage';
      event.target.innerHTML = `<svg class="fav-button-svg">
                <use xlink:href="${icons}#icon-footer-heart"></use>
                </svg>`;
      return;
    }
    saveToLocal('cocktails', event.target.closest('.cocktails-item').id);
    event.target.dataset.inLocalStorage = 'inStorage';
    event.target.innerHTML = `<svg class="del-btn-svg">
                <use xlink:href="${icons}#icon-remove"></use>
                </svg>`;
  }
}
// =============== MODAL COCKTAILS BUTTONS ===============
refs.modal.addEventListener('click', onClickModalCocktail);

function onClickModalCocktail(event) {
  if (
    (event.target.nodeName === 'svg' &&
      event.target.id === 'js-close-modal-cockt-svg') ||
    event.target.nodeName === 'use'
  ) {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('modal-open');
    return;
  }

  if (
    event.target.nodeName === 'BUTTON' &&
    event.target.className === 'add-to-fav'
  ) {
    const id = event.target.closest('.modal-cocktail').id;
    if (event.target.textContent === 'Remove from favorite') {
      removeFromLocal('cocktails', id);
      event.target.textContent = 'Add to favorite';
      return;
    }

    saveToLocal('cocktails', id);
    event.target.textContent = 'Remove from favorite';
  }

  if (
    event.target.nodeName === 'BUTTON' &&
    event.target.className === 'ingredient-list-item'
  ) {
    refs.modal.classList.toggle('is-hidden');
    refs.modalIngredient.classList.toggle('is-hidden');

    //TODO переробити для інгридієнтів
    // modalCocktail.fetchCocktailByID(id).then(data => {
    //   listRender.renderModalCocktail(data);
    // });

    refs.modalIngredient.innerHTML = `
    <div class="modal-ing" id="123456">
    <button type="button" class="btn-close">
    <svg class="close-btn-svg" id="js-close-modal-ingr-svg">
                <use xlink:href="${icons}#icon-close"></use>
                </svg >
                </button>
    <h2 class="ing-name">Malina</h2>
    <h3 class="cocktail-name">Malinovka</h3>
    <p class="ing-des"><span class="first-word"></span></p>
    <ul class="ing-info-list">
    <li class="ing-info-item">Type: alcohol</li>
    <li class="ing-info-item">Country of origin: Ukraine</li>
    <li class="ing-info-item">Alcohol by volume: 30%</li>
    <li class="ing-info-item">Flavour: sweet</li>
</ul>
<button type="button" class="add-to-fav-ing">Add to favorite</button>
</div>
`;

    const addToFavBtnIng = document.querySelector('.add-to-fav-ing');

    if (loadFromLocal('ingredients').includes('123456')) {
      addToFavBtnIng.textContent = 'Remove from favorite';
      return;
    }
  }
}
// =============== MODAL ING BUTTONS ===============
refs.modalIngredient.addEventListener('click', onIngrCloseBtnClick);

function onIngrCloseBtnClick(event) {
  if (
    (event.target.nodeName === 'svg' &&
      event.target.id === 'js-close-modal-ingr-svg') ||
    event.target.nodeName === 'use'
  ) {
    refs.modal.classList.toggle('is-hidden');
    refs.modalIngredient.classList.toggle('is-hidden');
    return;
  }

  if (
    event.target.nodeName === 'BUTTON' &&
    event.target.className === 'add-to-fav-ing'
  ) {
    const id = event.target.closest('.modal-ing').id;
    if (event.target.textContent === 'Remove from favorite') {
      removeFromLocal('ingredients', id);
      event.target.textContent = 'Add to favorite';
      return;
    }

    saveToLocal('ingredients', id);
    event.target.textContent = 'Remove from favorite';
  }
}

// =============== MODAL BURGER ===============

refs.burgerMenu.addEventListener('click', onBurgerMenuClick);
refs.modalBurger.addEventListener('click', onModalBurgerClick);

function onBurgerMenuClick(event) {
  console.log(event.target);
  if (event.target.nodeName === 'svg' || event.target.nodeName === 'use') {
    refs.modalBurger.classList.toggle('is-hidden');
    refs.body.classList.toggle('modal-open');
    listRender.renderBurgerModal();
    return;
  }
}

const buttonModalClose = document.querySelector('.btn-close');
buttonModalClose.addEventListener('click', onBurgerModalClose);

function onModalBurgerClick(event) {
  if (
    (event.target.nodeName === 'svg' &&
      event.target.classList === 'close-btn-cock-svg') ||
    event.target.nodeName === 'use' ||
    event.target.nodeName === 'BUTTON'
  ) {
    refs.modalBurger.classList.toggle('is-hidden');
    refs.body.classList.toggle('modal-open');
    return;
  }
}

function onBurgerModalClose(event) {
  console.log(event.target);
}

//TODO реалізувати закриття модалки при кліку на backdrop + Esc

// =============== SEARCH INPUT ===============
// TODO
// 1. Підключити Slimselect до Search
// 2. На подію інпут додати debounce для відправки запиту на апі
// 3. Відрендерити список

refs.searchField.addEventListener('input', onSearchInput);
console.log(refs.searchField);

const data = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'American Samoa',
  'Andorra',
  'Angola',
  'Anguilla',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Aruba',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bangladesh',
  'Barbados',
  'Bahamas',
  'Bahrain',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bermuda',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'British Indian Ocean Territory',
  'British Virgin Islands',
  'Brunei Darussalam',
  'Bulgaria',
  'Burkina Faso',
  'Burma',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Cayman Islands',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Christmas Island',
  'Cocos (Keeling) Islands',
  'Colombia',
  'Comoros',
  'Congo-Brazzaville',
  'Congo-Kinshasa',
  'Cook Islands',
  'Costa Rica',
  'Croatia',
  'Cura?ao',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'East Timor',
  'Ecuador',
  'El Salvador',
  'Egypt',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Falkland Islands',
  'Faroe Islands',
  'Federated States of Micronesia',
  'Fiji',
  'Finland',
  'France',
  'French Guiana',
  'French Polynesia',
  'French Southern Lands',
  'Gabon',
  'Gambia',
  'Georgia',
  'Germany',
  'Ghana',
  'Gibraltar',
  'Greece',
  'Greenland',
  'Grenada',
  'Guadeloupe',
  'Guam',
  'Guatemala',
  'Guernsey',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Heard and McDonald Islands',
  'Honduras',
  'Hong Kong',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iraq',
  'Ireland',
  'Isle of Man',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jersey',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macau',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Martinique',
  'Mauritania',
  'Mauritius',
  'Mayotte',
  'Mexico',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Montenegro',
  'Montserrat',
  'Morocco',
  'Mozambique',
  'Namibia',
];
const dropDownSearch = new DropDownList({ element: refs.searchField, data });

function onSearchInput(event) {
  // dropDownSearch.DropDownList({ element: refs.searchField, data });
}

