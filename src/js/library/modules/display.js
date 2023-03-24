import $ from '../core';

$.prototype.show = function () {
    for (let i = 0; i < this.length; i++) {
        if (this[i].style) {
            this[i].style.display = '';
        } else {
            continue;
        }
    }
    return this;
};
$.prototype.hide = function () {
    for (let i = 0; i < this.length; i++) {
        if (this[i].classList.contains('active') && this[i].style ) {
            this[i].style.display = 'none';
        } else {
            continue;
        }
    }
    return this;
};
$.prototype.toggle = function () {
    for (let i = 0; i < this.length; i++) {
        if (this[i].style && this[i].style.display === 'none') {
            this[i].style.display = '';
        }
        else if (this[i].style && this[i].style.display === '') {
            this[i].style.display = 'none';
        }
        else {
            continue;
        }
    }
    return this;
};
