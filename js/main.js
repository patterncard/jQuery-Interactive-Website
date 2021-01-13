function addItem(name, description, price, moreInfo) {
    let html = '';
        html += '<div class="item">';
        html += '<div class="name">' + name + '</div>';
        html += '<img src="assets/pexels-luis-quintero-3689545.jpg" alt="image">';
        html += '<div class="description">' + description + '</div>';
        html += '<div class="price">' + price + '</div>';
        html += '<button class="item-add">Add to cart</button>';
        html += '<button class="item-remove">Remove</button>';
        html += '<br>';
        html += '<a class="more-info-link" href="#">' + moreInfo + '</a>';
        html += '<div class="more-info">Lorem ipsum dolor sit</div>';
        html += '</div>';

        $('#container').prepend(html);
}

$(document).ready(function(){
    $('#container').on('click', '.more-info-link', function(event){
        event.preventDefault();

        // $(this).parent().find('.more-info').show();
        // $(this).parent().find('.more-info').toggle();
        // $(this).parent().find('.more-info').fadeToggle('fast');
        $(this).parent().find('.more-info').slideToggle('fast');
        
        $(this)
            .animate({ "opacity": 0.5,
                "margin-left": 10 }, 'fast')
            .animate({ "opacity": 1.0,
                "margin-left": 0 }, 'fast');

    });

    $('#container').on('click', '.item-remove', function(){
        $(this).parent().remove();
    });

    $.ajax('data/item.json')
        .done(function(response){
            let items = response.items;
            items.forEach(function(item) {
                addItem(item.name, item.description, item.price, item.moreInfo);
            });
        })
        .fail(function(request, errorType, errorMessage){
            console.log(errorMessage);
        })
        .always(function(){

        })
});