const getGalleryImageTemplate = (image, index) => {
  return `
    <button class="gallery-card" type="button" data-image-index="${index}" aria-label="Open ${image.alt}">
      <img class="gallery-card__image" src="${image.src}" alt="${image.alt}">
    </button>
  `;
};
