import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
            `<a class="gallery_item" href="${original}"><img class="gallery_image" src="${preview}" alt="${description}" />
        </a>`
    )
    .join('');
}

galleryEl.insertAdjacentHTML('afterbegin', createGalleryMarkup(galleryItems));

new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
