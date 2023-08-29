import axios from 'axios';
import Notiflix from 'notiflix';

// const URL = 'https://pixabay.com/api/'
// const KEY = '39007065-0db3fa1240dd246ce2d69362f'


export async function fetchCocktail() {
    const PARAMS = new URLSearchParams({
        key: KEY,
        
    });
    let cocktail;
    try {
        const response = await axios.get(`${URL}?${PARAMS}`)
        cocktail = response
        return cocktail;
    } catch (error) {
        Notiflix.Report.failure(
            'ERROR',
            'Oops! Something went wrong! Try reloading the page!',
            'Okay'
        );
        return null;
    }
};