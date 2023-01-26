import { galleryItems } from "./gallery-items.js";
console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const createGallery = galleryItems
  .map((img) => {
    return `
<div class="gallery__item">
  <a class="gallery__link" href="${img.original}">
    <img
      class="gallery__image"
      src="${img.preview}"
      data-source="${img.original}"
      alt="${img.description}"
    />
  </a>
</div>
      `;
  })
  .join("");
gallery.innerHTML = createGallery;

gallery.addEventListener("click", onCreateImgOnListItem);

function onCreateImgOnListItem(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const activeFullScreenImg = basicLightbox.create(
    ` <img src="${evt.target.dataset.source}">`
  );
  activeFullScreenImg.show();

  gallery.addEventListener("keydown", onCloseModalImg);

  function onCloseModalImg(evt) {
    if (evt.code !== "Escape") {
      return;
    }
    activeFullScreenImg.close();
  }
}
