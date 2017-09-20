define(['jquery'],function($){
	return loadMore = (function(){

		function _loadmore($ct){
			this.$btn = $('#loadmore-btn')
			this.$ct = $ct
      // var currentPage = 1
      // var ppCount = 10
      this.ttHeights = []
      this.itemWidth = $('.item').outerWidth(true)
      this.colCounts = parseInt( $('#wtfpic-ct').width() /this.itemWidth )
      this.nodeWidth = $('.item').outerWidth(true)
      this.items = $('#wtfpic-ct').find('li')
      var flag = 0  

      for(var i=0; i< this.colCounts; i++){
        this.ttHeights[i] = 0 
      }

      var _this = this
      var eq = 0
      if(flag == 0){
	      _this.items.find('img').each(function(idx, item){
	         	var aimg = new Image()	
	         	aimg.src = $(this).attr('src')	
	         	console.log(aimg)         	
	         	aimg.onload = function(){
	         		_this.waterFall($(_this.items[eq]))
	         		eq++
	         		// console.log(_this.items[eq])		
		        }	      	      	
	      })
	      ++flag
      }

      this.$btn.click(function(){
      	console.log('click')   	
      	_this.start()  
      })
      
		}


		_loadmore.prototype = {
			// var _this = this


			getImg: function(){
				var imgUrls = []
				for(var i=0; i< 10; i++){
					var number = parseInt(Math.random()*60+1)

				// 	SyntaxError: Unexpected character '`'
				// If the source uses ES2015 or later syntax, ple
				// ase pass "optimize: 'none'" to r.js and use an
				//  ES2015+ compatible minifier after running r.j
				// s. The included UglifyJS only understands ES5
				// or earlier syntax.

				//imgUrls.push(`./pic/w${number}.jpg`)

					var aurl = './pic/w'+number+'.jpg'
					imgUrls.push(aurl)
				}
				return imgUrls
				
			},

			createNode: function(img){
				var html = ''
        html += '<li class="item">'
        html += '<img src="'+ img +'" alt="">'
        html += '</li>'
        return $(html)
			},

			waterFall: function($node){
				var _this = this
        var min = Math.min.apply(Math, _this.ttHeights)
        var minIndex = (_this.ttHeights).indexOf(min)
        
        $node.css({
          top: _this.ttHeights[minIndex],
          left: $('.item').outerWidth(true)*minIndex,
          // opacity: 1
        })
        
        _this.ttHeights[minIndex] +=$node.outerHeight(true)
        $('#wtfpic-ct').height(Math.max.apply(null, _this.ttHeights))
			},

			start: function(){	
				var _this = this
				var imgUrls = []
				var imgUrls = this.getImg()

				$.each(imgUrls, function(idx, imgurl){				
					 var $node = _this.createNode(imgurl)
					// console.log($node)
         // $node.find('img').load(function(){   load(): jQuery Ajax 方法   (还有一种意思)
         	var img = new Image()
         	img.src = imgurl

         	img.onload = function(){
         		$('#wtfpic-ct').append($node)
						console.log('4')
						_this.waterFall($node)
         	}

						// $('#wtfpic-ct').append($node)
						// console.log('4')
						// _this.waterFall($node)
          //})

				})
				
			}			

		}


		return {
			init: function($ct){
			    new _loadmore($ct);		    
			  }
		}	

	})()
})