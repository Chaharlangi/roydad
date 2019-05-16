
 var swiper = new Swiper('.eventGalleryHolder', {
    slidesPerView: 2,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 8500,
        disableOnInteraction: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  });