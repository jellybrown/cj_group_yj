$(function () {

    // search form 나타나기, 사라지기 
    const searchBtn = $('.search');
    const closeBtn = $('.close');
    const searchForm = $('.search_form');


    // 검색버튼 클릭시 밑에 나오기
    searchBtn.click(function (e) {
        e.preventDefault();
        searchForm.addClass('active');
        searchBtn.hide();
        closeBtn.show();
    })

    closeBtn.click(function (e) {
        e.preventDefault();
        searchForm.removeClass('active');
        searchBtn.show();
        closeBtn.hide();
    })

    //검색폼 활성화중, 아무곳이나 누르면 검색폼 비활성화
    $('section').click(function () {
        if (searchForm.hasClass('active')) {
            searchForm.removeClass('active');
            searchBtn.show();
            closeBtn.hide();
        }
    })



    // footer 계열사버튼 slideToggle
    const bizBtn = $('.biz_site');
    bizBtn.find('a:first-child').click(function () {
        bizBtn.find('.biz_site_list').slideToggle(300);
    })

    // go_top 버튼 보이기
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.go_top').addClass('active')
        } else {
            $('.go_top').removeClass('active')
        }

    })

    $('.go_top').click(function () {
        $('html').stop().animate({
            scrollTop: 0
        })
    })

    //live page 마우스 오버시 움직이는 이미지로
    const liveList = $('.live_list ul li');
    let thisImg;
    let imgsrc;
    let splitSrc;
    let arr = [];
    liveList.hover(function () {
            thisImg = $(this).find('a img');
            imgsrc = thisImg.attr('src');
            splitSrc = imgsrc.split('.')[0];
            const newSrc = splitSrc.concat('_01.gif');
            thisImg.attr('src', newSrc);

        })
        .mouseleave(function () {
            for (i = 0; i < 3; i++) {
                arr.push(splitSrc.split('_')[i])
            }
            const pngImg = arr.join('_').concat('.png')
            thisImg.attr('src', pngImg)
            arr = []; //다음 마우스오버를 위해 초기화

        })



    // media page 더보기 정보 가져오기
    const more = $('.more_btn');
    const cardList = $('.media_story ul');
    const loadNum = 12;
    let loadCount = 0;
    let allData;

    $.getJSON('./data/MOCK_DATA.json', function (data) {
        allData = data;
        loadMore();
    });

    more.click(function () {
        loadMore();
    });

    function loadMore() {

        let loadArr = [];
        let sliceData;
        sliceData = allData.slice(loadCount, loadCount + loadNum);
        $.each(sliceData, function (idx, item) {

            let innerText =
                '<li class="sub_thumb">' +
                '<a href="#a">' +
                '<img src = "' + item.photo_address + '.jpg"' +
                ' alt = "">' +
                '<p class = "categories">' + item.category + '</p>' +
                '<div class="text">' +
                '<p class="sub_thumb_title thumb_title">' +
                item.title +
                '</p>' +
                '<div class="tags">' +
                '<span>#' + item.tag1 + '</span>' +
                '<span>#' + item.tag2 + '</span>' +
                '</div>' +
                '</div>' +
                '<div class="black_bg"></div>' +
                '<span class="play_icon"><i class="fas fa-play"></i></span>' +
                '</a>' +
                '<div class="share_btn">share button</div>' +
                '<div class="share">' +
                '<a href="#a" class="facebook">facebook</a>' +
                '<a href="#a" class="google">google+</a>' +
                '<a href="#a" class="url">url copy</a>' +
                '</div>' +
                '</li>'

            loadArr.push($(innerText).get(0));

        })

        cardList.append(loadArr);

        loadCount += sliceData.length;

        // 로드완료시 버튼 안보이게
        if (loadCount < allData.length) {
            more.find('.load_count').text(loadCount + "/" + allData.length)
            more.show();

        } else {
            more.hide();
        }
    }



    // intro page vision tab 활성화
    const visionBtn = $('.vision_tab_btns li');
    const tabContent = $('.vision_box');

    visionBtn.click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        const idx = $(this).index();
        tabContent.hide();
        tabContent.eq(idx).show();
    })

    // intro page (biz) 마우스 오버시 이미지 변경
    const bizTitle = $('.biz_title li')
    const bizBg = $('.biz_bg > div');
    const bizUl = $('.biz_ul_bg > div');
    const innerText = $('.inner_text')
    bizTitle.hover(function () {

        const idx = $(this).index();
        bizBg.eq(idx).addClass('on').siblings().removeClass('on');
        bizUl.eq(idx).addClass('on').siblings().removeClass('on');
        innerText.eq(idx).addClass('active').siblings().removeClass('active');
    })


    //intro page (sports) 클릭시 이미지 변경
    const sportsList = $('.img_lists li');
    const sportsBg = $('.sports_bg div')
    sportsList.click(function () {
        sportsList.removeClass('on');
        $(this).addClass('on');
        const idx = $(this).index();
        sportsBg.eq(idx).addClass('on').siblings().removeClass('on')
    })



})