parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"LpGy":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=function t(e){return t.prototype.init(e)};t.prototype.init=function(t){return t?t.tagName?(this[0]=t,this.lenght=1,this):(Object.assign(this,document.querySelectorAll(t)),this.length=document.querySelectorAll(t).length,this):this},t.prototype.init.prototype=t.prototype,window.$=t;var e=t;exports.default=e;
},{}],"uZpA":[function(require,module,exports) {
"use strict";var t=s(require("../core"));function s(t){return t&&t.__esModule?t:{default:t}}t.default.prototype.show=function(){for(var t=0;t<this.length;t++)this[t].style&&(this[t].style.display="");return this},t.default.prototype.hide=function(){for(var t=0;t<this.length;t++)this[t].classList.contains("active")&&this[t].style&&(this[t].style.display="none");return this},t.default.prototype.toggle=function(){for(var t=0;t<this.length;t++)if(this[t].style&&"none"===this[t].style.display)this[t].style.display="";else{if(!this[t].style||""!==this[t].style.display)continue;this[t].style.display="none"}return this};
},{"../core":"LpGy"}],"mZ5N":[function(require,module,exports) {
"use strict";var t=s(require("../core"));function s(t){return t&&t.__esModule?t:{default:t}}t.default.prototype.addClass=function(){for(var t=0;t<this.length;t++){var s;(s=this[t].classList).add.apply(s,arguments)}return this},t.default.prototype.removeClass=function(){for(var t=0;t<this.length;t++){var s;(s=this[t].classList).remove.apply(s,arguments)}return this},t.default.prototype.toggleClass=function(t){for(var s=0;s<this.length;s++)this[s].classList.toggle(t);return this};
},{"../core":"LpGy"}],"Qj0Z":[function(require,module,exports) {
"use strict";var t=e(require("../core"));function e(t){return t&&t.__esModule?t:{default:t}}t.default.prototype.on=function(t,e,r){if(t&&e)for(var s=0;s<this.length;s++)this[s].style&&(this[s].style.cursor="pointer"),this[s].addEventListener(t,e);return this},t.default.prototype.off=function(t,e){if(t&&e)for(var r=0;r<this.length;r++)this[r].style&&(this[r].style.cursor=""),this[r].removeEventListener(t,e);return this},t.default.prototype.click=function(t){for(var e=0;e<this.length;e++)t?(this[e].style&&(this[e].style.cursor="pointer"),this[e].addEventListener("click",t)):(this[e].style&&(this[e].style.cursor="pointer"),this[e].click());return this};
},{"../core":"LpGy"}],"c8zQ":[function(require,module,exports) {
"use strict";var t=e(require("../core"));function e(t){return t&&t.__esModule?t:{default:t}}function r(t){return s(t)||o(t)||i(t)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(t,e){if(t){if("string"==typeof t)return l(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(t,e):void 0}}function o(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function s(t){if(Array.isArray(t))return l(t)}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}t.default.prototype.html=function(t){for(var e=0;e<this.length;e++){if(!t)return this[e].innerHTML;this[e].innerHTML=t}return this},t.default.prototype.eq=function(t){for(var e=this[t],r=Object.keys(this).length,n=0;n<r;n++)delete this[n];return this[0]=e,this.length=1,this},t.default.prototype.index=function(){var t=this;return r(this[0].parentNode.children).findIndex(function(e){return e===t[0]})},t.default.prototype.find=function(t){for(var e=0,r=0,n=Object.assign({},this),i=0;i<n.length;i++){var o=document.querySelectorAll(t);if(0!==o.length){for(var s=0;s<o.length;s++)this[r]=o[s],r++;e+=o.length}}for(this.length=e;e<Object.keys(this).length;e++)delete this[e];return this},t.default.prototype.closest=function(t){for(var e=0,r=0;r<this.length;r++)null!==this[r].closest(t)&&(this[r]=this[r].closest(t),e++);for(var n=Object.keys(this).length;e<n;e++)delete this[e];return this},t.default.prototype.siblings=function(){for(var t=0,e=0,r=Object.assign({},this),n=0;n<r.length;n++){for(var i=r[n].parentNode.children,o=0;o<i.length;o++)r[n]!==i[o]&&(this[e]=i[o],e++);t+=i.length-1}this.length=t;for(var s=Object.keys(this).length;t<s;t++)delete this[t];return this};
},{"../core":"LpGy"}],"SanO":[function(require,module,exports) {
"use strict";var t=e(require("../core"));function e(t){return t&&t.__esModule?t:{default:t}}t.default.prototype.animate=function(t,e,n){var i;return function a(o){i||(i=o);var r=o-i,u=Math.min(r/t,1);e(u),r<t?requestAnimationFrame(a):"function"==typeof n&&n()}},t.default.prototype.fadeIn=function(t,e){for(var n=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"block",a=function(a){n[a].style.display=i;var o=n.animate(t,function(t){n[a].style.opacity=t},e);requestAnimationFrame(o)},o=0;o<this.length;o++)a(o);return this},t.default.prototype.fadeOut=function(t,e){for(var n=this,i=function(i){var a=n.animate(t,function(t){n[i].style.opacity=1-t,1===t&&(n[i].style.display="none")},e);requestAnimationFrame(a)},a=0;a<this.length;a++)i(a);return this},t.default.prototype.fadeToggle=function(t,e){for(var n=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"block",a=function(a){if("none"===window.getComputedStyle(n[a]).display){n[a].style.display=i;var o=n.animate(t,function(t){n[a].style.opacity=t},e);requestAnimationFrame(o)}else{var r=n.animate(t,function(t){n[a].style.opacity=1-t,1===t&&(n[a].style.display="none")},e);requestAnimationFrame(r)}},o=0;o<this.length;o++)a(o);return this};
},{"../core":"LpGy"}],"F2pq":[function(require,module,exports) {
"use strict";var t=e(require("../core"));function e(t){return t&&t.__esModule?t:{default:t}}t.default.prototype.dropdown=function(){for(var e=this,o=function(){var o=e[r].getAttribute("id");(0,t.default)(e[r]).click(function(e){e.preventDefault(),e.stopPropagation(),(0,t.default)('[data-toggle-id="'.concat(o,'"]')).fadeToggle(500)})},r=0;r<this.length;r++)o()},(0,t.default)(".dropdown-toggle").dropdown();
},{"../core":"LpGy"}],"rBPk":[function(require,module,exports) {
"use strict";var t=e(require("../core"));function e(t){return t&&t.__esModule?t:{default:t}}function o(t){return l(t)||r(t)||n(t)||a()}function a(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(t,e){if(t){if("string"==typeof t)return d(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?d(t,e):void 0}}function r(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function l(t){if(Array.isArray(t))return d(t)}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,a=new Array(e);o<e;o++)a[o]=t[o];return a}t.default.prototype.modal=function(){for(var e=this,o=function(){var o=e[a].getAttribute("data-target");(0,t.default)(e[a]).click(function(e){e.preventDefault(),e.target&&e.target.getAttribute("data-target")===o&&((0,t.default)(o).fadeIn(500),document.body.classList.add("calc"),document.body.style.overflow="hidden")})},a=0;a<this.length;a++)o();document.querySelectorAll("[data-close]").forEach(function(e){(0,t.default)(e).click(function(e){e.target&&e.target.hasAttribute("data-close")&&((0,t.default)(".modal").fadeOut(500),document.body.style.overflow="",(e.target&&e.target.classList.contains("remove")||e.target.hasAttribute("data-close"))&&document.querySelectorAll(".modalRemove").forEach(function(t){t.remove()}))})}),(0,t.default)(".modal").click(function(e){e.target.classList.contains("modal")&&((0,t.default)(".modal").fadeOut(500),document.body.style.overflow="",e.target&&e.target.classList.contains("remove")&&(console.log(e.target),document.querySelector(".modalRemove").remove()))})},(0,t.default)('[data-toggle="mod"]').modal(),t.default.prototype.createModal=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.texts,n=e.buttons;if(!document.querySelector(".modalRemove"))for(var r=0;r<this.length;r++){var l,d=document.createElement("div");d.classList.add("modal","modalRemove"),d.setAttribute("id",this[r].getAttribute("data-target").substring(1));for(var c=[],i=0;i<n.count;i++){var s,u=document.createElement("button");(s=u.classList).add.apply(s,["btn"].concat(o(n.settings[i][1]))),u.textContent=n.settings[i][0],n.settings[i][1]&&u.setAttribute("data-close","true"),n.settings[i][2]&&"function"==typeof n.settings[i][2]&&u.addEventListener("click",n.settings[i][2]),c.push(u)}d.innerHTML='\n                    <div class="modal-dialog">\n                        <div class="modal-content">\n                            <button class="close" data-close>&times;</button>\n                            <div class="modal-header">\n                                <div class="modal-title">'.concat(a.title,'</div>\n                            </div>\n                            <div class="modal-body">\n                                ').concat(a.body,'\n                            </div>\n                            <div class="modal-footer">\n\n                            </div>\n                        </div>\n                    </div>\n                '),(l=d.querySelector(".modal-footer")).append.apply(l,c),document.body.append(d),(0,t.default)(this[r]).modal(),document.querySelector(".create").click()}};
},{"../core":"LpGy"}],"WBvb":[function(require,module,exports) {
"use strict";var t=e(require("../core"));function e(t){return t&&t.__esModule?t:{default:t}}t.default.prototype.tab=function(){for(var e=0;e<this.length;e++)(0,t.default)(this[e]).on("click",function(e){e.target&&e.target.classList.contains("tab-item")&&(0,t.default)(e.target).addClass("tab-item__active").siblings().removeClass("tab-item__active").closest(".tab").find(".tab-content").removeClass("tab-content__active").eq(e.target.getAttribute("data-num")).addClass("tab-content__active")})},(0,t.default)(".tab-panel .tab-item").tab();
},{"../core":"LpGy"}],"sJyy":[function(require,module,exports) {
"use strict";var t=e(require("../core"));function e(t){return t&&t.__esModule?t:{default:t}}t.default.prototype.accordion=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"accordion-header__active",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"accordion-content__active",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:40,a=0;a<this.length;a++)(0,t.default)(this[a]).click(function(a){(0,t.default)(a.target).toggleClass(e),(0,t.default)(a.target.nextElementSibling).toggleClass(n),a.target&&a.target.classList.contains(e)?a.target.nextElementSibling.style.maxHeight=a.target.nextElementSibling.scrollHeight+i+"px":a.target.nextElementSibling.style.maxHeight=0})},(0,t.default)(".accordion-header").accordion();
},{"../core":"LpGy"}],"PgCJ":[function(require,module,exports) {
"use strict";var e=t(require("../core"));function t(e){return e&&e.__esModule?e:{default:e}}e.default.prototype.carousel=function(){for(var t=this,a=function(){var a=window.getComputedStyle(t[r].querySelector(".carousel-closet")).width,c=t[r].querySelectorAll(".carousel-item"),l=t[r].querySelector(".carousel-clides"),o=t[r].querySelectorAll("[data-dots-num]"),s=0,n=0;l.style.width=100*c.length+"%",c.forEach(function(e){e.style.width=a}),(0,e.default)(t[r].querySelector(".prev")).click(function(e){e.preventDefault(),e.stopPropagation(),e.target&&e.target.classList.contains("prev")&&(0===s?s=a.replace(/\D/g,"")*(c.length-1):s-=Number(a.replace(/\D/g,"")),l.style.transform="translateX(-".concat(s,"px)"),0===n?n=c.length-1:n--,o.forEach(function(e){e.classList.remove("carousel__active")}),o[n].classList.add("carousel__active"))}),(0,e.default)(document.querySelector(".next")).click(function(e){e.preventDefault(),e.target&&e.target.classList.contains("next")&&(s===a.replace(/\D/g,"")*(c.length-1)?s=0:s+=Number(a.replace(/\D/g,"")),l.style.transform="translateX(-".concat(s,"px)"),n===c.length-1?n=0:n++,o.forEach(function(e){e.classList.remove("carousel__active")}),o[n].classList.add("carousel__active"))}),document.querySelectorAll("#carousel .carousel-indicators li").forEach(function(e){e.addEventListener("click",function(e){var t=Number(e.target.getAttribute("data-dots-num"));n=t,s=a.replace(/\D/g,"")*t,l.style.transform="translateX(-".concat(s,"px)"),o.forEach(function(e){e.classList.remove("carousel__active")}),o[n].classList.add("carousel__active")})})},r=0;r<this.length;r++)a()},(0,e.default)(".carousel").carousel();
},{"../core":"LpGy"}],"Rsor":[function(require,module,exports) {
"use strict";var t=e(require("../core"));function e(t){return t&&t.__esModule?t:{default:t}}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(){n=function(){return t};var t={},e=Object.prototype,o=e.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(N){f=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,a=Object.create(o.prototype),c=new k(n||[]);return i(a,"_invoke",{value:E(t,r,c)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(N){return{type:"throw",arg:N}}}t.wrap=l;var p={};function y(){}function v(){}function d(){}var g={};f(g,c,function(){return this});var m=Object.getPrototypeOf,w=m&&m(m(S([])));w&&w!==e&&o.call(w,c)&&(g=w);var b=d.prototype=y.prototype=Object.create(g);function x(t){["next","throw","return"].forEach(function(e){f(t,e,function(t){return this._invoke(e,t)})})}function L(t,e){var n;i(this,"_invoke",{value:function(i,a){function c(){return new e(function(n,c){!function n(i,a,c,u){var s=h(t[i],t,a);if("throw"!==s.type){var f=s.arg,l=f.value;return l&&"object"==r(l)&&o.call(l,"__await")?e.resolve(l.__await).then(function(t){n("next",t,c,u)},function(t){n("throw",t,c,u)}):e.resolve(l).then(function(t){f.value=t,c(f)},function(t){return n("throw",t,c,u)})}u(s.arg)}(i,a,n,c)})}return n=n?n.then(c,c):c()}})}function E(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return P()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=j(a,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=h(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function j(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function S(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:P}}function P(){return{value:void 0,done:!0}}return v.prototype=d,i(b,"constructor",{value:d,configurable:!0}),i(d,"constructor",{value:v,configurable:!0}),v.displayName=f(d,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,f(t,s,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},x(L.prototype),f(L.prototype,u,function(){return this}),t.AsyncIterator=L,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new L(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then(function(t){return t.done?t.value:a.next()})},x(b),f(b,s,"Generator"),f(b,c,function(){return this}),f(b,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=S,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},t}function o(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function i(t){return function(){var e=this,r=arguments;return new Promise(function(n,i){var a=t.apply(e,r);function c(t){o(a,n,i,c,u,"next",t)}function u(t){o(a,n,i,c,u,"throw",t)}c(void 0)})}}t.default.prototype.get=i(n().mark(function t(){var e,r,o,i=arguments;return n().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=i.length>0&&void 0!==i[0]?i[0]:"https://jsonplaceholder.typicode.com/users",r=i.length>1&&void 0!==i[1]?i[1]:"json",t.next=4,fetch(e);case 4:if((o=t.sent).ok){t.next=7;break}throw new Error("Response status: ".concat(o.status));case 7:t.t0=r,t.next="json"===t.t0?10:"text"===t.t0?13:"blob"===t.t0?16:19;break;case 10:return t.next=12,o.json();case 12:return t.abrupt("return",t.sent);case 13:return t.next=15,o.text();case 15:return t.abrupt("return",t.sent);case 16:return t.next=18,o.blob();case 18:return t.abrupt("return",t.sent);case 19:case"end":return t.stop()}},t)})),t.default.prototype.post=function(){var t=i(n().mark(function t(e){var r,o,i,a,c=arguments;return n().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=c.length>1&&void 0!==c[1]?c[1]:"https://jsonplaceholder.typicode.com/posts",o=c.length>2&&void 0!==c[2]?c[2]:"json",i={},e.forEach(function(t,e){i[e]=t}),t.next=6,fetch(r,{method:"POST",headers:{"Content-Type":"application/json;charset=UTF-8"},body:JSON.stringify(i)});case 6:a=t.sent,t.t0=o,t.next="json"===t.t0?10:"text"===t.t0?13:"blob"===t.t0?16:19;break;case 10:return t.next=12,a.json();case 12:return t.abrupt("return",t.sent);case 13:return t.next=15,a.text();case 15:return t.abrupt("return",t.sent);case 16:return t.next=18,a.blob();case 18:return t.abrupt("return",t.sent);case 19:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}();
},{"../core":"LpGy"}],"SWPn":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=r(require("./core"));function r(e){return e&&e.__esModule?e:{default:e}}require("./modules/display"),require("./modules/classes"),require("./modules/addEvent"),require("./modules/actions"),require("./modules/animate"),require("./components/dropdown"),require("./components/modals"),require("./components/tab"),require("./components/accordion"),require("./components/carousel"),require("./services/requests");var o=e.default;exports.default=o;
},{"./core":"LpGy","./modules/display":"uZpA","./modules/classes":"mZ5N","./modules/addEvent":"Qj0Z","./modules/actions":"c8zQ","./modules/animate":"SanO","./components/dropdown":"F2pq","./components/modals":"rBPk","./components/tab":"WBvb","./components/accordion":"sJyy","./components/carousel":"PgCJ","./services/requests":"Rsor"}],"d6sW":[function(require,module,exports) {
"use strict";require("./library/lib");
},{"./library/lib":"SWPn"}]},{},["d6sW"], null)
//# sourceMappingURL=/main.9ab6d75a.js.map