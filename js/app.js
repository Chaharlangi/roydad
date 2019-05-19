
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
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        568: {
          slidesPerView: 1,
          spaceBetween: 10,
        }
    }
  });

  const navbarToggler = document.querySelector('.navbar-toggler');
  const nav = document.querySelector('.navbar');

  navbarToggler.addEventListener('click', () => {
      nav.classList.toggle('bg-white');
      nav.classList.toggle('darkShadow');
      navbarToggler.querySelector('i').classList.toggle('text-dark')
  })