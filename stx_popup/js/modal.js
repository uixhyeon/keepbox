

window.addEventListener("load", function () {
//   모든 a 태그 기본동작 막기
  const links = this.document.querySelectorAll("a");
  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // 위로가기 방지
    });
  }); // ← forEach 닫는 괄호와 세미콜론 여기!

  // 모달창 닫기
  const modal = this.document.querySelector(".modal-wrap");
  const modalClose = this.document.querySelector(".modal-close");
  modalClose.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // 스크롤 이벤트
  const topBtn = this.document.querySelector(".top-btn");
  this.window.addEventListener("scroll", function () {
    if (this.document.documentElement.scrollTop > 100) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
    }
  });

  topBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

// window.addEventListener("load", function () {

//     //모든 a 태그 기본동작 막기
//     // #은 위로가기임 모든 #을 지워도됌
//     // maincss로.
//     const links = this.document.querySelectorAll("a")
//     links.forEach(function(link){

//  // console.log(link)
// //안됌
// link.addEventListener("click", function(event){
// event.preventDefault()//위로가기 방지

// })
//     }

// )
//   //모달창 닫기
//   const modal = this.document.querySelector(".modal-wrap");
//   const modalClose = this.document.querySelector(".modal-close");
//   modalClose.addEventListener("click", function () {
//     modal.style.display = "none";
//   });

//   //스크롤 이벤트

//   const topBtn = this.document.querySelector(".top-btn");
//   this.window.addEventListener("scroll", function () {
//     // console.log("스크롤 시작")
//     // 확인완
//     if (this.document.documentElement.scrollTop > 100) {
//       topBtn.style.display = "block";
//     } else {
//       topBtn.style.display = "none";
//     }
//   });
// topBtn.addEventListener("click" , function () {
// window.scrollTo(){
//     top:0 ,
//     behavior: "smooth" ,
// }
// })
// });
// 괄호가 잘못됌