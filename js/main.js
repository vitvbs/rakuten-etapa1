$('.active-item').slick({
    asNavFor: '.itens-slider, .item-info',
    slidesToShow: 1,
    autoplay: true,
    fade: true,
    infinite: true
});

$('.itens-slider').slick({
    asNavFor: '.active-item, .item-info',
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    vertical: true,
    focusOnSelect: true,
    infinite: true
});

$('.item-info').slick({
    asNavFor: '.active-item, .itens-slider',
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    prevArrow: '<button type="button" class="slider-prev">Anterior</button>',
    nextArrow: '<button type="button" class="slider-next">Próximo</button>',
    infinite: true
});

$('.ipsun-loren-insta').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slider-prev"></button>',
    nextArrow: '<button type="button" class="slider-next"></button>'
});

$('.seen-shop-items').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slider-prev"></button>',
    nextArrow: '<button type="button" class="slider-next"></button>'
})
