
/* Select the open menu button */
let openMenuBtn = document.querySelector(".js-open-menu-btn");

/* Select the close menu button */
let closeMenuBtn = document.querySelector(".js-close-menu-btn");

/* Add function for opening the menu */
function openMenu () {
   openMenuBtn.setAttribute("aria-expanded", "true")
   openMenuBtn.classList.toggle("hide")
}

/* Add function for closing the menu */
function closeMenu () {
   openMenuBtn.setAttribute("aria-expanded", "false")
   openMenuBtn.classList.toggle("hide")
}

/* Add event listeners */

openMenuBtn.addEventListener("click", openMenu);

closeMenuBtn.addEventListener("click", closeMenu);

