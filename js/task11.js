const inputNum = document.getElementById("inputNum");
const btn = document.getElementById("btn");

const getNumber = (event) => {
  let num = Number(inputNum.value);
  let arr = [];
  for (let i = num + 1; i <= num + 5; i++) {
    arr.push(i);
  }
  alert(`The next Five Numbers are ${arr}.`);
};

btn.addEventListener("click", getNumber);
