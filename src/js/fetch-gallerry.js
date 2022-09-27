import axios from 'axios';
const API_KEY = '30146257-64982587d71520e4d5095fa16';

export default class PixabayImages {
  constructor() {
    this.searchQuery = '';
  }
  getGalleryImages(name) {
    return axios
      .get(
        `https://pixabay.com/api/?key=${API_KEY}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40`
      )
      .then(response => response.data.hits);
  }
  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
