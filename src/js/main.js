import './library/lib';
import $ from './library/lib';
console.log($('div').html());
$('div').html('My library');
console.log($('div').html());
setTimeout(() => {
    console.log($('button').html());
}, 4000);

