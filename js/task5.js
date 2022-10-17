const inputstr = document.getElementById("inputstr");
const btn = document.getElementById("btn");

const onclickgetstr = (e) => {
  let str = inputstr.value.trim();
  str = str.slice(3);
  str = str.slice(0,-3)
  alert(str);
};

btn.addEventListener("click", onclickgetstr);
