$(function () {
  const box = document.querySelector(".box");
  // 이동 토글
  $(".move").click(function () {
    if (!box.classList.contains("moved")) {
      $(".box").animate({ left: "200px" }, 1000);
      box.classList.add("moved");
    } else {
      $(".box").animate({ left: "0px" }, 1000);
      box.classList.remove("moved");
    }
  });
  // 크기 변경 토글
  $(".resize").click(function () {
    if (!box.classList.contains("resized")) {
      $(".box").animate({ width: "200px", height: "200px" }, 1000);
      box.classList.add("resized");
    } else {
      $(".box").animate({ width: "100px", height: "100px" }, 1000);
      box.classList.remove("resized");
    }
  });
  // 투명도 토글
  $(".fade").click(function () {
    if (!box.classList.contains("faded")) {
      $(".box").animate({ opacity: 0.2 }, 800);
      box.classList.add("faded");
    } else {
      $(".box").animate({ opacity: 1 }, 800);
      box.classList.remove("faded");
    }
  });
  // 모두 애니메이션 토글
  $(".all").click(function () {
    if (!box.classList.contains("changed")) {
      $(".box").animate(
        {
          left: "200px",
          width: "200px",
          height: "200px",
          opacity: 0.2,
        },
        1000
      );
      box.classList.add("changed");
    } else {
      $(".box").animate(
        {
          left: "0px",
          width: "100px",
          height: "100px",
          opacity: 1,
        },
        1000
      );
      box.classList.remove("changed");
    }
  });
});
