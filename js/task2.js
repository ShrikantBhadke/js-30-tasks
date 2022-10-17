const numOne = document.getElementById("numOne");
const numTwo = document.getElementById("numTwo");
const calciBtn = document.getElementById("calciBtn");


const onclickcalciBtn = (e)=>{
  let x = Number(numOne.value);
  let y = Number(numTwo.value);
  console.log(`Addition of ${(x)} and ${(y)} is ${x+y}`);
  console.log(`Substraction of ${(x)} and ${(y)} is ${x-y}`);
  console.log(`Multiplication of ${(x)} and ${(y)} is ${x*y}`);
  console.log(`Dividation of ${(x)} and ${(y)} is ${x/y}`); 
}






calciBtn.addEventListener("click",onclickcalciBtn)