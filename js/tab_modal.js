$(function () {
  // 탭메뉴
  $(".tabmenu > li > a").click(function (e) {
    e.preventDefault();
    // console.log($(this));
    $(this).parent().addClass("active").siblings().removeClass("active");
  });
  //modal open
  $(".notice li:first-child").click(function(){
      $("#modal").addClass("active")
    })
    $(".modal-btn").click(function(){
        $("#modal").removeClass("active")
    })
});