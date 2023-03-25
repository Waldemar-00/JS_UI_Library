import $ from '../core';

$.prototype.addClass = function (...classList) {
    for (let i = 0; i < this.length; i++) {
        this[i].classList.add(...classList);
    }
};
$.prototype.removeClass = function (...classList) {
    for (let i = 0; i < this.length; i++) {
        this[i].classList.remove(...classList);
    }
};
$.prototype.toggleClass = function (clas) {
    for (let i = 0; i < this.length; i++) {
        this[i].classList.toggle(clas);
    }
};