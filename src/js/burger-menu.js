export function initializeBurgerMenu() {
  const burgerBtn = document.querySelector(".header__burger");
  const mobileMenu = document.querySelector(".header__mobile-menu");
  const mobileMenuLinks = document.querySelectorAll(
    ".header__mobile-menu-link"
  );

  burgerBtn.addEventListener("click", () => {
    burgerBtn.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  });

  mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      console.log(link);
      burgerBtn.classList.remove("active");
      mobileMenu.classList.remove("active");
      const targetSectionId = link.getAttribute("data-id");
      const targetSection = document.getElementById(targetSectionId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}
