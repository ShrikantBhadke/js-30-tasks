const inputNum1 = document.getElementById("inputNum1");
const inputNum2 = document.getElementById("inputNum2");
const inputNum3 = document.getElementById("inputNum3");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");

const convertMin = (e) => {
  let getMin = Number(inputNum1.value);
  let seconds = getMin * 60;
  alert(`${getMin} min = ${seconds} sec`);
  inputNum1.value = "";
};

const convertHours = (e) => {
  let getHours = Number(inputNum2.value);
  let min = getHours * 60;
  alert(`${getHours} hr = ${min} min`);
  inputNum2.value = "";
};

const convertSec = (e) => {
  let getsec = Number(inputNum3.value);
  let min = getsec / 60;
  alert(`${getsec} sec = ${min} min`);
  inputNum3.value = "";
};
btn1.addEventListener("click", convertMin);
btn2.addEventListener("click", convertHours);
btn3.addEventListener("click", convertSec);
