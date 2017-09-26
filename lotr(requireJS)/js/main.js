
require.config({
    paths : {
        "jquery" : './jquery-3.2.1.min',
        "gotop": './gotop',
        "carousel": './carousel',
        "loadmore": './loadmore'
    }
});


require(['jquery', 'gotop','carousel','loadmore'], function ($, GoTop, Carousel, loadMore){
    Carousel.init($('.carousel '))
    new GoTop($('.gotop-ct'))
    loadMore.init($('.wrap'))

});