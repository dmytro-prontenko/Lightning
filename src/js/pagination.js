import CocktailAPI from './classes/cocktailAPI';
import Render from './classes/render';
import { refs } from './refs';
import Notiflix from 'notiflix';

const listCocktails = new CocktailAPI();
const listRender = new Render();

const itemsPerPage = {perPage: 9};
let arrCocktail = [];
let currentPage;
let forRender;
let pageInt;
let pagObj = {};
refs.alphabet.addEventListener('click', onFilterSymbolClick);

async function onFilterSymbolClick(event) {
  currentPage = '1';
  console.log(currentPage);
  arrCocktail = [];
  refs.paginationContainer.innerHTML = '';
  pagObj = {};
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
      refs.btnPaginationNext.classList.remove("is-hidden");
      refs.paginationContainer.childNodes[0].classList.add("is-active")
      refs.paginationContainer.childNodes[0].disabled = true;
    }
    else if(arrCocktail.length <= itemsPerPage.perPage) {
      listRender.renderList(pagObj.page_1);
      refs.paginationContainer.innerHTML = `<button type="button" class="pagination-page is-active" disabled id="page_${
        Object.keys(pagObj).length
            }">${Object.keys(pagObj).length}</button>`;
        refs.btnPaginationNext.classList.add("is-hidden")
        refs.btnPaginationPrev.classList.add("is-hidden")
      }
  }


  refs.paginationContainer.addEventListener('click', onClickPageChanges);
  function onClickPageChanges(event) {
    
    currentPage = event.target.textContent;
  
    listRender.renderList(pagObj[event.target.id]);
    refs.cocktailsTitle.scrollIntoView({ behavior: 'smooth' });
    
    if (event.target.nodeName === 'BUTTON') {
      pageInt = Number(currentPage);

      changeStateCurrentPageNumber(event.target)
      
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

    refs.btnPaginationNext.addEventListener('click', onNextClick)
    function onNextClick(event) {
      forRender ='page_'+(parseInt(currentPage) + 1);
      listRender.renderList(pagObj[forRender]);
      currentPage = parseInt(currentPage) + 1;
      refs.cocktailsTitle.scrollIntoView({ behavior: 'smooth' });

      pageInt = Number(currentPage);

      changeStateCurrentPagePrevNext(event.target.nextElementSibling) 

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
};
    
refs.btnPaginationPrev.addEventListener('click', onPrevClick)
    
    function onPrevClick(event) {
      
      forRender ='page_'+(parseInt(currentPage) - 1);
      listRender.renderList(pagObj[forRender]);
      refs.cocktailsTitle.scrollIntoView({ behavior: 'smooth' });
      currentPage = parseInt(currentPage) - 1;
      
      pageInt = Number(currentPage);
      console.log(event.target.nextElementSibling);
      changeStateCurrentPagePrevNext(event.target.nextElementSibling) 

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
};


function createPaginationObject(values, itemsPerPage) {
  const { perPage } = itemsPerPage 
  const paginationObject = {};
  const totalPages = Math.ceil(values.length / perPage);
  for (let page = 1; page <= totalPages; page++) {
    const startIdx = (page - 1) * perPage;
    const endIdx = startIdx + perPage;
    const pageValues = values.slice(startIdx, endIdx);
    paginationObject['page_' + page] = pageValues;
  }
  return paginationObject;
}

function changeStateCurrentPageNumber(target){
  for (const child of refs.paginationContainer.childNodes) {
    child.classList.remove('is-active');
    child.disabled = false;
  };
  target.classList.add('is-active')
  target.disabled = true;
}


function changeStateCurrentPagePrevNext(target) {
  for (const child of refs.paginationContainer.childNodes) {
    child.classList.remove('is-active')
    child.disabled = false;
  };
  for (const child of refs.paginationContainer.childNodes) {
    if (Number(child.textContent) === currentPage) {
      child.classList.add('is-active')
      child.disabled = true;
      break;
    }
  }  
}


