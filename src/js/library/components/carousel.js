import $ from '../core';

$.prototype.carousel = function () {
    for (let i = 0; i < this.length; i++) {
        const width = window.getComputedStyle(this[i].querySelector('.carousel-closet')).width;
        const slides = this[i].querySelectorAll('.carousel-item');
        const carousel = this[i].querySelector('.carousel-clides');
        carousel.style.width = 100 * slides.length + '%';
        slides.forEach(slide => {
            slide.style.width = width;
        });

        let displacement = 0;
        $(this[i].querySelector('[data-displacement="next"]')).click((e) => {
            e.preventDefault();
            if (displacement === width.replace(/\D/g, '') * (slides.length - 1)) {
                displacement = 0;
            } else {
                displacement += Number(width.replace(/\D/g, ''));
            }
            carousel.style.transform = `translateX(-${displacement}px)`;
        });
    }
};
$('.carousel').carousel();