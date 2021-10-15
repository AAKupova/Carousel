import Swiper, { Navigation, Pagination } from 'swiper';

import '../pages/normalize.css';
import 'swiper/css/bundle';
import '../pages/index.css';

Swiper.use([Navigation, Pagination]);

const swiper = new Swiper('.swiper', {
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

console.log(swiper)

// import lottie from 'lottie-web';

// import animation from './assets/animation.json';

// const element = document.querySelector('.contacts');

// lottie.loadAnimation({
//     container: element, // the dom element that will contain the animation
//     renderer: 'svg',
//     loop: true,
//     autoplay: true,
//     animationData: animation
//     // path: '../imgase/lottie-animation/animation.json' // the path to the animation json
//   })