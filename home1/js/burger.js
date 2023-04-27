// $(".menu-btn").on("click", function (e) {
//   e.preventDefault();
//   $(this).toggleClass("menu-btn_active");
//   $(".menu-nav").toggleClass("menu-nav_active");
// });
const menuNav = document.querySelector(".menu-nav");
const menuBar = document.querySelector(".menu-btn");
menuBar.addEventListener('click', openBurger);
function openBurger() {
    
    menuBar.classList.toggle("menu-btn_active"); 
    menuNav.classList.toggle("menu-nav_active");
}