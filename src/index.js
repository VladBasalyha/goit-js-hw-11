import PixabayImages from './js/fetch-gallerry';
import { lightbox } from './js/gallery-slider';
import createGalleryMarkup from './js/create-galleryMarkup';
import Notiflix from 'notiflix';
import simpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import clearGalleryContainer from './js/clear-gallery-container';
import PixabayImages from './js/fetch-gallerry';
import createScrollMarkup from './js/infini-scroll-images-markup';

export const gallery = document.querySelector('.gallery');

const refs = {
  searchImagesInput: document.querySelector('.gallery-input'),
  searchForm: document.querySelector('.search-form'),
  sentinel: document.querySelector('.sentinel'),
};

const { searchImagesInput, searchForm, sentinel } = refs;
export const pixabayImages = new PixabayImages();

searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();
  pixabayImages.resetPage();

  pixabayImages.query = e.currentTarget.elements.searchQuery.value;

  clearGalleryContainer();
  createGalleryMarkup();
  lightbox.refresh();
  if (pixabayImages.query === '') {
    return Notiflix.Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
  }
  sentinel.classList.add('loading');
}
const onEntry = entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && pixabayImages.query !== '') {
      pixabayImages.incrementPage();
      createScrollMarkup();
    }
  });
};
const options = {
  rootMargin: '1000px',
};

const observer = new IntersectionObserver(onEntry, options);
observer.observe(sentinel);
console.log(sentinel);
const lightbox = new SimpleLightbox('.photo-card a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});
console.log(lightbox);
