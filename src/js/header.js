const headerLinkFav = document.querySelector(".header-nav-link-fav")
const favMenu = document.querySelector(".header-favorite-menu")

headerLinkFav.addEventListener("click", onLinkClick)
function onLinkClick(e) {
  if (favMenu.style.display === "none") {
    favMenu.style.display = "inline-flex"
  } else if(favMenu.style.display !== "none"){
    favMenu.style.display = "none"
  }
}

favMenu.addEventListener("click", changeColor)
let activeLink
function changeColor(e) {
  const target = e.target
  if (target.classList.contains("header-fav-active")) {
    return
  } else {
    const prevActiveLink = favMenu.querySelector(".header-fav-active")
    prevActiveLink.classList.remove("header-fav-active")
    prevActiveLink.classList.add("header-fav-unactive")
    target.classList.add("header-fav-active")
    target.classList.remove("header-fav-unactive")
    activeLink = target
  }
}