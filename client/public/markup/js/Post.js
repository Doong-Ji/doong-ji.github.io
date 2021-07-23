$(function () {

    //확인 팝업
    $('.btn_check').hover(function () { //마우스가 해당 영역에 들어오면 확인팝업 띄우기
        $('.modal_check').css({display: 'block'});
    }, function () { //마우스가 해당 영역에서 벗어나면 확인팝업 사라지기
        $('.modal_check').css({display: "none"});
    });

    //프로필 팝업
    $('.btn_user_profile').click(function () {
        $(this)
            .siblings('.modal_user_profile')
            .css({display: 'block'});
    });

    //제목&댓글 영역 더보기 팝업
    $('.btn_more_mobile, .btn_more').click(function () {
        $(this)
            .siblings('.btn_box_more')
            .css({display: 'flex'});
    });

    //댓글 아이콘 클릭시 대댓글 아래로 펼쳐지기
    $('.btn_add_comment').click(function () {
        $(this)
            .closest('.comment_list_item')
            .find('.comment_list.depth')
            .toggle();
    });

    //외부영역 클릭시 프로필/더보기 팝업 닫기
    $(document).mouseup(function (e) {
        var container = $('.modal_user_profile, .btn_box_more');
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.css({display: 'none'});
        }
    });

    //신고 팝업 열기
    $('.btn_report').click(function () {
        //스크록 막기
        $('body').css({overflow: 'hidden'});
        $(this)
            .parent('.btn_box_more')
            .css({display: 'none'});
        $('.bg_modal, .modal.report').css({display: 'block'});
    });
    //닫기
    $('.btn_cancel').click(function () {
        //스크록 풀기
        $('body').css({overflow: 'scroll'});
        $('.bg_modal, .modal.report').css({display: 'none'});
    });

    //삭제 팝업 열기
    $('.btn_delete').click(function () {
        //스크록 막기
        $('body').css({overflow: 'hidden'});
        $(this)
            .parent('.btn_box_more')
            .css({display: 'none'});
        $('.bg_modal, .modal.delete').css({display: 'block'});
    });
    //닫기
    $('.btn_cancel').click(function () {
        //스크록 풀기
        $('body').css({overflow: 'scroll'});
        $('.bg_modal, .modal.delete').css({display: 'none'});
    });

});