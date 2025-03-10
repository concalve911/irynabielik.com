import Swiper from "swiper/bundle";

export const initializeSwiper = () => {
  const swiper = new Swiper(".slider", {
    loop: true,

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    watchSlidesProgress: true,
  });

  const feedbackSwiper = new Swiper(".feedback__slider", {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".feedback__slider .swiper-button-next",
      prevEl: ".feedback__slider .swiper-button-prev",
    },
    watchSlidesProgress: true,
  });
};
