$(document).ready(function(){
    $('#container')
        .find('.hot')
        .children()
        .first()    // or last()
        .next()     //    prev()
        .addClass('highlight');

});