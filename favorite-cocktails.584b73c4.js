!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},n={},r=t.parcelRequire02ea;null==r&&((r=function(e){if(e in a)return a[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return a[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequire02ea=r),r("iE7OH").register(JSON.parse('{"iXZug":"favorite-cocktails.584b73c4.js","410VS":"icons.7ecd8f1f.svg","lBgoX":"favorite-ingridients.88482c10.js","1Bpy6":"index.48addad9.js"}'));var i,o=r("9hMRA"),s=r("fQ6Tz"),l=r("XNrI6"),c=r("4Nugj"),f=r("jzQFI");i=r("aNJCr").getBundleURL("iXZug")+r("iE7OH").resolve("410VS");var d=new(0,o.default),u=new(0,s.default);d.fetchFavorites("cocktails").then((function(e){u.renderFavCocktailPage(e)})),l.btnUp.addEventListener(),c.refs.favCocktailsList.addEventListener("click",(function(t){if("BUTTON"===t.target.nodeName&&t.target.classList.contains("fav-btn-del")||"svg"===t.target.nodeName&&"del-btn-svg"===t.target.id||"use"===t.target.nodeName){var a=c.refs.favCocktailsList.children,n=!0,r=!1,o=void 0;try{for(var s,l=function(a,n){var r=n.value;r.id===t.target.closest(".cocktails-item").id&&((0,f.removeFromLocal)("cocktails",r.id),r.style.opacity="0",setTimeout((function(){r.style.display="none"}),500),0===(0,f.loadFromLocal)("cocktails").length&&(c.refs.favCocktailsList.innerHTML='<li class="error">\n                <svg class="fav-svg">\n                  <use xlink:href="'.concat(e(i),'#icon-error-cocktails"></use>\n                </svg>\n                <h2 class="fav-error-text">\n                  You haven\'t added any <br />\n                  <span class="fav-error-span">favorite cocktails</span> yet\n                </h2>\n              </li>')))},d=a[Symbol.iterator]();!(n=(s=d.next()).done);n=!0)l(0,s)}catch(e){r=!0,o=e}finally{try{n||null==d.return||d.return()}finally{if(r)throw o}}}})),r("i8Q71"),r("32ZrB"),r("1CmtT"),r("XNrI6"),r("6Iwyr"),r("9hMRA"),r("fQ6Tz")}();
//# sourceMappingURL=favorite-cocktails.584b73c4.js.map