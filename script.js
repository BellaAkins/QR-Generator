let yourName = prompt("What is your Name?");

let h1 = document.querySelector("h1");
h1.innerHTML = "Hi," + " " + yourName + "😎" + " " + "Welcome to MyQR";

//QR GENERATOR

let imageBox = document.getElementById("imgbox");
let qrImage = document.getElementById("qrimage");
let qrText = document.getElementById("qrtext");

//generateBtn.addEventListener("click", generateQR);

function generateQR() {
  if (qrText.value.length > 0) {
    qrImage.src =
      " https://api.qrserver.com/v1/create-qr-code/?//size=250x250&data=" +
      qrText.value;
    imageBox.classList.add("show-img");
  } else {
    qrText.classList.add("error");
    setTimeout(() => {
      qrText.classList.remove("error");
    }, 1000);
  }
}
