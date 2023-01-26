import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const createGalleryItem = galleryItems
  .map(({ preview, original, description }) => {
    return `
    <a class="gallery__item" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    title="${description}"
  />
</a>
`;
  })
  .join("");

gallery.innerHTML = createGalleryItem;
gallery.addEventListener("click", onClickOpenFullImg);

function onClickOpenFullImg(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  const lightbox = new SimpleLightbox(".gallery__item", {
    captionDelay: 250,
  });
}
