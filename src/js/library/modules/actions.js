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
$.prototype.index = function () {
    const parent = this[0].parentNode;
    const myChildren = [...parent.children];
    const findMyElement = item => {
        return item === this[0];
    };
    return myChildren.findIndex(findMyElement);
};
$.prototype.find = function (selector) {
    let items = 0;
    let noteCounter = 0;
    const copy = Object.assign({}, this);
    for (let i = 0; i < copy.length; i++) {
        const array = copy[i].querySelectorAll(selector);
        if (array.length === 0) {
            continue;
        }
        for (let j = 0; j < array.length; j++) {
            this[noteCounter] = array[j];
            noteCounter++;
        }
        items += array.length;
    }
    this.length = items;
    for (; items < Object.keys(this).length; items++) {
        delete this[items];
    }
    return this;
};
$.prototype.closest = function (selector) {
    let counter = 0;
    for (let i = 0; i < this.length; i++) {
        if (this[i].closest(selector) === null) {
            continue;
        }
        this[i] = this[i].closest(selector);
        counter++;
    }
    const leng = Object.keys(this).length;
    for (; counter < leng; counter++) {
        delete this[counter];
    }
    return this;
};