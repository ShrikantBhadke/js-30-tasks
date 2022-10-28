const orangeC = document.getElementById("orangeC");
const greenC = document.getElementById("greenC");
const blueC = document.getElementById("blueC");
const getbody = document.querySelector("body");

const boyColorOrange = (e) => {
  getbody.style.backgroundColor = "orange";
};

const bodyColorGreen = (e) => {
  getbody.style.backgroundColor = "green";
};

const bodyColorBlue = (e) => {
  getbody.style.backgroundColor = "blue";
};

orangeC.addEventListener("click", boyColorOrange);
greenC.addEventListener("click", bodyColorGreen);
blueC.addEventListener("click", bodyColorBlue);
