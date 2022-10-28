const ftext = document.getElementById("ftext");
const stext = document.getElementById("stext");
const copybtn = document.getElementById("copybtn");
const pastbtn = document.getElementById("pastbtn");

const copyContent = (e) => {
  let text = ftext.value;
  console.log(text);
  localStorage.setItem("text", text);
  ftext.value = "";
};

const pestContent = (e) => {
  let text = localStorage.getItem("text");
  stext.value = text;
};

copybtn.addEventListener("click", copyContent);
pastbtn.addEventListener("click", pestContent);
