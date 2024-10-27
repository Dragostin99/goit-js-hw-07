import { galleryItems } from './gallery-items.js';
console.log(galleryItems);
// Change code below this line


const gallery = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);
gallery.innerHTML = galleryMarkup;


function createGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
                <a class="gallery__link" href="${original}">
                  <img
                    class="gallery__image"
                    src="${preview}"
                    alt="${description}"
                  />
                </a>
              </li>`;
    })
    .join('');
}


const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt', 
  captionDelay: 250,   
});
