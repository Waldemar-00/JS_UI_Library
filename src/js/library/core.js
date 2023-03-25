const $ = function (selector) {
    return $.prototype.init(selector);
};
$.prototype.init = function (selector) {
    if (!selector) {
        return this; // return empty object - {empty}
    }
    Object.assign(this, document.querySelectorAll(selector));
    this.length = document.querySelectorAll(selector).length;
    return this;
};
$.prototype.init.prototype = $.prototype;
window.$ = $;

export default $;