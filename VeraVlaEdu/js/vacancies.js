new Swiper('.vacancies__swiper', {
   slidesPerView: 1,
   spaceBetween: 20,
   loop: true,

   mousewheel: {
      forceToAxis: true,
   },

   navigation: {
      prevEl: ".vacancies__swiper-button--prev",
      nextEl: ".vacancies__swiper-button--next",
   },

   breakpoints: {
      431: {
         slidesPerView: 1.5,
      },
      577: {
         slidesPerView: 2,
      },
      846: {
         slidesPerView: 2.5,
      },
      993: {
         slidesPerView: 3,
      },
   },

   on: {
      init: function () {
         updateClasses(this);
      },
      slideChange: function () {
         updateClasses(this);
      },
   },
});

function updateClasses(swiper) {
   // УБРАТЬ ВСЕ КЛАССЫ
   swiper.slides.forEach(slide => {
      slide.classList.remove('swiper-slide-active', 'swiper-slide-prev', 'swiper-slide-next');
   });

   const activeIndex = swiper.activeIndex;

   // PREV (слева от первой активной)
   if (swiper.slides[activeIndex - 1]) {
      swiper.slides[activeIndex - 1].classList.add('swiper-slide-prev');
   }

   // ACTIVE (3 карточки)
   for (let i = activeIndex; i < activeIndex + 3; i++) {
      if (swiper.slides[i]) {
         swiper.slides[i].classList.add('swiper-slide-active');
      }
   }

   // NEXT (справа от последней активной)
   if (swiper.slides[activeIndex + 3]) {
      swiper.slides[activeIndex + 3].classList.add('swiper-slide-next');
   }
}