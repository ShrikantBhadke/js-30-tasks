const inputCap = document.getElementById("inputCap");
const btn = document.getElementById("btn");

const onclick = (e) => {
  let inputVal = inputCap.value;
  let str = inputVal[0].toUpperCase() + inputVal.slice(1);
  alert(str);
};

btn.addEventListener("click", onclick);
