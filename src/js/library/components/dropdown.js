import $ from '../core';

$.prototype.dropdpwn = function () {
    for (let i = 0; i < this.length; i++) {
        const id = this[i].getAttribute('id');
        $(this[i]).click(() => {
            $(`[data-toggle-id="${id}"]`).fadeToggle(500);
        });
    }
};
$('.dropdown-toggle').dropdpwn();