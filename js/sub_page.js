$(function () {
    const headerHeight = $('header').outerHeight();
    const livelistHeight = $('.live_cj .live_list').outerHeight();
    const brandHeight = $('.brand_page').outerHeight();
    $(window).scroll(function () {

        // 헤더 서브메뉴 고정 (서브페이지에서만)
        if ($(this).scrollTop() >= $('.header_top').outerHeight()) {
            $('.sub_menu').addClass('fixed')
        } else {
            $('.sub_menu').removeClass('fixed')
        }

        // 스크롤 내린상태에서 검색버튼 누르면 맨위로
        $('.search').click(function () {
            if ($('.sub_menu').hasClass('fixed')) {
                $('html').stop().animate({
                    scrollTop: 0
                })
            }

        })
        // live sub_page의 deco img
        if ($(this).scrollTop() > headerHeight + (livelistHeight * 0.3)) {
            $('.deco_img1,.deco_img2').addClass('active')
        } else {
            $('.deco_img1,.deco_img2').removeClass('active')
        }
        if ($(this).scrollTop() > headerHeight + (livelistHeight * 0.7)) {
            $('.deco_img3').addClass('active')
        } else {
            $('.deco_img3').removeClass('active')
        }


        //brand sub_page의 deco img
        if ($(this).scrollTop() > headerHeight) {
            $('.deco_brand_1, .deco_brand_2').addClass('active')
        } else {
            $('.deco_brand_1, .deco_brand_2').removeClass('active')
        }

        if ($(this).scrollTop() > headerHeight + (brandHeight * 0.4)) {
            $('.deco_brand_3, .deco_brand_4').addClass('active')
        } else {
            $('.deco_brand_3, .deco_brand_4').removeClass('active')
        }

    })

    //login page 입력안하면 에러, 에러있으면 전송불가
    const loginBox = $('.login_box form')
    loginBox.find('button').click(function () {
        loginBox.find('input').each(function () {
            let value = $(this).val();
            if (value == "") {
                $(this).addClass('error')
            } else {
                $(this).removeClass('error')
            }
        })

        if ($('.error').length >= 1) {
            loginBox.find('button').attr('disabled', true)
        }
        loginBox.find('input').click(function () {
            $(this).removeClass('error')
            loginBox.find('button').attr('disabled', false)
        })


    })


})