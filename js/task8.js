const inputCap = document.getElementById("inputCap");
const btn = document.getElementById("btn");

const onclick = (e) => {
  alert(inputCap.value.toUpperCase());
};

btn.addEventListener("click", onclick);
