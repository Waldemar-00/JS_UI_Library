import $ from '../core';
$.prototype.modal = function (created) {
    for (let i = 0; i < this.length; i++) {
        const targ = this[i].getAttribute('data-target');
        console.log(targ);
        $(this[i]).click(() => {
            $(targ).fadeIn(500);
            document.body.classList.add('calc');
            document.body.style.overflow = 'hidden';
        });
        const closes = document.querySelectorAll(`${targ} [data-close]`);
        closes.forEach(element => {
            $(element).click((e) => {
                if (e.target && e.target.hasAttribute("data-close")) {
                    $(targ).fadeOut(500);
                    document.body.style.overflow = '';
                    if (created) {
                        document.querySelector(targ).remove();
                    }
                }
            });
        });
        $(targ).click((e) => {
            if (e.target.classList.contains('modal')) {
                $(targ).fadeOut(500);
                document.body.style.overflow = '';
                if (created) {
                    document.querySelector(targ).remove();
                }
            }
        });
    }
};
$('[data-toggle="mod"]').modal();

$.prototype.createModal = function ({ texts, buttons } = {}) {
    for (let i = 0; i < this.length; i++) {
        const div = document.createElement('div');
        div.classList.add('modal');
        div.setAttribute('id', this[i].getAttribute('data-target').slice(1));
        const btns = [];
        //buttons = {
        //count: num,
        //settings: [[text, classNames[], close, callback], [text, classNames[], close, callback]],
        //}
        for (let j = 0; j < buttons.count; j++) {
            const btn = document.createElement('button');
            btn.classList.add('btn', ...buttons.settings[j][1]);
            btn.textContent = buttons.settings[j][0];
            if (buttons.settings[j][2]) {
                btn.setAttribute('data-close', 'true');
            }
            if (buttons.settings[j][3] && typeof buttons.settings[j][3] === 'function') {
                btn.addEventListener('click', buttons.settings[j][3]);
            }
            btns.push(btn);
        }
        div.innerHTML =
            `
                <div class="modal-dialog">
                    <div class="modal-content">
                        <button class="close" data-close>&times;</button>
                        <div class="modal-header">
                            <div class="modal-title">${texts.title}</div>
                        </div>
                        <div class="modal-body">
                            ${texts.body}
                        </div>
                        <div class="modal-footer">

                        </div>
                    </div>
                </div>
            `;
        div.querySelector('.modal-footer').append(...btns);
        document.body.append(div);
        $(this[i]).modal(true);
        $(this[i].getAttribute('data-target')).fadeIn(500);
    }
};