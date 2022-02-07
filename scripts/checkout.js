

  
    function conformOrder() {
        let cardNumber = document.getElementById("cardNumber").value;
        let dateOfExpiry = document.getElementById("dateOfExpiry").value;
        let cvv = document.getElementById("cvv").value;
        console.log(cardNumber, dateOfExpiry, cvv);
        if (cardNumber && dateOfExpiry && cvv) {
          setTimeout(function () {
            alert("order deliverd");
            window.location.href = "index.html";

          }, 3000);
        }
      }
  