import $ from '../core';

$.prototype.animate = function (duration, callback, finish) {
    let start = null;

    function _animate(time) {
        if (!start) {
            start = time;
        }
        let elapsed = time - start; // 0, if we start
    }
};