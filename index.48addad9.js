!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},o={},r=t.parcelRequire02ea;null==r&&((r=function(e){if(e in a)return a[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return a[e]=r,t.call(r.exports,r,r.exports),r.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){o[e]=t},t.parcelRequire02ea=r),r.register("1CmtT",(function(t,a){var o=r("fQ6Tz"),s=r("9hMRA"),n=r("6Iwyr"),i=r("4Nugj"),l=r("jzQFI"),d=r("i5R4m"),c=r("6JpON");i.refs.cocktailsList.addEventListener("click",(function(t){if(console.log(t.target),"BUTTON"===t.target.nodeName&&"learn-more"===t.target.className){i.refs.modal.classList.toggle("is-hidden"),i.refs.body.classList.toggle("modal-open");var a=t.target.closest(".cocktails-item").id;return void g.fetchCocktailByID(a).then((function(e){f.renderModalCocktail(e)}))}if("BUTTON"===t.target.nodeName&&"fav-btn"===t.target.className||"fav-button-svg"===t.target.className||"svg"===t.target.nodeName){console.log(t.target);var o=t.target.closest(".cocktails-item").id;if("inStorage"===t.target.dataset.inLocalStorage)return(0,l.removeFromLocal)("cocktails",o),t.target.dataset.inLocalStorage="notInStorage",void(t.target.innerHTML='<svg class="fav-button-svg">\n                <use xlink:href="'.concat(e(d),'#icon-footer-heart"></use>\n                </svg>'));(0,l.saveToLocal)("cocktails",t.target.closest(".cocktails-item").id),t.target.dataset.inLocalStorage="inStorage",t.target.innerHTML='<svg class="del-btn-svg">\n                <use xlink:href="'.concat(e(d),'#icon-remove"></use>\n                </svg>')}}));var g=new(0,s.default),f=new(0,o.default);function m(t){13===t.keyCode&&(t.target.value.length>=3?(g.fetchCocktailByName(t.target.value.trim()).then((function(e){return f.renderList(e)})),i.refs.cocktailsTitle.scrollIntoView({behavior:"smooth"}),i.refs.searchField.value="",n.dropDownList.removeList()):e(c).Notify.failure("Enter more than two symbols!"))}i.refs.modal.addEventListener("click",(function(e){if(console.log("backdrop modal-cockt-container"===e.target.className),"svg"===e.target.nodeName&&"js-close-modal-cockt-svg"===e.target.id||"use"===e.target.nodeName||"backdrop modal-cockt-container"===e.target.className)return i.refs.modal.classList.toggle("is-hidden"),void i.refs.body.classList.toggle("modal-open");if("BUTTON"===e.target.nodeName&&"add-to-fav"===e.target.className){var t=e.target.closest(".modal-cocktail").id;if("Remove from favorite"===e.target.textContent)return(0,l.removeFromLocal)("cocktails",t),void(e.target.textContent="Add to favorite");(0,l.saveToLocal)("cocktails",t),e.target.textContent="Remove from favorite"}"BUTTON"===e.target.nodeName&&"ingredient-list-item"===e.target.className&&(i.refs.modal.classList.toggle("is-hidden"),i.refs.modalIngredient.classList.toggle("is-hidden"),g.fetchIngrByID(e.target.dataset.ingId).then((function(e){return f.renderIngModal(e)})))})),i.refs.modalIngredient.addEventListener("click",(function(e){if("svg"===e.target.nodeName&&"js-close-modal-ingr-svg"===e.target.id||"use"===e.target.nodeName||"backdrop modal-ing-container"===e.target.className)return i.refs.modal.classList.toggle("is-hidden"),void i.refs.modalIngredient.classList.toggle("is-hidden");if("BUTTON"===e.target.nodeName&&"add-fav-ing"===e.target.className){var t=e.target.closest(".modal-ing").id;if("Remove from favorite"===e.target.textContent)return(0,l.removeFromLocal)("ingredients",t),void(e.target.textContent="Add to favorite");(0,l.saveToLocal)("ingredients",t),e.target.textContent="Remove from favorite"}})),i.refs.burgerMenu.addEventListener("click",(function(e){if("svg"===e.target.nodeName||"use"===e.target.nodeName)return i.refs.modalBurger.classList.toggle("is-hidden"),i.refs.body.classList.toggle("modal-open"),void f.renderBurgerModal()})),i.refs.modalBurger.addEventListener("click",(function(e){if("svg"===e.target.nodeName&&"close-btn-cock-svg"===e.target.classList||"use"===e.target.nodeName||" close-btn-svg close-btn-svg-burger"===e.target.classList.value)return i.refs.modalBurger.classList.toggle("is-hidden"),void i.refs.body.classList.toggle("modal-open")})),i.refs.searchField.addEventListener("input",(function(e){i.refs.searchField.addEventListener("keydown",m)}))})),r.register("i5R4m",(function(e,t){e.exports=r("aNJCr").getBundleURL("1Bpy6")+r("iE7OH").resolve("410VS")})),r("iE7OH").register(JSON.parse('{"1Bpy6":"index.48addad9.js","410VS":"icons.7ecd8f1f.svg"}'))}();
//# sourceMappingURL=index.48addad9.js.map