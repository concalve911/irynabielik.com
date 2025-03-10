export function initializeSliderModal() {
  const images = document.querySelectorAll(".content__gallery-img");
  const sliderModal = document.querySelector(".slider__modal");
  const img = document.querySelector(".slider__modal-image");
  const closeButton = document.querySelector(".slider__modal-close");
  const prevButton = document.querySelector(".slider__modal-prev");
  const nextButton = document.querySelector(".slider__modal-next");

  let currentIndex = 0;

  images.forEach((image, index) => {
    image.addEventListener("click", () => {
      currentIndex = index;
      openModal(image.src);
    });
  });

  function openModal(src) {
    img.src = src;
    img.classList.add("fade-in");
    sliderModal.style.display = "flex";
    setTimeout(() => {
      sliderModal.classList.add("open");
    }, 10);
  }

  function closeModal() {
    sliderModal.classList.remove("open");
    setTimeout(() => {
      sliderModal.style.display = "none";
    }, 300);
  }

  closeButton.addEventListener("click", closeModal);
  sliderModal.addEventListener("click", (e) => {
    if (e.target.classList.contains("slider__modal-overlay")) {
      closeModal();
    }
  });

  //-------------------------------------------------------------------

  function changeImage(newIndex) {
    img.classList.add("fade-out");
    setTimeout(() => {
      img.src = images[newIndex].src;
      img.classList.remove("fade-out");
      img.classList.add("fade-in");
      currentIndex = newIndex;
    }, 300);
  }

  prevButton.addEventListener("click", (event) => {
    event.stopPropagation();
    changeImage((currentIndex - 1 + images.length) % images.length);
  });

  nextButton.addEventListener("click", (event) => {
    event.stopPropagation();
    changeImage((currentIndex + 1) % images.length);
  });

  let autoSlide = setInterval(() => {
    nextButton.click();
  }, 3000);

  sliderModal.addEventListener("mouseover", () => clearInterval(autoSlide));
  sliderModal.addEventListener("mouseleave", () => {
    autoSlide = setInterval(() => {
      nextButton.click();
    }, 3000);
  });
}
