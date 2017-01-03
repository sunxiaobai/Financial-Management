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

			$('.model').css("display","none");
			
			$('.boxs').removeClass('now');
		});