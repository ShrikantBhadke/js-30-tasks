let arry = ["Jitendra", "Shyam", "Suraj", "Ram"];

var lgth = 0;
var longest;

for (var i = 0; i < arry.length; i++) {
  if (arry[i].length > lgth) {
    var lgth = arry[i].length;
    longest = arry[i];
  }
}

console.log(longest);
