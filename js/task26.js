const inputstr = document.getElementById("inputstr");
const btn = document.getElementById("btn");

const updateStr = (e) => {
  let str = inputstr.value;
  let strpart = str.slice(0, 1);
  str = str.concat(strpart);
  console.log(str);
};

btn.addEventListener("click", updateStr);
