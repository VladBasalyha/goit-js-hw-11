import PixabayImages from './js/fetch-gallerry';
const searchImagesInput = document.querySelector('.gallery-input');
const gallery = document.querySelector('.gallery');
const searchForm = document.querySelector('.search-form');

const pixabayImages = new PixabayImages();

searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  pixabayImages.getGalleryImages(e.currentTarget.value).then(data =>
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
<img src="${largeImageURL}" alt="${tags}" width = 300 height = 240 loading="lazy" />
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
        gallery.insertAdjacentHTML('beforeend', markup);
      }
    )
  );
  e.preventDefault();
  console.log();
}
