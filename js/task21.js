const btn = document.getElementById("btn");

const openNewUrl = (e) => {
  window.open("https://www.yahoo.com", "_blank");
};

btn.addEventListener("click", openNewUrl);
