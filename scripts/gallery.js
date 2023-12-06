document.addEventListener("DOMContentLoaded",function() {
  // Инициализация Swiper.js
  const swiper = new Swiper('.swiper-container',{
    // Настройки слайдера
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
});
