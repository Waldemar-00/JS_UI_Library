import './library/lib';
import $ from './library/lib';
$('button').on('click', function () {
    $(this).toggleClass('active');
});
