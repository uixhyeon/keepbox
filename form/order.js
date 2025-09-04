window.addEventListener("load", function () {
  const check = this.document.querySelector("#shippingInfo");
  const submit = this.document.querySelector(".order");
  //   체크를 하면 여기 값과 같이 할당 할 것이다
  check.addEventListener("change", function () {
    if (check.checked) {
      // console.log("체크 확인");
      document.querySelector("#shippingName").value =
        document.querySelector("#billingName").value;
      document.querySelector("#shippingTel").value =
        document.querySelector("#billingTel").value;
      document.querySelector("#shippingAddr").value =
        document.querySelector("#billingAddr").value;
    }
  });
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    // console.log("제출");
    //체크박스 상태에 따라서 배송 정보를 업데이트 확인창에 입력
    //체크드가 되어있으면 체크 확인 보임 코드
    if (check.checked) {
      // console.log("체크 확인");
      document.querySelector("#shippingName").value =
        document.querySelector("#billingName").value;
      document.querySelector("#shippingTel").value =
        document.querySelector("#billingTel").value;
      document.querySelector("#shippingAddr").value =
        document.querySelector("#billingAddr").value;
    }
    //확인한 정보 문자열 생성
    //문자열 받아올것을 변수에다 넣음
    const billingName = order.billingName.value; //두가지 방법이 있는데
    // const billingName = document.querySelector("#billingName").value;
    // console.log(billingName)
    // const billingTel = document.querySelector("#billingTel").value;
    const billingTel = order.billingTel.value;
    // console.log(billingTel)
    const billingAddr = document.querySelector("#billingAddr").value;
    // console.log(billingAddr)
    const shippingName = document.querySelector("#shippingName").value;
    // console.log(shippingName)
    const shippingTel = ship.shippingTel.value;
    // console.log(shippingTel)
    const shippingAddr = document.querySelector("#shippingAddr").value;
    // console.log(shippingAddr)

    //확인창을 담아놓음
    let confirmMessage = `
<주문정보>
이름 : ${billingName}
연락처 : ${billingTel}
주소 : ${billingAddr}
<배송정보>
이름 : ${shippingName}
연락처 : ${shippingTel}
주소 : ${shippingAddr} 
이 정보가 정확합니까?
`;
    //사용자에게 정보 확인 대화상자 표시
    //확인 취소에 따른 창
    let userConfirmed = confirm(confirmMessage);
    console.log(userConfirmed);
    if (userConfirmed) {
      alert(" 입력 완료 | 결제 ");
      document.querySelector("#billingName").value = "";
      //    document.querySelector("#billingTel").value = ""

      document.querySelector("#billingTel").value = "";

      document.querySelector("#billingAddr").value = "";
      document.querySelector("#shippingName").value = "";
      document.querySelector("#shippingTel").value = "";
      document.querySelector("#shippingAddr").value = "";
      check.checked = false;
    } else {
      alert("정보를 다시 확인헤 주세요");
    }
  });
});
