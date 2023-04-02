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