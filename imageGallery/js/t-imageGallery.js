window.addEventListener("load", function () {
  const overlay = this.document.querySelector(".overlay");
  const thumbBar = this.document.querySelector(".thumb-bar");
  const displayImg = this.document.querySelector(".display-img");
  const images = [
    { src: "pic1.jpg", desc: "Closeup of a human eye" },
    { src: "pic2.jpg", desc: "Rock that looks like a wave" },
    { src: "pic3.jpg", desc: "Purple and white pansies" },
    { src: "pic4.jpg", desc: "Section of wall from a pharoah's tomb" },
    { src: "pic5.jpg", desc: "Large moth on a leaf" },
  ];
  //   이미지 썸네일 생성
  images.forEach((image) => {
    // console.log(image);
    const newImage = this.document.createElement("img");
    newImage.src = `images/${image.src}`;
    newImage.alt = image.desc;
    // console.log(newImage);
    thumbBar.appendChild(newImage);
    newImage.addEventListener("click", function (e) {
      // console.log(e.target);

      displayImg.src = e.target.src;
      displayImg.alt = e.target.alt;
      console.log(displayImg);
    });
  });
});
