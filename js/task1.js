const inputNum = document.getElementById("inputNum");
const btn = document.getElementById("btn");

const onclick = (e) => {
  if (inputNum.value % 2 == 0) {
    alert("Given number is even");
  } else {
    alert("Given number is odd");
  }
};

btn.addEventListener("click", onclick);
