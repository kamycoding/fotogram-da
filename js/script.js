const GALLERY_IMAGES = [
  {
    src: "./assets/img/newGallery/meine-ruhe.jpg",
    alt: "Meine Ruhe",
    title: "Meine Ruhe",
    description: "Feuer und frische Luft",
  },

  {
    src: "./assets/img/newGallery/meine-lieblingssucht.jpg",
    alt: "Meine Lieblingssucht",
    title: "Meine Lieblingssucht",
    description: "Dota 2",
  },

  {
    src: "./assets/img/newGallery/mein-feindbild.jpg",
    alt: "Mein Feindbild",
    title: "Mein Feindbild",
    description: "Apple-Ökosystem",
  },

  {
    src: "./assets/img/newGallery/mein-stolz.jpg",
    alt: "Mein Stolz",
    title: "Mein Stolz",
    description: "I use Linux btw",
  },

  {
    src: "./assets/img/newGallery/mein-altestes-hobby.png",
    alt: "Mein ältestes Hobby",
    title: "Mein ältestes Hobby",
    description: "Dörfer bauen",
  },

  {
    src: "./assets/img/newGallery/mein-traumauto.jpg",
    alt: "Mein Traumauto",
    title: "Mein Traumauto",
    description: "zu teuer für meinen Lifestyle",
  },

  {
    src: "./assets/img/newGallery/mein-lieblingsessen.jpg",
    alt: "Mein Lieblingsessen",
    title: "Mein Lieblingsessen",
    description: "persisches Essen",
  },

  {
    src: "./assets/img/newGallery/mein-superpower.jpg",
    alt: "Mein Superpower",
    title: "Mein Superpower",
    description: "überall arbeiten",
  },

  {
    src: "./assets/img/newGallery/mein-lieblingsmensch.jpg",
    alt: "Mein Lieblingsmensch",
    title: "Mein Lieblingsmensch",
    description: "meine Teamkollegin",
  },

  {
    src: "./assets/img/newGallery/meine-grosste-herausforderung.jpg",
    alt: "Meine größte Herausforderung",
    title: "Meine größte Herausforderung",
    description: "dieses Gesicht ablehnen",
  },

  {
    src: "./assets/img/newGallery/meine-kindheit.jpg",
    alt: "Meine Kindheit",
    title: "Meine Kindheit",
    description: "immer unterwegs",
  },

  {
    src: "./assets/img/newGallery/mein-reisetyp.jpg",
    alt: "Mein Reisetyp",
    title: "Mein Reisetyp",
    description: "laufen und verlieren",
  },
];
let currentImageIndex = 0;

const renderGallery = () => {
  const galleryElement = document.getElementById("gallery");

  galleryElement.innerHTML = GALLERY_IMAGES.map((image, index) =>
    getGalleryImageTemplate(image, index),
  ).join("");
};

const openDialog = (imageIndex) => {
  currentImageIndex = imageIndex;

  const dialogContainer = document.getElementById("dialog-container");
  const selectedImage = GALLERY_IMAGES[imageIndex];

  dialogContainer.innerHTML = getImageDialogTemplate(
    selectedImage,
    imageIndex,
    GALLERY_IMAGES.length,
  );

  const dialog = document.querySelector(".image-dialog");
  dialog.setAttribute("data-animate", "true");

  addDialogCloseEvent();
  addDialogBackgroundClickEvent();
  addDialogContentClickEvent();
  addDialogNavigationEvents();
  focusDialogCloseButton();
};

const closeDialog = () => {
  const dialogContainer = document.getElementById("dialog-container");

  dialogContainer.innerHTML = "";
};

const isDialogOpen = () => {
  const dialog = document.querySelector(".image-dialog");

  return dialog !== null;
};

const getNextImageIndex = (currentIndex) => {
  return (currentIndex + 1) % GALLERY_IMAGES.length;
};

const getPreviousImageIndex = (currentIndex) => {
  return (currentIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length;
};

const addDialogCloseEvent = () => {
  const closeButton = document.querySelector(".image-dialog__close-button");

  closeButton.addEventListener("click", closeDialog);
};

const focusDialogCloseButton = () => {
  const closeButton = document.querySelector(".image-dialog__close-button");

  closeButton.focus();
};

const navigateToImage = (newIndex) => {
  const image = GALLERY_IMAGES[newIndex];
  const imageElement = document.querySelector(".image-dialog__image");
  const titleElement = document.querySelector(".image-dialog__title");
  const descriptionElement = document.querySelector(
    ".image-dialog__description",
  );
  const counterElement = document.querySelector(".image-dialog__counter");

  imageElement.src = image.src;
  imageElement.alt = image.alt;
  titleElement.textContent = image.title;
  if (descriptionElement) {
    descriptionElement.textContent = image.description;
  }
  counterElement.textContent = `${newIndex + 1}/${GALLERY_IMAGES.length}`;

  currentImageIndex = newIndex;
};

const addDialogNavigationEvents = () => {
  const previousButton = document.querySelector(
    ".image-dialog__control-button:first-child",
  );
  const nextButton = document.querySelector(
    ".image-dialog__control-button:last-child",
  );

  previousButton.addEventListener("click", () => {
    navigateToImage(getPreviousImageIndex(currentImageIndex));
  });

  nextButton.addEventListener("click", () => {
    navigateToImage(getNextImageIndex(currentImageIndex));
  });
};

const addDialogBackgroundClickEvent = () => {
  const dialog = document.querySelector(".image-dialog");

  dialog.addEventListener("click", closeDialog);
};

const addDialogContentClickEvent = () => {
  const dialogContent = document.querySelector(".image-dialog__content");

  dialogContent.addEventListener("click", (event) => {
    event.stopPropagation();
  });
};

const addEscapeKeyEvent = () => {
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeDialog();
      return;
    }

    if (!isDialogOpen()) {
      return;
    }

    if (event.key === "ArrowRight") {
      navigateToImage(getNextImageIndex(currentImageIndex));
      return;
    }

    if (event.key === "ArrowLeft") {
      navigateToImage(getPreviousImageIndex(currentImageIndex));
    }
  });
};

const addGalleryClickEvents = () => {
  const galleryCards = document.querySelectorAll(".gallery-card");

  galleryCards.forEach((galleryCard) => {
    galleryCard.addEventListener("click", () => {
      const imageIndex = Number(galleryCard.dataset.imageIndex);

      openDialog(imageIndex);
    });
  });
};

const init = () => {
  renderGallery();
  addGalleryClickEvents();
  addEscapeKeyEvent();
};

init();
