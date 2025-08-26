window.addEventListener("load", function () {
  const popupBtn = this.document.querySelector(".popup-btn");
  const popText = this.document.querySelector(".pop-text");
  const popupLink = this.document.querySelector(".popup-btn .inner a");
  popupBtn.addEventListener("click", function () {
    // popText.style.display = "none";
    // 안됌
    //삼항연산자
    //     popText.style.display = popText.style.display === "none" ? "block" : "none";
    //   });
    if (popText.style.display === "none") {
      popText.style.display = "block";
      popupLink.classList.remove("active");
    } else {
      popText.style.display = "none";
      popupLink.classList.add("active");
    }
  });
// 괄호랑 class명의 . 이 빠졌음..
//여기에 뭘 불러와야하는지 정의가 부족한듯
  const tabTitles = this.document.querySelectorAll(".tab-nav > li > a");
  const tabItems = this.document.querySelectorAll(".tabitem");
  tabTitles.forEach((element, index) => {
    element.addEventListener("click", () => {
      // 모든 탭과 메뉴를 초기화 하는 코드
      tabTitles.forEach((item) => {
        item.classList.remove("active");
      });
      tabItems.forEach((tab) => {
        tab.style.display = "none";
      });

      element.classList.add("active");
      tabItems[index].style.display = "block";
    });
  });
});
