const count = document.getElementById("count");
const decrease = document.getElementById("decrease");
const increase = document.getElementById("increase");
const decByOne = (e) => {
  let getNum = Number(count.innerText) - 1;
  count.innerText = getNum;
};

const incByOne = (e) => {
  let getNum = Number(count.innerText) + 1;
  count.innerText = getNum;
};

decrease.addEventListener("click", decByOne);
increase.addEventListener("click", incByOne);
