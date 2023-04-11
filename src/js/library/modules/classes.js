import $ from '../core';

$.prototype.addClass = function (...classList) {
    for (let i = 0; i < this.length; i++) {
        this[i].classList.add(...classList);
    }
    return this;
};
$.prototype.removeClass = function (...classList) {
    for (let i = 0; i < this.length; i++) {
        this[i].classList.remove(...classList);
    }
    return this;
};
$.prototype.toggleClass = function (clas) {
    for (let i = 0; i < this.length; i++) {
        this[i].classList.toggle(clas);
    }
    return this;
};