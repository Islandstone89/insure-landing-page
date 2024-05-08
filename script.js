
/* Select the open menu button */
let openMenuBtn = document.querySelector(".js-open-menu-btn");

/* Select the close menu button */
let closeMenuBtn = document.querySelector(".js-close-menu-btn");

/* Add function for toggling the menu */
function toggleMenu () {
    if (openMenuBtn.getAttribute("aria-expanded", "false")) {
        openMenuBtn.setAttribute("aria-expanded", "true")
    }
    else {
        openMenuBtn.setAttribute("aria-expanded", "false")
    }
}

/* Add event listener */

openMenuBtn.addEventListener("click", toggleMenu);

closeMenuBtn.addEventListener("click", toggleMenu);

