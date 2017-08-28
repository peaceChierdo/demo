function setRouter(app){ 
 var router = app; 

router.get('/getMore', function(req, res){
	console.log(req)
	var len = req.query.length
	var idx = parseInt(req.query.index)
	var data = []
	console.log(idx)
	for(var i=0; i<len; i++){
		data.push(idx+i+1)
	}
	res.send(data)

})}
 module.exports.setRouter = setRouter