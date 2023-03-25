const $ = function (selector) {
    return $.prototype.init(selector);
};
$.prototype.init = function (selector) {
    if (!selector) {
        return this; // return empty object - {empty}
    }
    if (selector.tagName) {
        this[0] = selector;
        this.lenght = 1;
        return this;
    }
    Object.assign(this, document.querySelectorAll(selector));
    this.length = document.querySelectorAll(selector).length;
    return this;
};
$.prototype.init.prototype = $.prototype;
window.$ = $;

export default $;