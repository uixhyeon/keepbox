$(function(){
//좌우 슬라이드 기능
const slideList = $(".slide-list")
const slideWidth = $(".slide-list li").width()
console.log(slideWidth)
const moveslide = ()=>{
slideList.animate({marginLeft : -slideWidth} , 1000 , function(){
    // $(this)
    // console.log(this)
    //디스는 슬라이드 리스트 이다
    $(this).append($(this).find("li:first"))
    $(this).css({marginLeft:0})
    //-600 간 것을 0으로 만들어줘서 자연스럽게 가게함
    // console.log(this)
})
}
// 시간을 반복적으로..셋인터벌
setInterval(moveslide , 3000)
//2. 위로가기 슬라이드
const slideListUp = $(".slide-list-up")
const slideHight = $(".slide-list-up li").height()
console.log(slideHight)
const moveUp = ()=>{
slideListUp.animate({marginTop: -slideHight} , 1000 , function(){
 $(this).append($(this).find("li:first"))
    $(this).css({marginTop:0})
})
}
setInterval(moveUp , 3000)
})