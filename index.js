const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
  counter.innerText = "0";
increaseNumber(counter);

function increaseNumber(counter) {
let currentNumber = +counter.innerText;
//get attribute from HTML element
const dataCeil = counter.getAttribute("data-ceil");
//increase by 1% when the function gets called.
const increaseIt = dataCeil / 100;
currentNumber = Math.ceil(currentNumber + increaseIt);
if(currentNumber < dataCeil) {
  counter.innerText = currentNumber;
  setTimeout(() => increaseNumber(counter), 10);
} else {
counter.innerText = dataCeil;
}
}
});

