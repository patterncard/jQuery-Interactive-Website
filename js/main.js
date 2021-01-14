let cart = 0;

function addItem(id, name, description, price, moreInfo) {
    let html = '';
        html += '<div class="item" data-id="' + id + '">';
        html += '<div class="name">' + name + '</div>';
        html += '<img src="assets/pexels-luis-quintero-3689545.jpg" alt="image">';
        html += '<div class="description">' + description + '</div>';
        html += '<div class="price">' + price + '</div>';
        html += '<button class="item-add">Add to cart</button>';
        html += '<button class="item-remove">Remove</button>';
        html += '<br>';
        html += '<a class="more-info-link" href="#">More info</a>';
        html += '<div class="more-info"> + moreInfo + </div>';
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

    $.ajax('data/item.json', {
        dataType: 'json',
        constentType: 'application/jason',
        cache: false
    })
        .done(function(response){
            let items = response.items;
            items.forEach(function(item) {
                addItem(item.id, item.name, item.description, item.price, item.moreInfo);
            });
        })
        .fail(function(request, errorType, errorMessage){
        })
        .always(function(){

        })

        $('#container').on('click', '.item-add', function(){
            let id = $(this).parent().data('id');
            console.log(id);
            $.ajax('data/addToCart.json', {
                type: 'post',
                data: {id: id},
                dataType:'json',
                constentType: 'application/json'
            })
            .done(function(response) {
                if (response.message +++ 'success') {
                    let price = response.price;
                    console.log(price);

                    cart += price;

                    $('#cart-container').text('$' + cart);
                }
            });
        });
});