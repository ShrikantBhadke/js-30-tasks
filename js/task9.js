let startYear = new Date("10/25/2019").toISOString().slice(0, 10);
let currDate = new Date().toISOString().slice(0, 10);
console.log(currDate);
let enddate = currDate;
console.log(startYear);
let diffMisec = new Date(enddate) - new Date(startYear);

let days = diffMisec / (1000 * 60 * 60 * 24);

alert(days);
