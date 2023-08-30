import { refs } from '../refs';
import Notiflix from 'notiflix';

export default class LocalStorage {
  constructor() {
    this._storage = localStorage;
  }

  set item(value) {
    try {
      this._storage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error while setting item: ${error.message}`);
    }
  }

  get item() {
    try {
      const item = this._storage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error(`Error while getting item: ${error.message}`);
      return null;
    }
  }

  removeItem(key) {
    try {
      this._storage.removeItem(key);
    } catch (error) {
      console.error(`Error while removing item: ${error.message}`);
    }
  }
}


// TODO при натисканні на favorite робити запит на локал, перевіряти на пустоту

