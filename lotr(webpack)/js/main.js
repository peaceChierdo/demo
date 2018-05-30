
// require.config({
//     paths : {
//         "jquery" : '/js/jquery-3.2.1.min.js',
//         "gotop": '/js/gotop.js',
//         "carousel": '/js/carousel.js',
//         "loadmore": '/js/loadmore.js'
//     }
// });



require('../css/index.css');
var $ = require('./jquery-3.2.1.min.js');

var Carousel = require('./carousel.js');
var loadMore = require('./loadmore.js');
var GoTop = require('./gotop.js');



Carousel.init($('.carousel '))
loadMore.init($('.wrap'))
new GoTop($('.gotop-ct'))