import $ from '../core';
$.prototype.modal = function () {
    for (let i = 0; i < this.length; i++) {
        const target = this[i].getAttribute('data-target');
        $(this[i]).click(() => {
            $(target).fadeIn(500);
            // document.body.style.overflow = 'hidden';
        });
    }
    const closes = document.querySelectorAll("[data-close]");
    closes.forEach(element => {
        $(element).click((e) => {
            if (e.target && e.target.hasAttribute("data-close")) {
                $('.modal').fadeOut(500);
                // document.body.style.overflow = '';
            }
        });
    });
    $('.modal').click((e) => {
        if (e.target.classList.contains('modal')) {
            $('.modal').fadeOut(500);
            // document.body.style.overflow = '';
        }
    });
};
$('[data-toggle="mod"]').modal();