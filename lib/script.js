		// Select DOM Items
const menuToggle = document.getElementById("mobile-menu");
const popupNav = document.getElementById("popup-nav");
const closeBtn = document.getElementById("close-btn");

// Set Initial State Of Menu
let showMenu = false;

menuToggle.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    popupNav.classList.add("active");
    showMenu = true;
  } else {
    popupNav.classList.remove("active");
    showMenu = false;
  }
}