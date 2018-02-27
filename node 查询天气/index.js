#!/usr/bin/env node

var axios = require('axios')
// console.log(process.argv)

var data = {}

// if(process.argv[2]){
// 	data.params = {
// 		weather: process.argv[2]

// 	}
// 	console.log(data.params)
// }
//没找到这个API上传参数的地方
// axios.get('https://weixin.jirengu.com/weather', data)
// .then(function(response){
// 	 var weather = response.data.weather[0]
// 	 var now = weather.now
// 	 console.log('查询城市：'+weather.city_name)
// 	 console.log(now.text)
// 	 console.log('最低温度：'+now.temperature+'°C')
// 	 console.log('风力: '+now.wind_direction+'风'+now.wind_scale+'级')
// 	 // console.log(weather.today.suggestion.dressing.details)

// })
// .catch(function(error){
// 	console.log(error)
// })

if(process.argv[2]){  //如果输入了城市
	data.params = {
		city: process.argv[2]
	}
}

axios.get('http://api.jirengu.com/weather.php',data)
	.then(function(response){
		var weather = response.data.results[0].weather_data[0]
		console.log(response.data.results[0].currentCity)
		console.log(weather.date)
		console.log(weather.temperature)
		console.log(weather.weather)
		console.log(weather.wind)
	})
	.catch(function(error){
		console.log(error)
	})