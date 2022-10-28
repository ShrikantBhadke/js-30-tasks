const inputNum = document.getElementById("inputNum");
const btn = document.getElementById("btn");

const checkRange = (e) => {
  let num = Number(inputNum.value);
  if (50 < num && num < 100) {
    alert(`Value is between 50-100`);
  } else {
    alert(`Value is not between 50-100`);
  }
  inputNum.value = "";
};

btn.addEventListener("click", checkRange);
