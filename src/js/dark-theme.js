import { refsDark } from './refs.js';

const darkToggle = document.querySelector('.toggle-checkbox');


// darkToggle.addEventListener('click', toggleDarkTheme);

// function toggleDarkTheme() {
//     for (const key in refsDark) {
//         const element = refsDark[key];
//         element.classList.toggle('dark-theme');
//     }
// }

function convertToArray(obj) {
  return Object.values(obj);
}

const arrayRefsDark = convertToArray(refsDark);
darkToggle.addEventListener('click', addDarkTheme);

function addDarkTheme() {
  Object.values(refsDark).forEach((item) => {
    item.classList.toggle('dark-theme');
  });
}




