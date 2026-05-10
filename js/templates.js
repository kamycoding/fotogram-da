const getGalleryImageTemplate = (image, index) => {
  return `
    <button class="gallery-card" type="button" data-image-index="${index}" aria-label="Open ${image.alt}">
      <img class="gallery-card__image" src="${image.src}" alt="${image.alt}">
    </button>
  `;
};

const getImageDialogTemplate = (image, index, totalImages) => {
  return /*html*/ `
    <div class="image-dialog" role="dialog" aria-modal="true" aria-label="Image dialog: ${image.title}">
      <div class="image-dialog__content">
        <div class="image-dialog__header">
          <div class="image-dialog__header-text">
            <h2 class="image-dialog__title">${image.title}</h2>
            ${image.description ? `<p class="image-dialog__description">${image.description}</p>` : ""}
          </div>
          <button class="image-dialog__close-button" type="button" aria-label="Close image dialog">
            <img
              class="image-dialog__close-icon"
              src="./assets/icons/close-icon.svg"
              alt=""
              aria-hidden="true"
             >
          </button>
        </div>

        <img class="image-dialog__image" src="${image.src}" alt="${image.alt}">

        <div class="image-dialog__controls">
          <button class="image-dialog__control-button" type="button" aria-label="Show previous image">
            <img
              class="image-dialog__control-icon"
              src="./assets/icons/arrow-left.svg"
              alt=""
              aria-hidden="true"
            >
          </button>

          <span class="image-dialog__counter">${index + 1}/${totalImages}</span>

          <button class="image-dialog__control-button" type="button" aria-label="Show next image">
            <img
              class="image-dialog__control-icon"
              src="./assets/icons/arrow-right.svg"
              alt=""
              aria-hidden="true"
            >
          </button>
        </div>
      </div>
    </div>
  `;
};
