// import { renderCocktailModal } from './cockt-ingr-modal/render-modal-cocktail';
import axios from 'axios';
import Notiflix from 'notiflix';
import { loadFromLocal } from '../storage';

export default class CocktailAPI {
  constructor() {
    this.baseURL = 'https://drinkify-backend.p.goit.global/api/v1/';
    this.endPointIngredients = 'ingredients/';
    this.endPointCocktails = 'cocktails/';
    this.endPointLookup = 'cocktails/lookup/';
    this.endPointSearch = 'cocktails/search/';
    this.endPointCount = 'cocktails/count/';
  }

  /*
│ =============================================================
│  Запит на отримання визначеної кількості рандомних коктейлів
│ =============================================================
*/
  async fetchRandomCocktails(count) {
    const PARAMS = new URLSearchParams({
      r: count,
    });

    try {
      const response = await axios.get(
        `${this.baseURL}${this.endPointCocktails}?${PARAMS}`
      );
      const cocktailIds = response.data.map(cocktail => cocktail._id);
      return cocktailIds;
    } catch (error) {
      console.log(error.message);
    }
  }
  /*
│ =============================================================
│  Запит на отримання визначеної кількості рандомних коктейлів
│ =============================================================
*/
  async fetchRandomCocktailsNames(count) {
    const PARAMS = new URLSearchParams({
      r: count,
    });

    try {
      const response = await axios.get(
        `${this.baseURL}${this.endPointCocktails}?${PARAMS}`
      );
      const cocktailNames = response.data.map(cocktail => cocktail.drink);
      return cocktailNames;
    } catch (error) {
      console.log(error.message);
    }
  }

  //=============================
  // Запит на один коктейль по ID
  //=============================

  async fetchCocktailByID(id) {
    const PARAMS = new URLSearchParams({
      id,
    });

    try {
      const response = await axios.get(
        `${this.baseURL}${this.endPointLookup}?${PARAMS}`
      );
      const cocktailDetails = response.data;
      return cocktailDetails;
    } catch (error) {
      console.error(
        `Error fetching details for cocktail ID ${id}: ${error.message}`
      );
      return null;
    }
  }

  //===========================================================
  // Запит на отримання масив коктейлів по першим літерам назви

  async fetchCocktailByLetter(letter) {
    const PARAMS = new URLSearchParams({
      f: letter,
    });
    try {
      const response = await axios.get(
        `${this.baseURL}${this.endPointSearch}?${PARAMS}`
      );
      const cocktailDetails = response.data;
      return cocktailDetails;
    } catch (error) {
      console.error(
        `Error fetching details for cocktail starts with ${letter}: ${error.message}`
      );
      return null;
    }
  }

  //=============================================
  // Запит на отримання коктейлю за повною назвою

  async fetchCocktailByName(name) {
    const PARAMS = new URLSearchParams({
      s: name,
    });
    try {
      const response = await axios.get(
        `${this.baseURL}${this.endPointSearch}?${PARAMS}`
      );
      const cocktailDetails = response.data;
      return cocktailDetails;
    } catch (error) {
      console.error(
        `Error fetching details for cocktail starts with ${letter}: ${error.message}`
      );
      return null;
    }
  }

  //========================================
  // Отримання стартових рандомних коктейлів

  async fetchCocktail(count) {
    const cocktailIds = await this.fetchRandomCocktails(count);
    const cocktailDetailsArray = [];
    for (const cocktailId of cocktailIds) {
      const cocktailDetails = await this.fetchCocktailByID(cocktailId);
      if (cocktailDetails) {
        cocktailDetailsArray.push(cocktailDetails[0]);
      } else {
        Notiflix.Report.failure(
          'ERROR',
          'Oops! Something went wrong! Try reloading the page!',
          'Okay'
        );
        break;
      }
    }
    return cocktailDetailsArray;
  }

  //=======================================================
  // Отримання обраних коктейлів в модалці (з localStorage)

  async fetchFavorites(key) {
    const favCocktailIds = loadFromLocal(key);
    const cocktailIds = favCocktailIds;
    const cocktailDetailsArray = [];
    for (const cocktailId of cocktailIds) {
      const cocktailDetails = await this.fetchCocktailByID(cocktailId);
      if (cocktailDetails) {
        cocktailDetailsArray.push(cocktailDetails[0]);
      } else {
        Notiflix.Report.failure(
          'ERROR',
          'Oops! Something went wrong! Try reloading the page!',
          'Okay'
        );
        break;
      }
    }
    return cocktailDetailsArray;
  }

  //==========================================================
  // Отримання обраних інгридієнтів в модалці (з localStorage)

  async fetchIngrByID(id) {
    // const PARAMS = new URLSearchParams({
    //   id,
    // });
    try {
      const response = await axios.get(
        `${this.baseURL}${this.endPointIngredients}${PARAMS}`
      );
      const ingredientDetails = response.data;
      return ingredientDetails;
    } catch (error) {
      console.error(
        `Error fetching details for ingredient ID ${id}: ${error.message}`
      );
      return null;
    }
  }

  //=============================================================
  // Отримання загальної кількості коктейлів на API(для dropDown)

  async fetchTotalCountCocktails() {
    try {
      const totalCount = await axios.get(
        `${this.baseURL}${this.endPointLookup}`
      );
      const cocktailsListLength = totalCount.data.length
      return cocktailsListLength;
    } catch (error) {
      Notiflix.Report.failure(
        'ERROR',
        'Oops! Something went wrong! Try reloading the page!',
        'Okay'
      );
    }
  }
  
}

