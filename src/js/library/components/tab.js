import $ from '../core';
$.prototype.tab = function () {
    for (let i = 0; i < this.length; i++) {
        $(this[i]).on('click', (e) => {
            if (e.target && e.target.classList.contains('tab-item')) {
                $(e.target).addClass('tab-item__active')
                    .siblings()
                    .removeClass('tab-item__active')
                    .closest('.tab').find('.tab-content')
                    .removeClass('tab-content__active')
                    .eq(e.target.getAttribute('data-num'))
                    .addClass('tab-content__active');
            }
        });
    }
};
$('.tab-panel .tab-item').tab();
