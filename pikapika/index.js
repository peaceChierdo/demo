!function(){
	let buttons = document.getElementsByClassName('speedControl') 
	console.log(buttons[0])
	let duration = 50
	let container = document.getElementById('code')
	let styleCode = document.getElementById('styleCode')
	buttons[0].addEventListener('click', function(e){
		let speed = e.target.getAttribute('id')
		console.log(speed)
		switch(speed){
			case 'faster':
				duration = 10
				break;
			case 'normal':
				duration = 50
				break;
			case 'slower':
				duration = 110
				break;
		}	
	})

	function Write(code){
		let n = 1
		setTimeout(function run(){
			container.innerHTML = code.substring(0,n)
			styleCode.innerHTML = code.substring(0,n)
			container.scrollTop = container.scrollHeight
			n++;
			if(n <= code.length){
				setTimeout(run, duration)
			}else{
				console.log('finished')
			}
		}, duration)
	}	

	let code = `
		/*来画一个皮卡丘吧！*/

		/*先给它上个颜色*/
		.output-wrapper{
		  background: #FEE433;
		}

		/*接下来画它的眼睛*/
		.eyes{
		  position: absolute;
		  width: 49px;
		  height: 49px;
		  border: 2px solid black;
		  border-radius: 50%;
		  background: #2E2E2E;		  
		}
		.eye-left{
		  right: 50%;
		  margin-right: 90px;
		}
		.eye-right{
		  left: 50%;
		  margin-left: 90px;
		}

		/*点上白色的眼珠*/
		.eyes::after{
		  content: '';
		  display: block;
		  width: 24px;
		  height: 24px;
		  position: absolute;
		  left: 7px;
		  top: 2px;
		  background: #fff;
		  border-radius: 50%;
		}

		/*再画一个小鼻子*/
		.nose{
		  position: absolute;
		  left: 50%;
		  top: 28px;
		  transform: translateX(-50%);
		  border: 12px solid;
		  border-color: black transparent transparent;
		  border-radius: 48%;
		}

		/*还有它的两坨腮红*/
		.cheeks{
		  position: absolute;
		  top: 85px;
		  width: 68px;
		  height: 68px;
		  border: 2px solid black;
		  border-radius: 50%;
		  background: #FC0D1C;
		}
		.cheek-left{
		  right: 50%;
		  margin-right: 116px;
		}
		.cheek-right{
		  left: 50%;
		  margin-left: 116px;
		}

		/*接着画它的嘴唇*/
		.upperlip{
		  position: absolute;
		  top: 52px;
		  width: 65px;
		  height: 20px;
		  border: 2px solid black;
		  background: #FEE433;
		  z-index: 1;
		}
		.upperlip-left{
		  right: 50%;
		  border-bottom-left-radius: 40px 20px;
		  border-top: none;
		  border-right: none;
		  transform: rotate(-23deg);
		}
		.upperlip-right{
		  left: 50%;
		  border-bottom-right-radius: 40px 20px;
		  border-top: none;
		  border-left: none;
		  transform: rotate(23deg);
		}

		/*下嘴唇*/
		.lowerlip-wrapper{
		  position: absolute;
		  bottom: -20px;
		  width: 300px;
		  height: 125px;
		  left: 50%;
		  margin-left: -150px;
		  overflow: hidden;
		}
		.lowerlip{
		  position: absolute;
		  bottom: 0px;
		  left: 50%;
		  margin-left: -76px;
		  width: 150px;
		  height: 1200px;
		  background: #990513;
		  border: 2px solid black;
		  border-radius: 100px/600px;
		  overflow: hidden;
		}

		/*最后画上舌头*/
		.lowerlip::after{
		  content: '';
		  position: absolute;
		  width: 100px;
		  height: 100px;
		  border-radius: 50%;
		  background: #FC4A62;
		  bottom: 0px;
		  left: 50%;
		  margin-left: -50px;
		}	

		/*完成！！！*/
	`
	Write(code)

}.call()