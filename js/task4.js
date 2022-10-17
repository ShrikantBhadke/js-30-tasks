const fnum = document.getElementById("fnum");
const Snum = document.getElementById("Snum");
const Tnum = document.getElementById("Tnum");
const btn = document.getElementById("btn");

const onclickgetNum = (e) => {
  let x = Number(fnum.value);
  let y = Number(Snum.value);
  let z = Number(Tnum.value);
  let numarr = [x, y, z];
  let a = Math.max(...numarr);
  let b = Math.min(...numarr);
  alert(`Highest number is: ${a} and Lowest number is: ${b}`);
};

btn.addEventListener("click", onclickgetNum);
