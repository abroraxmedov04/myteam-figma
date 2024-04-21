document.addEventListener("click", (e) => {
  if (!e.target.matches(".header__menu-btn")) return;

  let navigation = e.target.previousElementSibling;
  let overlay = navigation.previousElementSibling;

  navigation.classList.toggle("menu-show");
  e.target.classList.toggle("change-img");

  if (e.target.classList.contains("change-img")) {
    e.target.style.backgroundImage = `url("../assets/images/close-menu-btn.png")`;
    overlay.style.display = "block";
    document.body.style.overflow = "hidden";
  } else {
    e.target.style.backgroundImage = `url("../assets/images/open-menu-btn.png")`;
    overlay.style.display = "none";
    document.body.style.overflow = "visible";
  }

  overlay.addEventListener("click", () => {
    navigation.classList.remove("menu-show");
    e.target.classList.remove("change-img");
    e.target.style.backgroundImage = `url("../assets/images/open-menu-btn.png")`;
    overlay.style.display = "none";
    document.body.style.overflow = "visible";
  });
});

document.addEventListener("click", (e) => {
  if (!e.target.matches(".btn-rotate-card")) return;
  let card = e.target.closest(".clients__card");

  card.classList.toggle("active");

  let backCard = card.querySelector(".clents__card-back");
  if (card.classList.contains("active")) {
    backCard.style.opacity = "100";
    e.target.style.backgroundColor = "#f67e7e";
    e.target.style.transform = "rotate(-45deg)";
  } else {
    backCard.style.opacity = "0";
    e.target.style.backgroundColor = "#79c8c7";
    e.target.style.transform = "rotate(0)";
  }
});

const elContactForm = document.querySelector(".contact-form");
const elInputName = elContactForm.querySelector(".js-input-name");
const elInputEmail = elContactForm.querySelector(".js-input-email");
const elInputCompanyName = elContactForm.querySelector(".js-input-companyName");
const elInputTitle = elContactForm.querySelector(".js-input-title");
const elInputTextarea = elContactForm.querySelector(".js-input-textArea");




elContactForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  console.log(`Name: ${elInputName.value} \nEmail: ${elInputEmail.value} \nCompany Name: ${elInputCompanyName.value} \nTitle: ${elInputTitle.value} \nMessage: ${elInputTextarea.value}`);

});


