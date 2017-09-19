
require.config({
    paths : {
        "jquery" : './js/jquery-3.2.1.min',
        "gotop": './js/gotop',
        "carousel": './js/carousel',
        "loadmore": './js/loadmore'
    }
});


require(['jquery', 'gotop','carousel','loadmore'], function ($, GoTop, Carousel, loadMore){
    Carousel.init($('.carousel '))
    new GoTop($('.gotop-ct'))
    loadMore.init($('.wrap'))

});