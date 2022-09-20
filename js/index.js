const notifyBar = document.querySelector(".notification-bar");
const header = document.querySelector(".header");

toggleNotifyClose = () => {
  notifyBar.style.display = "none";
  header.classList.add("is_notifyClose");
};

// setTimeout(toggleNotifyClose, 10000);

window.addEventListener("scroll", () => {
  header.classList.add("is_notifyClose");
});

toggleNotify = () => {
  toggleNotifyClose();
  header.classList.add("is_notifyClose");
};

// mobileBtn;

const navbarMenu = document.querySelector(".navbar-menu");
const mobileBtn = document.querySelector(".mobile-btn");

toggleMobileBtn = () => {
  navbarMenu.classList.toggle("is_active");
  mobileBtn.classList.toggle("is_MobileIcon");
};
// langBtn

const langMenu = document.querySelector(".lang-menu");

langBtn = () => {
  langMenu.classList.toggle("is_lang");
};

//swaper

// Aos


