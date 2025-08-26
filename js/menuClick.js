window.addEventListener("load", function () {
  const menu = this.document.querySelector(".menu");
  const submenus = this.document.querySelectorAll(".submenu");
  //  비지를 담아보자
  const hBg = this.document.querySelector(".header_bg");
  menu.addEventListener("click", function () {
    // alert("마우스엔터");
    //  확인완료
    console.log(submenus);
    // 코드가 click안에 있다
    submenus.forEach(function (sub) {
      console.log(sub);
      //   확인완
      sub.classList.add("active");
    });
    hBg.classList.add("open");
  });
  menu.addEventListener("click", function () {
    // alert("마우스엔터");
    //  확인완료
    console.log(submenus);
    // 코드가 click안에 있다
    submenus.forEach(function (sub) {
      console.log(sub);
      //   확인완
      sub.classList.add("active");
    });
  });

  menu.addEventListener("mouseleave", function () {
    // alert("마우스엔터");
    //  확인완료
    console.log(submenus);
    // 코드가 mouseleave안에 있다
    submenus.forEach(function (sub) {
      console.log(sub);
      //   확인완
      sub.classList.remove("active");
    });
    hBg.classList.remove("open");
  });
});
