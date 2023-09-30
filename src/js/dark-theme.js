import { refsDark } from './refs.js';
import { refs } from './refs.js';
let toggleDark;
function setDark() {
  const serializedState = localStorage.getItem('toggle');
  toggleDark = serializedState === null ? [] : JSON.parse(serializedState);
  console.log(toggleDark);
  if (!toggleDark) {
    return;
  } else {
    changeThemeColor();
  }
}
setDark();

refs.modalBurger.addEventListener('click', onModalBurgerClick);
function onModalBurgerClick(event) {
  if (event.target.classList.contains('burger-checkbox')) {
    toggleDarkMode();
    return;
  }
}
// -----------------------------
refsDark.darkToggle.addEventListener('click', toggleDarkMode); // перемикає тему
function toggleDarkMode() {
  console.log('clickdark');
  // --- сoctails
  toggleDark = !toggleDark;
  console.log(toggleDark);
  localStorage.setItem('toggle', JSON.stringify(toggleDark));
  changeThemeColor();
}
function changeThemeColor() {
  // ------------------------

  // const cocktlist = refsDark.cocktailsList.children;
  // for (const el of cocktlist) {
  //   if (
  //     !el.classList.contains('error') ||
  //     !el.classList.contains('dark-cocktails-item')
  //   ) {
  //     el.classList.toggle('dark-cocktails-item');
  //   }
  // }

  refsDark.body.classList.toggle('dark-theme');
  // --------- header

  refsDark.headerNavLink.classList.toggle('dark-white');
  refsDark.headerLogo.classList.toggle('dark-white');
  refsDark.headerMenuSvg.classList.toggle('dark-white');
  refsDark.headerNavLinkFav.classList.toggle('dark-white');
  refsDark.svgSearch.classList.toggle('dark-white');
  refsDark.toggleSwitch.classList.toggle('dark-toggle-switch');

  refsDark.herotitle?.classList.toggle('dark-white');
  refsDark.herotext?.classList.toggle('dark-white');
  refsDark.heroImgText?.classList.toggle('dark-white');
  refsDark.iconHeroStarOne?.classList.toggle('dark-white');
  refsDark.iconHeroStarTwo?.classList.toggle('dark-white');

  refsDark.cocktailsSectionTitle.classList.toggle('dark-white');
}
