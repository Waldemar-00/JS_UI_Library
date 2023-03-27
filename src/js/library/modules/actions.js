import $ from '../core';

$.prototype.html = function (content) {
    for (let i = 0; i < this.length; i++) {
        if (content) {
            this[i].innerHTML = content;
        } else {
            return this[i].innerHTML;
        }
    }
    return this;
};
$.prototype.eq = function (index) {
    const swap = this[index];
    const leng = Object.keys(this).length;
    for (let i = 0; i < leng; i++) {
        delete this[i];
    }
    this[0] = swap;
    this.length = 1;
    return this;
};
