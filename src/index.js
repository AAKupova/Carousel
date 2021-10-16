import { Swiper, Parallax, Mousewheel, Controller, Pagination } from 'swiper';

import '../pages/normalize.css';
import 'swiper/css/bundle';
import 'swiper/css/parallax'
import '../pages/index.css';

Swiper.use([ Parallax, Mousewheel, Controller, Pagination ]);

const swiperImg = new Swiper('.slider-img', {
  loop: false,
  speed: 2500,
  parallax: true,
  mousewheel: {
    invert: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const swiperText = new Swiper('.slider-text', {
  loop: false,
  speed: 2500,
  mousewheel: {
    invert: false,
  },
});

swiperImg.controller.control = swiperText;
swiperText.controller.control = swiperImg;



console.log(swiperImg, swiperText)

const buttonShare = document.querySelector('.botton-share');
const blockShare = document.querySelector('.slider__share');

buttonShare.addEventListener('click', () => {
  if(blockShare.classList.contains('hidden')) {
    blockShare.classList.remove('hidden');
  } else {
    blockShare.classList.add('hidden');
  }

})

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