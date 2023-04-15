import $ from '../core';

$.prototype.carousel = function () {
    for (let i = 0; i < this.length; i++) {
        const width = window.getComputedStyle(this[i].querySelector('.carousel-closet')).width;
        const slides = this[i].querySelectorAll('.carousel-item');
        const carousel = this[i].querySelector('.carousel-clides');
        const dots = this[i].querySelectorAll('[data-dots-num]');
        let displacement = 0;
        let slideIndex = 0;
        carousel.style.width = 100 * slides.length + '%';
        slides.forEach(slide => {
            slide.style.width = width;
        });
        $(this[i].querySelector('.prev')).click((e) => {
            e.preventDefault();
            e.stopPropagation();
            if (e.target && e.target.classList.contains('prev')) {
                if (displacement === 0) {
                    displacement = width.replace(/\D/g, '') * (slides.length - 1);
                    } else {
                        displacement -= Number(width.replace(/\D/g, ''));
                }
                carousel.style.transform = `translateX(-${displacement}px)`;
                if (slideIndex === 0) {
                    slideIndex = slides.length - 1;
                } else {
                    slideIndex--;
                }
                dots.forEach(dot => {
                    dot.classList.remove('carousel__active');
                });
                dots[slideIndex].classList.add('carousel__active');
            }
        });
        $(document.querySelector('.next')).click((event) => {
            event.preventDefault();
            if (event.target && event.target.classList.contains('next')) {
                if (displacement === width.replace(/\D/g, '') * (slides.length - 1)) {
                    displacement = 0;
                } else {
                    displacement += Number(width.replace(/\D/g, ''));
                }
                carousel.style.transform = `translateX(-${displacement}px)`;
                if (slideIndex === slides.length - 1) {
                    slideIndex = 0;
                } else {
                    slideIndex++;
                }
                dots.forEach(dot => {
                    dot.classList.remove('carousel__active');
                });
                dots[slideIndex].classList.add('carousel__active');
            }
        });
    }
};
$('.carousel').carousel();