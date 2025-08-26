window.addEventListener("load", function () {
  //모바일 메뉴 토글
  const menuBtn = this.document.querySelector(".menu-btn");
  const menu = this.document.querySelector(".menu");
  menuBtn.addEventListener("click", function () {
    // menu.classList.add("open")
    // 이건 클래스리스트. 명시를 해놓앗기때문에 .open 이 아니다
    if (menu.classList.contains("open")) {
      menu.classList.remove("open");
    } else {
      menu.classList.add("open");
    }
    // 클래스가 없으면 출력해라는 add하라는 것
  });
  //   @@@@@@@@@@@@다시보기^^^^^
  // 메뉴클릭
  const clickBtn = this.document.querySelector(".click-btn");
  const clickMenu = this.document.querySelector(".click-menu");
  clickBtn.addEventListener("click", function () {
    clickMenu.classList.toggle("toggleOpen");
  });
});

// Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')
// 에러가ㅣ 뜻하는가는
