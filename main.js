// SWIPER
const swiperMenu = new Swiper('.menu__swiper', {
  loop: true,
  grabCursor: true,
  slidesPerView: 'auto',
  centeredSlides: 'auto',
})


// SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300,
    // reset: true, // Animations repeat
  });

  sr.reveal('.about__data')
  sr.reveal('.about__board', { delay: 700, distance: '100px', origin: 'right' })
  sr.reveal('.about__pizza', { delay: 1400, distance: '100px', origin: 'bottom', rotate: { z: -90 } })
  sr.reveal('.about__ingredient', { delay: 2000, interval: 100 })