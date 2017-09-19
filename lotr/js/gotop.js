define(['jquery'],function($){
	function GoTop($ct){
	  this.ct = $ct
	  this.target = $('<button id="gotop-btn" >GoTop</button>')
	  this.createNode()
	  this.bindEvent()
	}

	GoTop.prototype = {
	  bindEvent: function(){
	    this.target.click(function(){
	      $(window).scrollTop(0)
	    })   
	  },
	  createNode: function(){
	  	var _this = this

	  	$(window).scroll(function(){
	  		if($(window).scrollTop() > $(window).height()){
		  		//console.log($(window).height())
			    var $node = _this.target
			    _this.ct.append($node) 	
			   // console.log($node)  
			    _this.target.css({'display': 'block'})		
		  	}else{
		  	//	console.log('else')
		  		_this.target.css({'display': 'none'})
		  	}

	  	})


 
	}  
	}

	return GoTop
})