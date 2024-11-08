const sequence = document.querySelector("h2");
const choosedNum = document.querySelector("input");
const submit = document.querySelector("button");
const result = document.querySelector("h4");
const resultNum = document.querySelector(".result");

let arr = [0, 1];
let i;

for (i = 0; i < 18; i++) {
  arr.push(arr.at(-2) + arr.at(-1));
}
console.log("Fibonacci sequence 1-20:");
console.log(...arr);
sequence.textContent = arr.join(" ");

let fibonacci = [0, 1];
let x;

for (x = 0; x <= 999; x++) {
  fibonacci.push(fibonacci.at(-2) + fibonacci.at(-1));
}

submit.addEventListener("click", function (e) {
  e.preventDefault();
  let choosedNumValue = +choosedNum.value;
  if (choosedNumValue > 0 && choosedNumValue <= 999) {
    result.textContent = `The Fibonacci number at position ${choosedNumValue}:`;
    resultNum.textContent = `${BigInt(fibonacci.at(choosedNumValue - 1))}`;
    choosedNum.value = "";
  } else {
    result.textContent = `Choose number between 1 and 999`;
    resultNum.textContent = "";
  }
});
