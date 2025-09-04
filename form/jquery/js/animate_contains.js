$(function(){
    const box = document.querySelector(".box")
    //이동 토글

    $(".move").click(function(){
        if(!box.classList.contains("moved")){
$(".box").animate({ left:"200px" }, 1000)
box.classList.add("moved")
// 부정으로 시작해서 더하여감
        }else{
           $(".box").animate({ left:"0px" }, 1000)
box.classList.remove("moved") 
        }
    })
//크기변경 토글
$(".resize").click(function(){
if(!box.classList.contains("resized")){
           $(".box").animate({ width:"200px", height: "200px" }, 1000)
box.classList.add("resize") 

}else{
      $(".box").animate({ width:"1000px", height: "100px" }, 1000)
box.classList.remove("resize") 
//안댐 ㅠㅠ
}

    // 클릭펑션
})
//투명도 토글
$(".fade").click(function(){
    if(!box.classList.contains("faded")){
        $(".box").animate({opacity: 0.2}, 800)
        box.classList.add("faded") 
    }else{
          $(".box").animate({opacity: 0.2}, 800)
        box.classList.remove("faded") 

    }
})
//모두 에니메이션


//펑션닫
})