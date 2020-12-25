$(document).ready(function(){
    console.log('We are ready!');
    console.log(document);
    console.log($(document));
    $('body').text('Hello world!');
    $('body').html('<strong>Hello world!</strong>');
});