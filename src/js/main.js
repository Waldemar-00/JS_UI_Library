import './library/lib';
import $ from './library/lib';
$('div').hide();
setTimeout(() => {
    $('div').toggle();
}, 4000); 