window.addEventListener("load", function () {
  const tabs = this.document.querySelectorAll(".tab-btn");
  const tabContents = this.document.querySelectorAll(".tab-contnet");
  tabs.forEach((tab, index) => {
    // console.log(tab ,index);
    tab.addEventListener("click", () => {
      // console.log(index);
      tabs.forEach((t) => {
        // console.log(t);
        t.classList.remove("active");
      });
      tabContents.forEach((tc) => {
        // console.log(tc);
        tc.classList.remove("active")
      });
      //    console.log(tabContents[index]);
      tab.classList.add("active");
      tabContents[index].classList.add("active");
    });
  });
});
