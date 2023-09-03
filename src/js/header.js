const headerLinkFav = document.querySelector(".header-nav-link-fav")
const favMenu = document.querySelector(".header-favorite-menu")
import { gsap } from "gsap";

function onLinkClick() {
  if (favMenu.style.display === "none") {
    favMenu.style.display = "inline-flex";
  } else {
    favMenu.style.display = "none";
  }
};

// window.addEventListener("click", function(event) {
//   if (favMenu.style.display !== "inline-flex"){ 
//   return
//   }
//     if (event.target !== headerLinkFav) {
//    favMenu.style.display = "none";
//   }
// })

export { headerLinkFav, favMenu, onLinkClick, onBodyClick }

const container1 = document.querySelector("#container1");
const container2 = document.querySelector("#container2");
const button = headerLinkFav;
const box = favMenu;

button.addEventListener("click", onClick);

function onClick() {
  flip([box], swapPosition);
};

function swapPosition() {
  let parent = box.parentElement === container1 ? container2 : container1;
  parent.appendChild(box);
};

function flip(elements, changeFunc, vars) {
  elements = gsap.utils.toArray(elements);
  vars = vars || {};
  let tl = gsap.timeline({onComplete: vars.onComplete, delay: vars.delay || 0}),
      bounds = elements.map(el => el.getBoundingClientRect()),
      copy = {},
      p;
  elements.forEach(el => {
    el._flip && el._flip.progress(1);
    el._flip = tl;
  })
  changeFunc();
  for (p in vars) {
    p !== "onComplete" && p !== "delay" && (copy[p] = vars[p]);
  }
  copy.x = (i, element) => "0" + (bounds[i].left - element.getBoundingClientRect().left);
  copy.y = (i, element) => "-20" + (bounds[i].top - element.getBoundingClientRect().top);
  return tl.from(elements, copy);
}