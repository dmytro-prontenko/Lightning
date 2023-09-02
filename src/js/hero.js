import { refs } from './refs';
import { gsap } from "gsap";
// import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
// gsap.registerPlugin(DrawSVGPlugin);




// При введенні  символів у полі пошуку коктейлів  тьотя зміщується праворуч ;)

refs.searchField.addEventListener('input', moveCard);

function moveCard() {
    // "to" tween (animate to provided values)
gsap.to(".images-wrapper", { // selector text, Array, or object
  x: 400, // any properties (not limited to CSS)

  duration: 1, // seconds
  delay: 0.5,

});
    
}


// Додати до drop-down

function moveCardBack() {
gsap.from(".images-wrapper", {
    onReverseComplete: moveCard,
});
}


