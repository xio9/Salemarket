document.addEventListener('DOMContentLoaded', () => {
    var mySwiper = new Swiper('.clothes-slider', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        slidesPerView: 4,
    });
});