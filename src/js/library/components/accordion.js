import $ from '../core';
$.prototype.accordion = function (headerActive = 'accordion-header__active', contentActive = 'accordion-content__active', paddings = 40) {
    for (let i = 0; i < this.length; i++) {
        $(this[i]).click((e) => {
            $(e.target).toggleClass(headerActive);
            $(e.target.nextElementSibling).toggleClass(contentActive);
            if (e.target && e.target.classList.contains(headerActive)) {
                console.log(e.target.nextElementSibling);
                e.target.nextElementSibling.style.maxHeight = e.target.nextElementSibling.scrollHeight + paddings + 'px'; 
            } else {
                e.target.nextElementSibling.style.maxHeight = 0;
            }
        });
    }
};
$('.accordion-header').accordion();