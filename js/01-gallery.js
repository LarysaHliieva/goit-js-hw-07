import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

galleryContainer.addEventListener("click", onImageClick);

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) =>
        `
      <div class="gallery__item">
        <a
          class="gallery__link"
          href="${original}"
          rel="noopener noreferrer nofollow"

        >
          <img
            class="gallery__image"
            src="${preview}"
            data-sorce="${original}"
            alt="${description}"
          />
        </a>
      </div>
    `).join('');
}

function onImageClick(e) {
    e.preventDefault();
    
    if (e.target.nodeName !== "IMG") {
        return;
    }

    console.log(e.target.dataset.sorce);
}

