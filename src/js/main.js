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