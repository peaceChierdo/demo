define(['jquery'], function($){
	var Carousel = (function(){

		function _Carousel($ct){
			this.$ct = $ct
			this.$btn = $('.carousel .btn')
			this.$bullets = $('.carousel .bullet li')
			this.init()
			this.bind()		
			var autoplay
			var _this = this
				

			this.$btn.each(function(idx, $node){
			  	_this.autoStop($node)
			})
			this.$bullets.each(function(idx, $node){
			  	_this.autoStop($node)
			})			
	

		}



		_Carousel.prototype = {
			init: function(){
				var $imgct = this.$imgct = this.$ct.find('.img-ct')    			 
				var $imgs = this.$imgs = this.$ct.find('.img-ct >li')
				var $prebtn = this.$prebtn =this.$ct.find('.prebtn')
				var $nextbtn = this.$nextbtn =this.$ct.find('.nextbtn')
				var $bullets = this.$bullets =this.$ct.find('.bullet >li')
				var $carousel = this.$carousel =this.$ct.find('.carousel')
				var pageIndex = this.pageIndex = 0
				var flag = this.flag =0

		        //图片是http协议的时候，不放在src属性里就没有阻止
				$imgs.find('img').each(function(img){
					var imgUrl = $(this).attr('data-src')
			        $(this).attr('src', imgUrl)
			        var viewWidth = $(window).width()
			        $(this).css({width: viewWidth})
				})

				$imgct.append(this.$imgs.first().clone())  
				$imgct.prepend(this.$imgs.last().clone())

				var imgCount = this.imgCount =$imgs.length
				var imgWidth = this.imgWidth = $imgs.width()

				$imgct.width(imgWidth*(imgCount+2))
				$imgct.css({left: -imgWidth})
				this.setIntv()

			},
			setIntv: function(){
			  var _this = this 
			  function setIntv(){
			    _this.autoplay = setInterval(function(){
			      _this.playNext(1)
			    },3000)
			  } 
			  setIntv()				
			},
			autoStop: function(node){
				var _this = this
			  $(node).mouseout(function(){
			    _this.setIntv()
			  }).mouseover(function(){
			    clearInterval(_this.autoplay)
			  })			
			},
			bind: function(){	 
				var _this = this						
			     this.$nextbtn.click(function(e){
					 e.preventDefault();
					_this.playNext(1)
				})
				this.$prebtn.click(function(e){
					 e.preventDefault();
					_this.playPre(1)
				})
				this.$bullets.click(function(){					
				    var index = $(this).index()
				    if(index > _this.pageIndex){
				      _this.playNext(index - _this.pageIndex)
				    }else if(index < _this.pageIndex){
				      _this.playPre(_this.pageIndex-index)
				    }
			  })

			},
			playNext: function(len){
				var _this = this
				this.$imgct.animate({
				  left: '-='+_this.imgWidth*len,
				}, function(){
				  _this.pageIndex += len
				  if(_this.pageIndex === _this.imgCount) {
				    _this.pageIndex = 0
				    _this.$imgct.css({left: -(_this.imgWidth)})
				  }			
				  _this.setBullet()							  
				})
				
			},
			playPre: function (len){
				  var _this = this
					this.$imgct.animate({
					  left: '+='+(_this.imgWidth*len),
					}, function(){
					   _this.pageIndex -= len
					   if(_this.pageIndex <0){
					    _this.pageIndex = _this.imgCount-1
					    _this.$imgct.css({left: -(_this.imgCount*_this.imgWidth)})
					   }
					   _this.setBullet()							   
					})
					
				},
			setBullet: function(){
				 this.$bullets.removeClass('active').eq(this.pageIndex).addClass('active')
			}
		}

		return {
		init: function($ct){
		    $ct.each(function(index, node){
		        new _Carousel($(node));
		    })
		  }
		}

	})()

	return Carousel
})