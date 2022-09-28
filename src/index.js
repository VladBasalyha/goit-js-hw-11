import PixabayImages from './js/fetch-gallerry';
import createGalleryMarkup from './js/create-galleryMarkup';
import Notiflix from 'notiflix';
import simpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import clearGalleryContainer from './js/clear-gallery-container';

export const gallery = document.querySelector('.gallery');

const refs = {
  searchImagesInput: document.querySelector('.gallery-input'),
  searchForm: document.querySelector('.search-form'),
};

const { searchImagesInput, searchForm } = refs;
export const pixabayImages = new PixabayImages();

searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();
  pixabayImages.query = e.currentTarget.elements.searchQuery.value;

  if (pixabayImages.query === '') {
    return Notiflix.Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
  }
  createGalleryMarkup();
  pixabayImages.resetPage;
  clearGalleryContainer();
}
