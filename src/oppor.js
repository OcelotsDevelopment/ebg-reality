// Replace your current import with this:
import Swiper from 'swiper/bundle';
import 'swiper/css';

// Remove the modules array from your config
const swiper = new Swiper('.mySwiper', {
  loop: true,
  spaceBetween: 20,
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});


// https://www.franchiseindia.net/tamil-nadu/fro/assets/imgs/food.jpg
// https://www.franchiseindia.net/tamil-nadu/fro/assets/imgs/hotel.jpg
// https://www.franchiseindia.net/tamil-nadu/fro/assets/imgs/dealer.jpg
// https://www.franchiseindia.net/tamil-nadu/fro/assets/imgs/health.jpg
// https://www.franchiseindia.net/tamil-nadu/fro/assets/imgs/education.jpg
// https://www.franchiseindia.net/tamil-nadu/fro/assets/imgs/commerce.jpg
// https://www.franchiseindia.net/tamil-nadu/fro/assets/imgs/auto.jpg
// https://www.franchiseindia.net/tamil-nadu/fro/assets/imgs/speciality.jpg
// https://www.franchiseindia.net/tamil-nadu/fro/assets/imgs/fashion.jpg