var patter = /^1[3589]\d{9}$/gi;
		$('form').on('submit',function(){
			// alert(1);
			var txt1 = $('form .txt1').val();
			var stxt1 = patter.test(txt1);
			var txt2 = $('form textarea').val();
			var stxt2 = $.trim(txt2);
			if(!stxt1){
				$('form').find('.yz1').show();
				// alert(1);
				return false;

			}else if(!stxt2){
				$('form').find('.yz1').hide();
				$('form').find('.yz2').show();
				return false;
			}
		});
