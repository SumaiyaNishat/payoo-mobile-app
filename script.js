// login button functionality
document.getElementById("login-button").addEventListener("click", function (e) {
  e.preventDefault();
  // save in variable mobile & pin number
  const mobileNumber = 123456789;
  const pinNumber = 1234;
  // value access & convert in number
  const mobileNumberValue = document.getElementById("mobile-number").value;
  const mobileNumberValueConverted = parseInt(mobileNumberValue);

  const pinNumberValue = document.getElementById("pin-number").value;
  const pinNumberValueConverted = parseInt(pinNumberValue);

  // check
  if (
    mobileNumberValueConverted === mobileNumber &&
    pinNumberValueConverted === pinNumber
  ) {
    window.location.href = "./home.html";
  } else {
    alert("invalid Credentials");
  }
});
