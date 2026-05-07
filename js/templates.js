const getGalleryImageTemplate = (image, index) => {
  return `
    <button class="gallery-card" type="button" data-image-index="${index}" aria-label="Open ${image.alt}">
      <img class="gallery-card__image" src="${image.src}" alt="${image.alt}">
    </button>
  `;
};

const getImageDialogTemplate = (image, index, totalImages) => {
  return /*html*/ `
    <div class="image-dialog" role="dialog" aria-modal="true" aria-label="${image.alt}">
      <div class="image-dialog__content">
        <div class="image-dialog__header">
          <h2 class="image-dialog__title">${image.alt}</h2>
          <button class="image-dialog__close-button" type="button" aria-label="Close image dialog">
            ×
          </button>
        </div>

        <img class="image-dialog__image" src="${image.src}" alt="${image.alt}">

        <div class="image-dialog__controls">
          <button class="image-dialog__control-button" type="button" aria-label="Show previous image">
            ←
          </button>

          <span class="image-dialog__counter">${index + 1}/${totalImages}</span>

          <button class="image-dialog__control-button" type="button" aria-label="Show next image">
            →
          </button>
        </div>
      </div>
    </div>
  `;
};
