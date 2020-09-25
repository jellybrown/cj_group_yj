$(function () {

    //header menu
    const header = $('.header_top');
    const logoWrapper = header.find('.logo');
    const logoImg = header.find('.logo img')
    const whiteSrc = './images/cj_logo.png';
    const blackSrc = './images/cj_logo_black.png';
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            header.addClass('narrow');
            changeLogo(blackSrc);
            logoWrapper.stop().animate({
                paddingTop: '10px'
            }, 200)


        } else {
            header.removeClass('narrow');
            changeLogo(whiteSrc);
            logoWrapper.stop().animate({
                paddingTop: '27px'
            }, 200)

        }
    })

    //lang 마우스 오버시
    $('.lang').hover(function () {
        $(this).find('a').stop().animate({
            color: '#666666'
        }, 100)
    }).mouseleave(function () {
        $(this).find('a').stop().animate({
            color: '#fff'
        }, 100)
    })


    function changeLogo(logo) {
        logoImg.fadeOut(300, function () {
            logoImg.attr('src', logo);
            logoImg.fadeIn(300);

        })
    }

    // 스크롤에 따른 섹션별 애니메이션
    const mainVideoHeight = $('.main_video').outerHeight();
    const liveHeight = $('.live_cj').outerHeight();
    const nowHeight = $('.cj_now').outerHeight();

    const brandVideo = $('.brand_video video');
    const brandVideoHeight = brandVideo.outerHeight();
    let userScroll;

    const csvHeight = $('.csv').outerHeight();
    const bestHeight = $('.best_brand').outerHeight();
    $(window).scroll(function () {
        userScroll = $(window).scrollTop();

        //main_video 섹션
        if (userScroll > mainVideoHeight * 0.5) {
            $('.live_cj').addClass('active')
        } else {
            $('.live_cj').removeClass('active')
        }

        //cj_now 섹션
        if (userScroll > mainVideoHeight + liveHeight - 200) {
            $('.cj_now').addClass('active')
        } else {
            $('.cj_now').removeClass('active')
        }

        //best_brand 섹션
        if (userScroll > mainVideoHeight + liveHeight + (nowHeight * 0.7)) {
            $('.brand_video').addClass('active')
            $('.cj_now, .best_brand').stop().animate({
                backgroundColor: 'rgba(182, 220, 156)'

            }, function () {
                $(this).stop().animate({
                    backgroundColor: 'rgba(111, 164, 154)'
                }, 300)
            })

        } else {
            $('.brand_video').removeClass('active')
            $('.cj_now, .best_brand').stop().animate({
                backgroundColor: 'rgba(255,255,255)'
            })

        }

        //best_brand 섹션 - 다시 투명한 배경으로
        //csv 섹션 -글자 아래로
        if (userScroll > mainVideoHeight + liveHeight + nowHeight + (brandVideoHeight * 0.8)) {
            $('.cj_now, .best_brand').stop().animate({
                backgroundColor: 'rgba(255,255,255,0)'
            }, 500);
            $('.csv').addClass('active');
        } else {
            $('.csv').removeClass('active');
        }

        //csv 섹션
        if (userScroll > mainVideoHeight + liveHeight + nowHeight + (bestHeight * 0.6)) {
            $('.csv').find('.csv_lists').addClass('active');
        } else {
            $('.csv').find('.csv_lists').removeClass('active');
        }


    })
})