document.addEventListener("click", (e) => {
  if (!e.target.matches(".header__menu-btn")) return;

  let navigation = e.target.previousElementSibling;
  let overlay = navigation.previousElementSibling;

  navigation.classList.toggle("menu-show");
  e.target.classList.toggle("change-img");

  if (e.target.classList.contains("change-img")) {
    e.target.style.backgroundImage = `url("../assets/images/close-menu-btn.png")`;
    overlay.style.display = "block";
  } else {
    e.target.style.backgroundImage = `url("../assets/images/open-menu-btn.png")`;
    overlay.style.display = "none";
  }

  overlay.addEventListener("click", () => {
    navigation.classList.remove("menu-show");
    e.target.classList.remove("change-img");
    e.target.style.backgroundImage = `url("../assets/images/open-menu-btn.png")`;
    overlay.style.display = "none";
  });
});
