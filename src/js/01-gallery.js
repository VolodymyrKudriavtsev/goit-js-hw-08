// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
console.log(galleryItems);

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
  gallery: document.querySelector('.gallery'),
};

refs.gallery.insertAdjacentHTML('beforeend', makeGalleryMarkup(galleryItems));

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

refs.gallery.addEventListener('click', onGalleryItemClick);

function makeGalleryMarkup(items) {
  return items
    .map(({ original, preview, description }) => {
      return `           
            <a class="gallery__link" href="${original}">
                <img
                    src="${preview}"
                    alt="${description}"
                    class="gallery__image"
                />
            </a>            
            `;
    })
    .join('');
}

function onGalleryItemClick(e) {
  if (e.target === e.currentTarget) return;
  e.preventDefault();
}
