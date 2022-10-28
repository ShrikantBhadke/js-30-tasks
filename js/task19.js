// const decrease = document.querySelector(".decrease");
// const increase = document.querySelector(".increase");
// const para = document.getElementById("para");

// const decFontSize = (e) => {
//   style = window.getComputedStyle(para, null).getPropertyValue("font-size");
//   currentSize = parseFloat(style);
//   para.style.fontSize = currentSize - 1 + "px";
// };
// const incFontSize = (e) => {
//   style = window.getComputedStyle(para, null).getPropertyValue("font-size");
//   currentSize = parseFloat(style);
//   para.style.fontSize = currentSize + 1 + "px";
// };

function increaseFontSize(id, increaseFactor) {
  txt = document.getElementById(id);
  style = window.getComputedStyle(txt, null).getPropertyValue("font-size");
  currentSize = parseFloat(style);
  txt.style.fontSize = currentSize + increaseFactor + "px";
}

// decrease.addEventListener("click", decFontSize);
// increase.addEventListener("click", incFontSize);
