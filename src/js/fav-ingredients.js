// const errorDiv = document.querySelector(".error")
// const ingredientsList = document.querySelector(".fav-ingredients-list");
// const favTitle = document.querySelector(".fav-title")

// const get = (key) => {
//   try {
//       const favIngredients = JSON.parse(localStorage.getItem(key))
//       errorDiv.style.display = "none"
//       favTitle.classList.add("success")
//       return  favIngredients
//   } catch (error) {
//     console.error("Set state error: ", error.message);
//   }
// }

// const ingredientsMarkup = get("Favorite_ingredients").map(({Id, description, type, name})=>
//   `  <li class="fav-ingredient-item " data-id="${Id}">
//       <h3 class="fav-paragraph-title">${name}</h3>
//       <h4 class="fav-title-type">${type}</h4>
//       <p class="paragraph-text">${description}</p>
//       <div class="fav-buttons-div">
//       <button type="submit" class="learn-more-button">Learn More</button>
//       <button type="submit" class="remove-button">
//      <svg class="fav-cocktails-remove">
// //           <use href="./icons.svg#" class="fav-svg"></use>
// //       </svg>
//      </button>
//       </div>
//     </li>`).join(``)
// ingredientsList.innerHTML = ingredientsMarkup

// export {get}