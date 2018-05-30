define(['./jquery-3.2.1.min'],function($){
	var loadMore = (function(){

		function _loadmore($ct){
			this.$btn = $('#loadmore-btn')
			this.$ct = $ct
			this.ttHeights = []
			this.itemWidth = $('.item').outerWidth(true)
			this.colCounts = parseInt( $('#wtfpic-ct').width() /this.itemWidth )
			this.nodeWidth = $('.item').outerWidth(true)
			var flag = 0 
			this.lock = 0
			var _this = this
			for(var i=0; i< this.colCounts; i++){
				this.ttHeights[i] = 0 
			}
			//this.start()	
			// $.each($('.item'), function(idx, item){
			// 	$(item).find('img').on('load',function(){
			// 		console.log('in')
			// 		_this.waterFall($(item))					
			// 	})
			// })
			setTimeout(function(){
				$.each($('.item'), function(idx, item){
					console.log('1')
					_this.waterFall($(item))
					$(item).addClass('showup')					
				})								
			}, 3000)
			// $.each($('.item'), function(idx, item){
			// 		console.log('1')
			// 		_this.waterFall($(item))					
			// })		
			this.$btn.click(function(){
				console.log('click')  
				if(_this.lock === 1){ return } 	
				_this.start()  
			})      
		}

		_loadmore.prototype = {
			start: function(){	
				var _this = this
				var imgUrls = []
				var imgUrls = this.getImg()
				_this.lock = 1

				$.each(imgUrls, function(idx, imgurl){				
					var $node = _this.createNode(imgurl)
					// console.log($node)
	                // $node.find('img').load(function(){   load(): jQuery Ajax 方法   (还有一种意思)
		     	    // var img = new Image()
		     	    // img.src = imgurl
			     	$node.find('img').on('load',function(){
			     		$('#wtfpic-ct').append($node)
							console.log('来了来了')
							_this.waterFall($node)	     		
			     	})

				})
				_this.lock = 0			
			},

			getImg: function(){
				var imgUrls = []
				for(var i=0; i< 10; i++){
					var number = parseInt(Math.random()*59)+1
					var aurl = './pic/w'+number+'.jpg'
					imgUrls.push(aurl)
				}
				return imgUrls
			
			},

			createNode: function(imgurl){
				var html = ''
		        html += '<li class="item">'
		        html += '<img src="'+ imgurl +'" alt="">'
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
			}		
		}
		return {
			init: function($ct){
			    new _loadmore($ct);		    
			  }
		}	

		})()
	return loadMore
})