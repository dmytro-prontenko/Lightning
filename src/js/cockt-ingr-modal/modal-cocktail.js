// import { refs } from '../refs'
// import { fetchCocktail } from '../main-section-modul/render'
// import Notiflix from 'notiflix';

// const { learnMoreBtn } = refs;

// const BASE_URL = 'https://drinkify-backend.p.goit.global/api/v1/cocktails/';
// const ENDPOINT_COCKTAIL = '/lookup/';
// // const ENDPOINT_INGRIDIENTS = '/lookup/';

// learnMoreBtn.addEventListener('click', onLoadMoreBtnClick);

// async function onLoadMoreBtnClick(event) {
//   const PARAMS = new URLSearchParams({
//     id:event.target.parentNode.id,
//   });
//   try {
//     const resp = await fetchCocktailModal(
//       `${BASE_URL}${ENDPOINT_COCKTAIL}?${PARAMS}`
//     );
//   } catch (error) {
//     return Notiflix.Notify.failure('Error!', error.message);
//   }
// }

// export function openModalCocktail(res) {}

// function createMarkupCocktailModal(res, data) {}

// function createMarkupCocktailForModalListIngredients(res) {}

// function toggleModal() {
//   refs.modal.classList.toggle('is-hidden');
//   document.body.style.overflow = 'visible';
// }



