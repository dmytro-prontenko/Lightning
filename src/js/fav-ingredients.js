<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./css/main.css" />
    <title>Page title</title>
  </head>
        <body>      
    <include src="./partials/header.html"></include>
    <main class="main-section">

      <section class="galery section">
        <div class="container">
          <h1 class="fav-title">Favorite ingredients</h1>
          <ul class="fav-ing-list list">
          </ul>
        </div>
            </section>
        <include src="./partials/container.html"></include>
    </main>
    <include src="./partials/footer.html"></include>
    <include src="./partials/modal.html"></include>
    <script type="module" src="./index.js"></script>
  </body>
</html>


























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