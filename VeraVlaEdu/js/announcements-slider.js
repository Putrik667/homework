new Swiper('.announcements__swiper', {
   slidesPerView: 1,
   spaceBetween: 20,
   loop: true,

   mousewheel: {
      forceToAxis: true,
   },

   navigation: {
      prevEl: ".announcements__swiper-button--prev",
      nextEl: ".announcements__swiper-button--next",
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
      resize: function () {
         updateClasses(this);
      },
   },
});

function updateClasses(swiper) {
   swiper.slides.forEach(slide => {
      slide.classList.remove('swiper-slide-active', 'swiper-slide-prev', 'swiper-slide-next');
   });

   const activeIndex = swiper.activeIndex;
   const slidesPerView = swiper.params.slidesPerView;

   if (swiper.slides[activeIndex - 1]) {
      swiper.slides[activeIndex - 1].classList.add('swiper-slide-prev');
   }

   for (let i = activeIndex; i < activeIndex + slidesPerView; i++) {
      if (swiper.slides[i]) {
         swiper.slides[i].classList.add('swiper-slide-active');
      }
   }

   if (swiper.slides[activeIndex + slidesPerView]) {
      swiper.slides[activeIndex + slidesPerView].classList.add('swiper-slide-next');
   }
}