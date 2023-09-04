import { refsDark } from './refs.js';
import { refs } from './refs.js';


refs.modalBurger.addEventListener('click', onModalBurgerClick);
function onModalBurgerClick(event) {
  if (
    event.target.classList.contains('burger-checkbox')
  ) {
    toggleDarkMode();
    return;
  }
}
// -----------------------------
refsDark.darkToggle.addEventListener('click', toggleDarkMode); // перемикає тему
function toggleDarkMode() {
  
  // --- сoctails

const cocktlist = refsDark.cocktailsList.children 
  for (const el of cocktlist) {
    if (!el.classList.contains("error")) {
      el.classList.toggle("dark-cocktails-item")
    }
  }
  // ------------------------
  refsDark.body.classList.toggle('dark-theme');
  
  refsDark.headerMenuSvg.classList.toggle('dark-white');
  refsDark.headerNavLinkFav.classList.toggle('dark-white');
  refsDark.svgSearch.classList.toggle('dark-white');
  refsDark.toggleSwitch.classList.toggle('dark-toggle-switch');
  
  refsDark.herotitle.classList.toggle('dark-white');
  refsDark.herotext.classList.toggle('dark-white');
  refsDark.heroImgText.classList.toggle('dark-white');
  refsDark.iconHeroStarOne.classList.toggle('dark-white');
  refsDark.iconHeroStarTwo.classList.toggle('dark-white');

  refsDark.cocktailsSectionTitle.classList.toggle('dark-white'); 
  

}






