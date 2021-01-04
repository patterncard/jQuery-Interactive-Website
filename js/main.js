$(document).ready(function(){
    $('#button-create-item').on('click', function(){
        let name = $('#input-create-item').val();
        $('#input-create-item').val('');

        let html = '';
        html += '<div class="item">';
        html += '<div class="name">' + name + '</div>';
        html += '<img src="assets/pexels-luis-quintero-3689545.jpg" alt="image">';
        html += '<div class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus fugiat est, tenetur quidem facere cupiditate beatae ipsum maxime quos accusantium. Atque nobis iusto similique quia magni reiciendis nulla accusantium vero!</div>';
        html += '<div class="price">499</div>';
        html += '<button class="item-add">Add to cart</button>';
        html += '<button class="item-remove">Remove</button>';
        html += '<br>';
        html += '<a class="more-info-link" href="#">More info</a>';
        html += '<div class="more-info">Lorem ipsum dolor sit</div>';
        html += '</div>';

        $('#container').prepend(html);
    });

    $('#container').on('click', '.more-info-link', function(event){
        event.preventDefault();

        // $(this).parent().find('.more-info').show();
        // $(this).parent().find('.more-info').toggle();
        // $(this).parent().find('.more-info').fadeToggle('fast');
        $(this).parent().find('.more-info').slideToggle('fast');

    });

    $('#container').on('click', '.item-remove', function(){
        $(this).parent().remove();
    });
});