$(function(){

    //확인팝업
    $('.ico_box:first-child').hover(
        function(){ //마우스가 해당 영역에 들어오면 확인팝업 띄우기
            $(this).parents('.list_item').find('.modal_check').css({
                display: "block"
            });
        },
        function(){  //마우스가 해당 영역에서 벗어나면 확인팝업 사라지기 
            $('.modal_check').css({
                display: "none"
            });
        });
        
});