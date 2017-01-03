;(function(){
	$('.msg').on('click',function(){
		var date = 1*1000*60;
		var m = parseInt(date/1000)+1;
		// 启动倒计时
		var timer = setInterval(function(){
			if(m > 1){
				m--;
				$('.msg').html(m+"秒");
			}else{
				clearInterval(timer);
				$('.msg').html("获取验证码");
			}
		},1000);
	});

	$('form').on('submit',function(){
		// 验证
		var patter1 = /^[0-9a-z]{4}$/gi;
		var num1 = patter1.test($('.txt1').val());
		console.log(num1);

		var patter2 = /^\w{6}$/g;
		var num2 = patter2.test($('.txt2').val());
		console.log(num2);
		if(!num1){
			$('.model').css("display","block");
			$('.model .box .pho').html("获取验证码!");
			$('.model .box').show();
			return false;
		}else if(!num2){
			$('.model').css("display","block");
			$('.model .box .pho').html("密码由6-16位字符组成，区分大小写!");
			$('.model .box').show();
			return false;
		}else{
			$('.model').css("display","none");
			$('.model .box').show();
		}
	});
})()

