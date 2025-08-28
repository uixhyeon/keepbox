window.addEventListener("load", function () {
  const pics = this.document.querySelectorAll(".pic"); //썸네일 이미지들 다 담아놓음
  const lightBox = this.document.querySelector("#lightBox");
  const lightBoxImag = this.document.querySelector("#lightBoxImg");
  //모든 섬네일에 이벤트 클릭
  pics.forEach((pic) => {
    // console.log(pic)
    pic.addEventListener("click", () => {
      // console.log("click")
      const bigSrc = pic.dataset.src;
      // data-src 를 사용하려면 dataset를 사용 src라는??를 한다
      //src를 하면 이미지의 경로만 남는다
      console.log(bigSrc);
      //      console.log(lightBoxImag)
      //  이걸 보면 어디를 클릭하든 1번만 찍히는걸 알 수있다.addEventListener
      //        그래서 bigSrc로 경로를 찾음
      lightBoxImag.src = bigSrc;
      console.log(lightBoxImag);
      lightBox.style.display = "block";
    });
    lightBox.addEventListener("click", () => {
      lightBox.style.display = "none";
    });
    //포이치 닫
  });
  //윈도우 닫
});
