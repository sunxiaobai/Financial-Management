	// 当文本框获得焦点时，将提示文字变化
		$('.txt').focus(function(){
			$(this).attr("placeholder","手机号是您登陆的账户"); 
		});
		
		// 点击下一步时，如果未输入手机号弹出模态框
		$('.content form').submit(function(){
			// 正则
			var pattern = /^1[3578]\d{9}$/gi;
			if(pattern.test($('.txt').val()) == false){
				$('.model').css("display","block");
				$('.model .box').show();
				return false;
			}
		});
		// 点击模态框的叉号和确定 关闭模态框
		$('.box span,.box button').click(function(){
			$(this).parent().parent().hide(500);
			$('.model .box').hide();
		});
		// 点击右按钮切换显示下拉框
		$('.btn_right').click(function(){
			$('.boxs').toggleClass('now');
			if($('.boxs').hasClass('now')){
				$('.model').css("display","block");
				$('.model .box').hide();

			}else{
				$('.model').css("display","none");
			}
			return false;
		});

		$('.model').click(function(){
			// if($('.model .box').hide()){
				$('.model').css("display","none");
				
				$('.boxs').removeClass('now');
			// }
		});
	