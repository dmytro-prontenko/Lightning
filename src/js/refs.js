export const refs = {
  cocktailsList: document.querySelector('.cocktails-list'),
  learnMoreBtn: document.querySelector('.learn-more'),
  favBtn: document.querySelector('.fav-btn'),
  modalCocktail: document.querySelector('.modal-cocktail'),
  modalIngredient: document.querySelector('.js-modal-ingredient'),
  modal: document.querySelector('[data-modal-cocktail]'),
  listCocktail: document.querySelector('.modal-ingredients__list'),
  favCocktailsList :document.querySelector(".fav-cocktails-list"),
  errorDiv:document.querySelector(".error"),
  cingredientsList: document.querySelector(".fav-ingredients-list"),
  favTitle: document.querySelector(".fav-title"),
};





// ---------   FUNCTIONS FOR LOCALSTORAGE ------//



//   SET ITEM   (for "add to favorite" button)

//  This function can find element by his id in array of elements
// function findProduct(id) {
//   return products.find(({Id}) => Id === id);
// }

// This callback function can read id of target element, find the closest cocktail card, check if it's already in favorite cocktails(if it is - return) and if it's not - add it to LocalStorage "Favorite_cocktails"

// const favCocktailsArr  = []

// function addToFavCocktails(e) {
//     const {id} = e.target.closest(".cocktails-item").dataset;
//     const productCur = findProduct(Number(id));
  
//   if (favCocktailsArr.find(({id})=> id === id)) {
//     return
   
//   } else {
//     favCocktailsArr.push(productCur)
//     localStorage.setItem("Favorite_cocktails", JSON.stringify(favCocktailsArr))
//   }
//   return;
// }

// This callback function can read id of target element, find the closest ingredient card, check if it's already in favorite ingredients(if it is - return) and if it's not - add it to LocalStorage "Favorite_ingredients"
// const favIngredientsArr  = []

// function addToFavIngredients(e) {
//     const {id} = e.target.closest(".ingredient-item").dataset;
//     const productCur = findProduct(Number(id));
  
//   if (favIngredientsArr.find(({id}) => id === id)) {
//     return
   
//   } else {
//     favIngredientsArr.push(productCur)
//     localStorage.setItem("Favorite_ingredients", JSON.stringify(favIngredientsArr))
//   }
//   return;
// }

//GET ITEM 

// this function check is localStorage empty, and if it's not - return the array of favorite products. If you got error - console.error

// const get = (key) => {
//   try {
//       const favItem = JSON.parse(localStorage.getItem(key))
//       errorDiv.style.display = "none"
//       favTitle.classList.add("success")
//       return  favItem
//   } catch (error) {
//     console.error("Set state error: ", error.message);
//   }
// }

// REMOVE ITEM

//this function  can read id of target element, find the closest ingredient card and remove this element from array of favorite products, then rewrite localStorage by key "Favorite_ingredients" without this element, then need to  renderCards() again 

// function removeFavIngredients(e) {
//     const {id} = e.target.closest(".fav-ingredient-item").dataset;
//     const productCur = findProduct(Number(id));
//     favIngredientsArr.splice(favIngredientsArr.indexOf(productCur,1))
//     localStorage.setItem("Favorite_ingredients", JSON.stringify(favIngredientsArr))
//     // renderCards()
//   return;
// }

//this function  can read id of target element, find the closest  cocktail card and remove this element from array of favorite products, then rewrite localStorage by key "Favorite_cocktails" without this element, then need to  renderCards() again 


// function removeFavIngredients(e) {
//     const {id} = e.target.closest(".fav-ingredient-item").dataset;
//     const productCur = findProduct(Number(id));
//     favCocktailsArr.splice(favCocktailsArr.indexOf(productCur,1))
//     localStorage.setItem("Favorite_cocktails", JSON.stringify(favCocktailsArr))
//    // renderCards()
//   return;
// }


