// (() => {
    // const $ = function (selector) {
        // const elements = document.querySelectorAll(selector);
        // const object = {};
        // object.hide = () => {
            // elements.forEach(element => {
                // element.style.display = 'none';
            // });
            // return object;
        // };
        // object.show = () => {
            // elements.forEach(element => {
                // element.style.display = '';
            // });
            // return object;
        // };
        // return object;
    // };
    // window.$ = $;
// })();

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