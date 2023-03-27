import './library/lib';
import $ from './library/lib';

$('button').on('click', function () {
    $('div').eq(0).toggleClass('active');
});

$('div').click(function () {
    console.log($(this).index());
});
console.log($('div').eq(5).find('.more'));