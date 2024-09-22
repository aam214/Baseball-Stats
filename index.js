const countsNow = document.querySelectorAll(".counter");

countsNow.forEach(countNow => {
  countNow.innerText = "0";
increaseNumber(countNow);

function increaseNumber(countNow) {
let currentNumber = +countNow.innerText;
const dataCeil = countNow.getAttribute("data-ceil");
const increaseIt = dataCeil / 100;
currentNumber = Math.ceil(currentNumber + increaseIt);


if(currentNumber < dataCeil) {
  countNow.innerText = currentNumber;
  setTimeout(() => increaseNumber(countNow), 5);
} else {
countNow.innerText = dataCeil;
}
}
});

