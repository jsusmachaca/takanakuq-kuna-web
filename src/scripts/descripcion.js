import Swiper from 'swiper'

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    620: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    680: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    920: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
})

const nextButton = document.querySelector('.swiper-button-next')
const prevButton = document.querySelector('.swiper-button-prev')

if (nextButton && prevButton) {
  nextButton.addEventListener('click', function () {
    swiper.slideNext()
  })

  prevButton.addEventListener('click', function () {
    swiper.slidePrev()
  })
}
