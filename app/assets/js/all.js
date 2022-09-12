$(function() {
  var updateMasonry = function() {
    $('.cards--artwork').masonry({
      itemSelector: '.cards--artwork > div',
    });
  }
  var updateWork = function() {
    console.log('a');
    $('.cards--info').masonry({
      itemSelector: '.cards--info > div',
    });
  }
  var masonry = function() {
    updateMasonry();
    updateWork();
  }
  $('button[data-bs-toggle="tab"]').on('shown.bs.tab', masonry);
  $('button.toggle-arrow + .collapse').on('shown.bs.collapse', masonry);
  $('button.toggle-arrow + .collapse').on('hidden.bs.collapse', masonry);
  $(window).on('resize load', masonry);
  
  var swiper = new Swiper('.swiper--artist', {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    spaceBetween: 12,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
    },
  });
});