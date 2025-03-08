document.addEventListener("DOMContentLoaded", () => {
  // Variables
  let menu = document.querySelector(".jsMenu");
  let ul = document.querySelector("ul");

  // Toggle nav menu visibility on small screens
  menu.addEventListener("click", () => {
    ul.classList.toggle("show-nav");
  });

  // Remove nav menu when screen is resized outside of media query
  window.addEventListener("resize", () => {
    if (window.innerWidth > 960 && ul.classList.contains("show-nav")) {
      ul.classList.remove("show-nav");
    }
  });
});
