import PixabayImages from './fetch-gallerry';
import { pixabayImages } from '../index';
import { gallery } from '../index';

export default function createGalleryMarkup() {
  pixabayImages.getGalleryImages(pixabayImages.query).then(data =>
    data.map(
      ({
        likes,
        comments,
        webformatURL,
        largeImageURL,
        tags,
        views,
        downloads,
      }) => {
        const markup = `
   <div class="photo-card">
<img src="${largeImageURL}" alt="${tags}" width = 400 height = 300 loading="lazy" />
<div class="info">
  <p class="info-item">
    <b>Likes ${likes}</b>
  </p>
  <p class="info-item">
    <b>Views ${views}</b>
  </p>
  <p class="info-item">
    <b>Comments ${comments}</b>
  </p>
  <p class="info-item">
    <b>Downloads ${downloads}</b>
  </p>
</div>
</div>`;
        gallery.insertAdjacentHTML('afterbegin', markup);
      }
    )
  );
}
