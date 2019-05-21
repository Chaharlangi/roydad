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
  nav.classList.toggle('bg-dark');
  nav.classList.toggle('darkShadow');
})


// Countdown
//Set countdown goal here   
var goalDay = '2019/06/01 00:00:00'

var timerId = 0;
timerId = setInterval(function() {
  var t = Date.parse(goalDay) - Date.parse(new Date());
  if (t < 0) {
    $(".daysNum").text("0");
    $(".hoursNum").text("0");
    $(".minutesNum").text("0");
    $(".secondsNum").text("0");
    clearInterval(timerId);
  } else {
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    $(".daysNum").text(days);
    $(".hoursNum").text(hours);
    $(".minutesNum").text(minutes);
    $(".secondsNum").text(seconds);
  }
}, 1000); // repeat forever, polling every second
