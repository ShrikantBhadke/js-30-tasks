const fnameinput = document.getElementById("fname")
const lnameinput = document.getElementById("lname")
const birthYear = document.getElementById("birthYear")
const btn = document.getElementById("btn");


const onclickgetage = (e)=>{
  let fname = fnameinput.value;
  let lname = lnameinput.value;
  let date = new Date();
  date = date.getFullYear()
  let birthyear = birthYear.value;
  let age = date - birthyear;
  alert(`${fname} ${lname} age is ${age}"`)
}


btn.addEventListener("click",onclickgetage)