import axios from 'axios';
import Notiflix from 'notiflix';
const API_KEY = '30146257-64982587d71520e4d5095fa16';

export default class PixabayImages {
  constructor() {
    this.searchQuery = '';
  }
  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  getGalleryImages(name) {
    return axios
      .get(
        `https://pixabay.com/api/?key=${API_KEY}&q=${name}&image_type=photo&orientation=horizontal&safesearch=false&per_page=40`
      )
      .then(response => {
        Notiflix.Notify.success(
          `Hooray! We found ${response.data.totalHits} images.`
        );
        return response.data.hits;
      });
  }
}
