const GALLERY_IMAGES = [
  {
    src: "./assets/img/gallery/code-editor-workspace.jpg",
    alt: "Code editor workspace on a desk",
    title: "Code editor workspace",
  },

  {
    src: "./assets/img/gallery/dark-mode-code.jpg",
    alt: "Code displayed in a dark mode editor",
    title: "Dark mode code",
  },

  {
    src: "./assets/img/gallery/debugging-console.jpg",
    alt: "Debugging console with logs on screen",
    title: "Debugging console",
  },

  {
    src: "./assets/img/gallery/developer-desk-setup.jpg",
    alt: "Developer desk setup with laptop and monitor",
    title: "Developer desk setup",
  },

  {
    src: "./assets/img/gallery/frontend-project-preview.jpg",
    alt: "Frontend project preview in a browser window",
    title: "Frontend project preview",
  },

  {
    src: "./assets/img/gallery/github-version-control.jpg",
    alt: "GitHub version control interface on screen",
    title: "GitHub version control",
  },

  {
    src: "./assets/img/gallery/html-css-layout.jpg",
    alt: "HTML and CSS layout code in an editor",
    title: "HTML and CSS layout",
  },

  {
    src: "./assets/img/gallery/javascript-code-screen.jpg",
    alt: "JavaScript code shown on a screen",
    title: "JavaScript code screen",
  },

  {
    src: "./assets/img/gallery/laptop-coding-session.jpg",
    alt: "Laptop during a coding session",
    title: "Laptop coding session",
  },

  {
    src: "./assets/img/gallery/react-component-code.jpg",
    alt: "React component code in a code editor",
    title: "React component code",
  },

  {
    src: "./assets/img/gallery/responsive-design-code.jpg",
    alt: "Responsive design code in a browser developer view",
    title: "Responsive design code",
  },

  {
    src: "./assets/img/gallery/terminal-command-line.jpg",
    alt: "Terminal command line open on a computer screen",
    title: "Terminal command line",
  },
];

const renderGallery = () => {
  const galleryElement = document.getElementById("gallery");

  galleryElement.innerHTML = GALLERY_IMAGES.map((image, index) =>
    getGalleryImageTemplate(image, index),
  ).join("");
};

const openDialog = (imageIndex) => {
  const dialogContainer = document.getElementById("dialog-container");
  const selectedImage = GALLERY_IMAGES[imageIndex];

  dialogContainer.innerHTML = getImageDialogTemplate(
    selectedImage,
    imageIndex,
    GALLERY_IMAGES.length,
  );
};

const closeDialog = () => {
  const dialogContainer = document.getElementById("dialog-container");

  dialogContainer.innerHTML = "";
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
};

init();
