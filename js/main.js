const elMenuBtn = document.querySelector(".site-header__menu-btn");
const elCloseBtn = document.querySelector(".navbar__close-btn");


elMenuBtn.addEventListener("click", () => {

    elMenuBtn.closest(".site-header").classList.toggle("active");
    document.body.classList.toggle("scroll-hidden");

});

elCloseBtn.addEventListener("click", () => {

    elCloseBtn.closest(".site-header").classList.toggle("active");
    document.body.classList.toggle("scroll-hidden");

});