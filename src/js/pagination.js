import CocktailAPI from './classes/cocktailAPI';
import Render from './classes/render';
import { refs } from './refs';
import Notiflix from 'notiflix';

const listCocktails = new CocktailAPI();
const listRender = new Render();
const itemsPerPage = 9;
let arrCocktail = [];

refs.alphabet.addEventListener('click', onFilterSymbolClick);

async function onFilterSymbolClick(event) {
    arrCocktail = [];
    refs.paginationContainer.innerHTML = "";
    if (event.target.nodeName === 'LI') {
        await listCocktails
        .fetchCocktailByLetter(event.target.dataset.jsQuery)
        .then(data => {
        data.forEach(el => {arrCocktail.push(el)});
            });
    event.target.closest('.custom-list').dataset.render = 'stop-render';
    refs.cocktailsTitle.scrollIntoView({behavior: 'smooth'})
    const pagObj = createPaginationObject(arrCocktail, itemsPerPage);
    Notiflix.Notify.info(`Found ${arrCocktail.length} cocktails!`)
    if(Object.keys(pagObj).length>1) listRender.renderPaginationBtns(Object.keys(pagObj).length);
    };
};



function createPaginationObject(values, itemsPerPage) {
    const paginationObject = {};
    const totalPages = Math.ceil(values.length / itemsPerPage);
    for (let page = 1; page <= totalPages; page++) {
        const startIdx = (page - 1) * itemsPerPage;
        const endIdx = startIdx + itemsPerPage;
        const pageValues = values.slice(startIdx, endIdx);
        paginationObject[page] = pageValues;
    }
    console.log(paginationObject);
    return paginationObject;
}











// `
//         <li id=${card._id} class="cocktails-item">
//         <h2 class="name-section"></h2>
//               <img class="cocktails-img" src="${card.drinkThumb}" alt="${card.drink}">
//               <h3 class="cocktails-title">${card.drink}</h3>
//               <p class="cocktails-desc">${card.description}</p>
//               <div class="buttons-wrapper">
//                 <button type="button" class="learn-more">Learn More</button>
//                 <button type="button" class="fav-btn">
//                 <svg class="fav-button-svg">
//                 <use xlink:href="${icons}#icon-footer-heart"></use>
//                 </svg>
//                 </button>
//               </div>
//           </li>`