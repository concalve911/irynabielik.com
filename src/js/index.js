"use strict";

import { initializeBurgerMenu } from "./burger-menu";
import { initializeSwiper } from "./swiper";
import { initializeTabs } from "./tabs";
import { initializeModal } from "./modal";
import { initializeSliderModal } from "./slider-modal";
import "../style/libs/normalize.css";
import "../../node_modules/swiper/swiper-bundle.css";
import "../style/index.scss";
import "../index.html";

initializeBurgerMenu();
initializeSwiper();
initializeTabs();
initializeModal();
initializeSliderModal();
