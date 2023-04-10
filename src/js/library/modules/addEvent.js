import $ from '../core';

$.prototype.on = function (action, callback, e) {
    if (action && callback) {
        for (let i = 0; i < this.length; i++) {
            if (this[i].style) {
                this[i].style.cursor = 'pointer';
            }
            this[i].addEventListener(action, callback);
        }
    }
    return this;
};

$.prototype.off = function (action, callback) {
    if (action && callback) {
        for (let i = 0; i < this.length; i++) {
            if (this[i].style) {
                this[i].style.cursor = '';
            }
            this[i].removeEventListener(action, callback);
        }
    }
    return this;
};
$.prototype.click = function (handler) {
    for (let i = 0; i < this.length; i++) {
        if (handler) {
            if (this[i].style) {
                this[i].style.cursor = 'pointer';
            }
            this[i].addEventListener('click', handler);
        } else {
            if (this[i].style) {
                this[i].style.cursor = 'pointer';
            }
            this[i].click();
        }
    }
    return this;
};
