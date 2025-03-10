export function initializeTabs() {
  const tabBtn = document.querySelectorAll("[data-tab]");
  const contentBoxes = document.querySelectorAll("[data-tab-content]");
  const tabButtons = document.querySelectorAll(".content__tabs-btn");

  tabBtn.forEach((item) => {
    item.addEventListener("click", function () {
      const contentBox = document.querySelector("#" + this.dataset.tab);

      contentBoxes.forEach((box) => {
        if (box !== contentBox) {
          box.classList.remove("content__gallery-visible");
          box.classList.add("content__gallery-hidden");
        }
      });

      setTimeout(() => {
        contentBox.classList.remove("content__gallery-hidden");
        contentBox.classList.add("content__gallery-visible");
      }, 50);
    });
  });

  //-------------------------------------------------------------------

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
    });
  });
}
