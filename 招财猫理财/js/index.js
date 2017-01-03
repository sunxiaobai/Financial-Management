    // 轮播图

    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
    });


    // 找到存放角度的属性
    $('.newItem3').each(function(ele,index){
        var data = $(this).attr('data-deg');
        var deg = data * 360 / 100;
        // 修改文本
        $(this).find('.bg').html(data+"%");
        
        // 判断旋转度数
        if(deg <= 180){
            // 隐藏over50
            $(this).find('.over50').hide();
            // inner只显示左边  设置inner旋转角度
            $(this).find('.inner').css({"clip":"rect(0,.6rem,1.2rem,0rem)","transform":"rotate("+deg+"deg)"});
            // outer只显示右侧
            $(this).find('.outer').css("clip","rect(0,1.2rem,1.2rem,.6rem)");
        }else if(deg <= 360){
            // 显示over50
            $(this).find('.over50').show();
            // inner只显示左边  设置inner旋转角度
            $(this).find('.inner').css({"clip":"rect(0,.6rem,1.2rem,0rem)","transform":"rotate("+deg+"deg)"});
            // outer只显示右侧
            $(this).find('.outer').css("clip","rect(0,.6rem,1.2rem,0rem)");
        }
    });
