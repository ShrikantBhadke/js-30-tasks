let arr = [
  12, 45, 62, 78, 23, 45, 12, 65, 98, 25, 31, 7, 14, 32, 02, 26, 74, 95, 120,
];

function maxNumber(arry) {
  let max = arry[0];
  let min = arry[0];
  arry.forEach((ele) => {
    if (ele) {
      if (ele > max) {
        max = ele;
      }
      if (ele < min) {
        min = ele;
      }
    }
  });
  alert(`The Max Number is ${max} and Min Number is ${min} .`);
}

console.log(maxNumber(arr));
