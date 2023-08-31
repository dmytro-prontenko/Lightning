// import { renderCocktailModal } from './cockt-ingr-modal/render-modal-cocktail';
import axios from 'axios';
import Notiflix from 'notiflix';
import Render from './render';

export default class CocktailAPI {
  constructor() {
    this.baseURL = 'https://drinkify-backend.p.goit.global/api/v1/cocktails/';
    this.endPointLookup = '/lookup/';
    this.endPointSearch = '/search/';
    this.startCocktailsQuant = {r: 9};
  }
//==============================================
  async fetchRandomCocktails() {
    const PARAMS = new URLSearchParams({
      r: this.startCocktailsQuant.r,
    });

    try {
      const response = await axios.get(`${this.baseURL}?${PARAMS}`);
      const cocktailIds = response.data.map(cocktail => cocktail._id);
      return cocktailIds;
    } catch (error) {
      console.log(error.message);
    }
  }
//==============================================
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
//==============================================
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
//==============================================NEW
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
//==============================================
  async fetchCocktail() {
    const cocktailIds = await this.fetchRandomCocktails();
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
}

// TODO перенести на елементи

// TODO =======================

