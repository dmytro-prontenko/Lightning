const headerLinkFav = document.querySelector(".header-nav-link-fav")
const favMenu = document.querySelector(".header-favorite-menu")

function onLinkClick() {
  if (favMenu.style.display === "none") {
    favMenu.style.display = "inline-flex"
  } else if(favMenu.style.display !== "none"){
    favMenu.style.display = "none"
  }
}
export {headerLinkFav, favMenu, onLinkClick}
