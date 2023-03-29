import $ from '../core';

$.prototype.animate = function (duration, callback, finish) {
    let start;

    function _animate(time) {
        if (!start) {
            start = time;
        }
        let elapsed = time - start; // 0, if we start
        let clarity = Math.min(elapsed / duration, 1);
        console.log(clarity);
        callback(clarity);
        if (elapsed < duration) {
            requestAnimationFrame(_animate);
        } else {
            if (typeof finish === 'function') {
                finish();
            }
            // cancelAnimationFrame(_animate);
        }
    }
    return _animate;
};
$.prototype.fadeIn = function (duration, finish, display = 'block') {
    for (let i = 0; i < this.length; i++) {
        this[i].style.display = display;
        const _fadeIn = (clarity) => {
            this[i].style.opacity = clarity;
        };
        const animate = this.animate(duration, _fadeIn, finish);
        requestAnimationFrame(animate);
    }
    return this;
};
$.prototype.fadeOut = function (duration, finish) {
    for (let i = 0; i < this.length; i++) {
        const _fadeOut = (clarity) => {
            this[i].style.opacity = 1 - clarity;
            if (clarity === 1) {
                this[i].style.display = 'none';
            }
        };
        const ani = this.animate(duration, _fadeOut, finish);
        requestAnimationFrame(ani);
    }
    return this;
};