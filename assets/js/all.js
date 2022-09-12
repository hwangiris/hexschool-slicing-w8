"use strict";

$(function () {
  var updateMasonry = function updateMasonry() {
    $('.cards--artwork').masonry({
      itemSelector: '.cards--artwork > div'
    });
  };

  var updateWork = function updateWork() {
    console.log('a');
    $('.cards--info').masonry({
      itemSelector: '.cards--info > div'
    });
  };

  var masonry = function masonry() {
    updateMasonry();
    updateWork();
  };

  $('button[data-bs-toggle="tab"]').on('shown.bs.tab', masonry);
  $('button.toggle-arrow + .collapse').on('shown.bs.collapse', masonry);
  $('button.toggle-arrow + .collapse').on('hidden.bs.collapse', masonry);
  $(window).on('resize load', masonry);
  var swiperArtist = new Swiper('.swiper--artist', {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    spaceBetween: 12,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 0
      }
    }
  });
  var swiperWork = new Swiper('.swiper--work', {
    slidesPerView: 2,
    loop: true,
    spaceBetween: 24,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    breakpoints: {
      768: {
        slidesPerView: 3
      },
      1024: {
        slidesPerView: 4
      }
    }
  });
});
//# sourceMappingURL=all.js.map
