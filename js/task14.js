const btn = document.getElementById("btn");
function add(x, y) {
  return x + y;
}

let val1 = prompt("Please enter your name", "");
let val2 = prompt("Please enter your name", "");
const showadd = (e) => {
  let num1 = Number(val1);
  let num2 = Number(val2);
  alert(`Addition of two Num is ${add(num1, num2)}.`);
};

btn.addEventListener("click", showadd);
