document.addEventListener('DOMContentLoaded', function() {

  //tabs
  document.querySelectorAll('.work__tabs').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.tabs-content').forEach(function(tabContent) {
        tabContent.classList.remove('tab-content-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
    })
  })

  //burger
  document.querySelector('.header__burger-btn').addEventListener('click', function() {
    document.querySelector('.nav').classList.toggle('nav-is-active')
    document.querySelector('.header__burger-btn').classList.toggle('burger-bnt-is-active')
  })

  //search
  document.querySelector('.header__btn').addEventListener('click', function() {
    document.querySelector('.header__form').classList.toggle('header__form-is-active')
    document.querySelector('.header__btn').classList.toggle('header-btn-disabled')
  })
  //search-close
  document.querySelector('.header__btn-close').addEventListener('click', function() {
    document.querySelector('.header__form').classList.toggle('header__form-is-active')
    document.querySelector('.header__btn').classList.toggle('header-btn-disabled')
  })

  //swiper
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    autoplay: {
      delay: 2000,
      stopOnLastSlide: false,
      disableOnInteraction: true
    },

    speed: 800,
  });

  //accordion
  $(".accordion").accordion({
    heightStyle: "content",
    collapsible: true,
    active: false
  });

})
