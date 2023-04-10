import './library/lib';
import $ from './library/lib';
$('#first').on('click', () => {
    $('div').eq(1).fadeToggle(800);
});
$('[data-count="2"]').on('click', () => {
    $('div').eq(2).fadeToggle(800);
});
$('button').eq(2).on('click', () => {
    $('.w-500').fadeToggle(800);
});

// Interactive dropdown menu
$('.wrapper').html(
    `<div class="dropdown">
        <button class="btn orange-btn dropdown-toggle" id="dropDownMenuBtn">DropDown Button</button>
        <div class="dropDownMenu" data-toggle-id="dropDownMenuBtn">
            <a href="#" class="dropdown-item">Action #1</a>
            <a href="#" class="dropdown-item">Action #2</a>
            <a href="#" class="dropdown-item">Action #3</a>
        </div>
    </div>`
);
$('.dropdown-toggle').dropdown();
// Modal create

$('#create').click(() => {
    $('#create').createModal({
        texts: {
            title: 'Create modal title',
            body: ' Lorem ipsum dolor sit amet consectetur!',
        },
        buttons: {
            count: 2,
            settings: [
                ["Close", ['btn', 'orange-btn', 'mr-10', 'remove']],
                ['Save changes', ['btn', 'blue-btn', 'mr-10'], () => { console.log('Success'); }],
            ]
        }
    });
});
