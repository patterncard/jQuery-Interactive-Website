$(document).ready(function(){
    $('#snow')
        .parent()
        .find('.title')
        .addClass('highlight');

        console.log($('#snow').parents());
        console.log($('#snow').closest('#container'));

});