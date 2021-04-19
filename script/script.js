/* eslint-disable */

$(function(){

    $("div#topBtnArea").click(function(){
        $(window).scrollTop(0);
    });

    $(window).scroll(function(){
        // 화면 전체가 스크롤 되는 것은 window를
        // 선택자로 지정함
      if($(this).scrollTop()>500){
          $("div#topBtnArea").fadeIn(200);
      } else{
          $("div#topBtnArea").fadeOut(200);
      }
    });

});
