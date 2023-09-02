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
  refs.paginationContainer.innerHTML = '';
  let pagObj = {};
  if (event.target.nodeName === 'LI') {
    await listCocktails
      .fetchCocktailByLetter(event.target.dataset.jsQuery)
      .then(data => {
        data.forEach(el => {
          arrCocktail.push(el);
        });
      });
    event.target.closest('.custom-list').dataset.render = 'stop-render';
    refs.cocktailsTitle.scrollIntoView({ behavior: 'smooth' });
    pagObj = createPaginationObject(arrCocktail, itemsPerPage);
    Notiflix.Notify.info(`Found ${arrCocktail.length} cocktails!`);

    if (Object.keys(pagObj).length > 1) {
      listRender.renderPaginationBtns(Object.keys(pagObj).length);
      listRender.renderList(pagObj.page_1);
      refs.btnPaginationNext.classList.remove("is-hidden")
    }
    else if(arrCocktail.length <= 9) {
      listRender.renderList(pagObj.page_1);
      refs.paginationContainer.innerHTML = `<button type="button" class="pagination-page" disabled id="page_${
        Object.keys(pagObj).length
            }">${Object.keys(pagObj).length}</button>`;
        refs.btnPaginationNext.classList.add("is-hidden")
      refs.btnPaginationPrev.classList.add("is-hidden")
      }
      
      
  }
  refs.paginationContainer.addEventListener('click', onClickPageChanges);
  function onClickPageChanges(event) {
      listRender.renderList(pagObj[event.target.id]);

    refs.cocktailsTitle.scrollIntoView({ behavior: 'smooth' });
    refs.btnPaginationBlock.addEventListener('click', onPaginationNavClick);
    function onPaginationNavClick(event) {
       let pageInt = parseInt(event.target.id.match(/\d+/));
      if (pageInt > 1 && pageInt < Object.keys(pagObj).length) {
          refs.btnPaginationPrev.classList.remove('is-hidden')
          refs.btnPaginationNext.classList.remove('is-hidden')
      }
      else if (pageInt === 1) {
          refs.btnPaginationNext.classList.remove('is-hidden') 
          refs.btnPaginationPrev.classList.add('is-hidden')
          
      }
      else if (pageInt === Object.keys(pagObj).length) {
           refs.btnPaginationNext.classList.add('is-hidden') 
          refs.btnPaginationPrev.classList.remove('is-hidden')
      }
      }
      
  }
}

function createPaginationObject(values, itemsPerPage) {
  const paginationObject = {};
  const totalPages = Math.ceil(values.length / itemsPerPage);
  for (let page = 1; page <= totalPages; page++) {
    const startIdx = (page - 1) * itemsPerPage;
    const endIdx = startIdx + itemsPerPage;
    const pageValues = values.slice(startIdx, endIdx);
    paginationObject['page_' + page] = pageValues;
  }
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
