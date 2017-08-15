function setRouter(app){ 
 var router = app; 

router.get('/loadMore', function(req, res) {
	var nextIndex = req.query.index,
		len = req.query.length,
		data = []
	for(var i=0; i< len; i++){
		data.push('内容'+(parseInt(nextIndex) + i))
	}
	setTimeout(function(){
		res.send(data)
	}, 3000)
})}
 module.exports.setRouter = setRouter