import $ from '../core';
$.prototype.modal = function () {
    for (let i = 0; i < this.length; i++) {
        const target = this[i].getAttribute('data-target');
        $(this[i]).click(() => {
            $(target).fadeIn(500);
            document.body.classList.add('calc');
            document.body.style.overflow = 'hidden';
        });
    }
    const closes = document.querySelectorAll("[data-close]");
    closes.forEach(element => {
        $(element).click((e) => {
            if (e.target && e.target.hasAttribute("data-close")) {
                $('.modal').fadeOut(500);
                document.body.style.overflow = '';
            }
        });
    });
    $('.modal').click((e) => {
        if (e.target.classList.contains('modal')) {
            $('.modal').fadeOut(500);
            document.body.style.overflow = '';
        }
    });
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
        //settings: [[text, classNames[], close, callback]]}
        for (let j = 0; j < buttons.count; j++) {
            const btn = document.createElement('button');
            btn.classList.add('btn', ...buttons.settings[j][1]);
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
                            <button class="btn orange-btn" data-close>Close</button>
                            <button class="btn blue-btn">Save changes</button>
                        </div>
                    </div>
                </div>
            `;

    }
};