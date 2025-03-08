// Variables
let menu = document.querySelector(".jsMenu")
let ul = document.querySelector("ul")

menu.addEventListener("click", () => {
  ul.classList.toggle("show-nav")
})

window.addEventListener("resize", () => {
  if (window.innerWidth > 960) {
    ul.classList.remove("show-nav")
  }
})