const hamburgerMenu = document.querySelector(".hambuger-menu");

const hamburgerMenuOpenBtn = document.querySelector("#open-btn");

const hamburgerMenuCloseBtn = document.querySelector("#close-btn");

const menuItemsEl = document.querySelector(".menu-items");

const hamburgerMenuUserSection = document.querySelector(".user-section");

const hamburgerMenuNavLinks = menuItemsEl.querySelectorAll(".nav-item");

const dishesEl = document.querySelector(".dishes");

hamburgerMenuOpenBtn.addEventListener("click", () => {
  hamburgerMenuOpenBtn.style.display = "none";
  hamburgerMenuCloseBtn.style.display = "block";

  menuItemsEl.style.display = "flex";
  hamburgerMenu.style.padding = "0.5rem 0.5rem 1rem 0.5rem";
  hamburgerMenuUserSection.style.display = "flex";
});

hamburgerMenuCloseBtn.addEventListener("click", () => {
  hamburgerMenuCloseBtn.style.display = "none";
  hamburgerMenuOpenBtn.style.display = "block";
  menuItemsEl.style.display = "none";
  hamburgerMenuUserSection.style.display = "none";
  hamburgerMenu.style.padding = "";
});

hamburgerMenuNavLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    hamburgerMenuCloseBtn.click();
  });
});
