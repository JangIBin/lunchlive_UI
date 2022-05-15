// 휠 클릭 시 한 영역씩 이동
window.onload = function () {
    $(".contents").each(function () {
        // 개별적으로 Wheel 이벤트 적용
        $(this).on("mousewheel DOMMouseScroll", function (e) {
            e.preventDefault();
            var delta = 0;
            if (!event) event = window.event;
            if (event.wheelDelta) {
                delta = event.wheelDelta / 120;
                if (window.opera) delta = -delta;
            } else if (event.detail) delta = -event.detail / 3;
            var moveTop = null;
            // 마우스휠을 위에서 아래로
            if (delta < 0) {
                if ($(this).next() != undefined) {
                    moveTop = $(this).next().offset().top;
                }
            // 마우스휠을 아래에서 위로
            } else {
                if ($(this).prev() != undefined) {
                    moveTop = $(this).prev().offset().top;
                }
            }
            // 화면 이동 0.8초(800)
            $("html,body").stop().animate({
                scrollTop: moveTop + 'px'
            }, {
                duration: 800, complete: function () {
                }
            });
        });
    });
}

// btn 클릭하면 스클롤 이동
function fnMove(seq){
    var offset = $("#div" + seq).size() ? $("#div" + seq).offset():0;
    $('html, body').animate({scrollTop : offset.top}, 400);
}

// btn 클릭하면 class추가
$(document).on("click", "button", function(e) {
    e.preventDefault(); // 기본으로 정의된 이벤트를 작동하지 못하게 하는 메서드
    // .siblings() 객체와 동일한 위치에 있는 모든 객체 (자신을 제외한 형제요소)를 검색하는 메소드
    $(this).addClass("active").siblings().removeClass("active");

    fnMove($(this).data("n"));
});

//스크롤 내릴 시 헤더 변경
$(window).on('scroll',function(){
    if($(window).scrollTop()){
        $('.header').addClass('active'); 
    }else{
        $('.header').removeClass('active');
    } 
});
