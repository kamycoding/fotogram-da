const GALLERY_IMAGES = [
  {
    src: "../assets/img/gallery/code-editor-workspace.jpg",
    alt: "Code editor workspace on a desk",
  },

  {
    src: "../assets/img/gallery/dark-mode-code.jpg",
    alt: "Code displayed in a dark mode editor",
  },
  {
    src: "../assets/img/gallery/debugging-console.jpg",
    alt: "Debugging console with logs on screen",
  },
  {
    src: "../assets/img/gallery/developer-desk-setup.jpg",
    alt: "Developer desk setup with laptop and monitor",
  },
  {
    src: "../assets/img/gallery/frontend-project-preview.jpg",
    alt: "Frontend project preview in a browser window",
  },
  {
    src: "../assets/img/gallery/github-version-control.jpg",
    alt: "GitHub version control interface on screen",
  },
  {
    src: "../assets/img/gallery/html-css-layout.jpg",
    alt: "HTML and CSS layout code in an editor",
  },
  {
    src: "../assets/img/gallery/javascript-code-screen.jpg",
    alt: "JavaScript code shown on a screen",
  },
  {
    src: "../assets/img/gallery/laptop-coding-session.jpg",
    alt: "Laptop during a coding session",
  },
  {
    src: "../assets/img/gallery/react-component-code.jpg",
    alt: "React component code in a code editor",
  },
  {
    src: "../assets/img/gallery/responsive-design-code.jpg",
    alt: "Responsive design code in a browser developer view",
  },
  {
    src: "../assets/img/gallery/terminal-command-line.jpg",
    alt: "Terminal command line open on a computer screen",
  },
];

const renderGallery = () => {
  const galleryElement = document.getElementById("gallery");

  galleryElement.innerHTML = GALLERY_IMAGES.map((image, index) =>
    getGalleryImageTemplate(image, index),
  ).join("");
};
