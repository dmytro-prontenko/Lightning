function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},a={},s=t.parcelRequire02ea;null==s&&((s=function(e){if(e in o)return o[e].exports;if(e in a){var t=a[e];delete a[e];var s={id:e,exports:{}};return o[e]=s,t.call(s.exports,s,s.exports),s.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},t.parcelRequire02ea=s),s.register("d9Eh1",(function(t,o){var a=s("3hykt"),r=s("lKUAn"),n=s("5BdK9"),i=s("krGWQ"),d=s("5uEKZ"),l=s("jrD5E"),c=s("7Y9D8");i.refs.cocktailsList.addEventListener("click",(function(t){if("BUTTON"===t.target.nodeName&&"learn-more"===t.target.className){i.refs.modal.classList.toggle("is-hidden"),i.refs.body.classList.toggle("modal-open"),i.refs.body.classList.contains("modal-open")&&document.addEventListener("keydown",m);const e=t.target.closest(".cocktails-item").id;return void g.fetchCocktailByID(e).then((e=>{f.renderModalCocktail(e)}))}if("BUTTON"===t.target.nodeName&&"fav-btn"===t.target.className){console.log(t.target.nodeName);const o=t.target.closest(".cocktails-item").id;if("inStorage"===t.target.dataset.inLocalStorage)return(0,d.removeFromLocal)("cocktails",o),t.target.dataset.inLocalStorage="notInStorage",void(t.target.innerHTML=`<svg class="fav-button-svg">\n                <use xlink:href="${e(l)}#icon-footer-heart"></use>\n                </svg>`);(0,d.saveToLocal)("cocktails",t.target.closest(".cocktails-item").id),t.target.dataset.inLocalStorage="inStorage",t.target.innerHTML=`<svg class="del-btn-svg">\n                <use xlink:href="${e(l)}#icon-remove"></use>\n                </svg>`}}));const g=new(0,r.default),f=new(0,a.default);function m(e){"Escape"!==e.key||i.refs.modal.classList.contains("is-hidden")||(i.refs.modal.classList.toggle("is-hidden"),i.refs.body.classList.toggle("modal-open")),i.refs.body.classList.contains("modal-open")?document.addEventListener("keydown",m):document.removeEventListener("keydown",m)}function v(t){13===t.keyCode&&(t.target.value.length>=3?(g.fetchCocktailByName(t.target.value.trim()).then((e=>f.renderList(e))),i.refs.cocktailsTitle.scrollIntoView({behavior:"smooth"}),i.refs.searchField.value="",n.dropDownList.removeList()):e(c).Notify.failure("Enter more than two symbols!"))}document.addEventListener("keydown",m),i.refs.modal.addEventListener("click",(function(e){if("svg"===e.target.nodeName&&"js-close-modal-cockt-svg"===e.target.id||"use"===e.target.nodeName||"backdrop modal-cockt-container"===e.target.className)return i.refs.modal.classList.toggle("is-hidden"),void i.refs.body.classList.toggle("modal-open");if("BUTTON"===e.target.nodeName&&"add-to-fav"===e.target.className){const t=e.target.closest(".modal-cocktail").id;if("Remove from favorite"===e.target.textContent)return(0,d.removeFromLocal)("cocktails",t),void(e.target.textContent="Add to favorite");(0,d.saveToLocal)("cocktails",t),e.target.textContent="Remove from favorite"}"BUTTON"===e.target.nodeName&&"ingredient-list-item"===e.target.className&&(i.refs.modal.classList.toggle("is-hidden"),i.refs.modalIngredient.classList.toggle("is-hidden"),g.fetchIngrByID(e.target.dataset.ingId).then((e=>f.renderIngModal(e))))})),i.refs.modalIngredient.addEventListener("click",(function(e){if("svg"===e.target.nodeName&&"js-close-modal-ingr-svg"===e.target.id||"use"===e.target.nodeName||"backdrop modal-ing-container"===e.target.className)return i.refs.modal.classList.toggle("is-hidden"),void i.refs.modalIngredient.classList.toggle("is-hidden");if("BUTTON"===e.target.nodeName&&"add-fav-ing"===e.target.className){const t=e.target.closest(".modal-ing").id;if("Remove from favorite"===e.target.textContent)return(0,d.removeFromLocal)("ingredients",t),void(e.target.textContent="Add to favorite");(0,d.saveToLocal)("ingredients",t),e.target.textContent="Remove from favorite"}})),i.refs.burgerMenu.addEventListener("click",(function(e){if("svg"===e.target.nodeName||"use"===e.target.nodeName)return i.refs.modalBurger.classList.toggle("is-hidden"),i.refs.body.classList.toggle("modal-open"),void f.renderBurgerModal()})),i.refs.modalBurger.addEventListener("click",(function(e){if("svg"===e.target.nodeName&&"close-btn-cock-svg"===e.target.classList||"use"===e.target.nodeName||" close-btn-svg close-btn-svg-burger"===e.target.classList.value)return i.refs.modalBurger.classList.toggle("is-hidden"),void i.refs.body.classList.toggle("modal-open")})),i.refs.searchField.addEventListener("input",(function(e){i.refs.searchField.addEventListener("keydown",v)}))})),s.register("jrD5E",(function(e,t){e.exports=new URL(s("kyEFX").resolve("8OQ7p"),import.meta.url).toString()})),s("kyEFX").register(JSON.parse('{"e9ZPH":"index.5deb5cee.js","8OQ7p":"icons.7ecd8f1f.svg"}'));
//# sourceMappingURL=index.5deb5cee.js.map
