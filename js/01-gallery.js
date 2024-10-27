import { galleryItems } from './gallery-items.js';
console.log(galleryItems);
// Change code below this line





const gallery = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);
gallery.innerHTML = galleryMarkup;

function createGalleryMarkup(items) {
  return items.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
              <a class="gallery__link" href="${original}">
                <img
                  class="gallery__image"
                  src="${preview}"
                  data-source="${original}"
                  alt="${description}"
                />
              </a>
            </li>`;
  }).join('');
}

gallery.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(event) {
  event.preventDefault();
  const isGalleryImage = event.target.classList.contains('gallery__image');
  if (!isGalleryImage) return;

  const largeImageURL = event.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${largeImageURL}" width="800" height="600">
  `);

  instance.show();

  document.addEventListener('keydown', onEscKeyPress);

  function onEscKeyPress(event) {
    if (event.code === 'Escape') {
      instance.close();
      document.removeEventListener('keydown', onEscKeyPress);
    }
  }
}