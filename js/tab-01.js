window.addEventListener("load", function () {
  const tabs = this.document.querySelectorAll(".tab-btn");
  const tabContents = this.document.querySelectorAll(".tab-content");
  tabs.forEach((tab, index) => {
    // console.log(tab, index);
    // 아직..
    tab.addEventListener("click", () => {
      // console.log(tabContents[index])
      //  한꺼번에 비울 것. t
      tabs.forEach((t) => {
        // console.log(t)
        // 확인완
        t.classList.remove("active");

    });
        tabContents.forEach((td) => {
          td.classList.remove("active");
        });

        // console.log(index)
        tab.classList.add("active");
        tabContents[index].classList.add("active");
    });
  });
});
