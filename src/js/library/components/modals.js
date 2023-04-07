import $ from '../core';
$.prototype.modal = function () {
    for (let i = 0; i < this.length; i++) {
        const targ = this[i].getAttribute('data-target');
        $(this[i]).click((e) => {
            e.preventDefault();
            if (e.target && e.target.classList.contains('pink-btn')) {
                $(targ).fadeIn(500);
                document.body.classList.add('calc');
                document.body.style.overflow = 'hidden';
            }
        });
    }
    const closes = document.querySelectorAll(`[data-close]`);
        closes.forEach(element => {
            $(element).click((e) => {
                if (e.target && e.target.hasAttribute("data-close")) {
                    $('.modal').fadeOut(500);
                    document.body.style.overflow = '';
                        if (e.target && e.target.classList.contains('remove') || e.target.hasAttribute("data-close") ) {
                            document.querySelector('.modalRemove').remove();
                        }
                }
            });
        });
    $('.modal').click((e) => {
        if (e.target.classList.contains('modal')) {
            $('.modal').fadeOut(500);
            document.body.style.overflow = '';
            if (e.target && e.target.classList.contains('modalRemove')) {
                document.querySelector('.modalRemove').remove();
            }
        }
    });
};
$('[data-toggle="mod"]').modal();

$.prototype.createModal = function ({ texts, buttons } = {}) {
    for (let i = 0; i < this.length; i++) {
        const div = document.createElement('div');
        div.classList.add('modal', 'modalRemove');
        const id = this[i].getAttribute('data-target').substring(1);
        console.log(id);
        div.setAttribute('id', id);
        console.log(div);
        const btns = [];
        //buttons = {
        //count: num,
        //settings: [[text, classNames[], close, callback], [text, classNames[], close, callback]],
        //}
        for (let j = 0; j < buttons.count; j++) {
            const btn = document.createElement('button');
            btn.classList.add('btn', ...buttons.settings[j][1]);
            btn.textContent = buttons.settings[j][0];
            if (buttons.settings[j][1]) {
                btn.setAttribute('data-close', 'true');
            }
            if (buttons.settings[j][2] && typeof buttons.settings[j][2] === 'function') {
                btn.addEventListener('click', buttons.settings[j][2]);
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
        $(this[i]).modal();
        $(this[i].getAttribute('data-target')).fadeIn(500);
    }
};