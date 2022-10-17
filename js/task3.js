const firstNum = document.getElementById("firstNum");
const secondNum = document.getElementById("secondNum");
const btnRandome = document.getElementById("btnRandome");

const getRandomNum = (e) => {
  let x = Number(firstNum.value);
  let y = Number(secondNum.value);
  getRandom(x, y);
};

function getRandom(min, max) {
  console.log(Math.floor(Math.random() * (max - min + 1)) + min);
}
btnRandome.addEventListener("click", getRandomNum);
