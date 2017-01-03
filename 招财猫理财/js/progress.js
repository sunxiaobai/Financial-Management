;(function(){
	$('.progress').css('width',0);
	requestAnimationFrame(function(){
		var wd = $('.progress').attr('data-width');
		$('.progress').css('width',wd+"%");
		$('.progress').find('b').html(wd + "%");	
	});
})()