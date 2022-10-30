let str = "thisIsATrickyOne";
// str = "poTAtO";
// str = "boTtlE";
console.log(str);
let result = "";
let rest = "";
for (let i = 0; i < str.length; i++) {
  if (str[i] === str[i].toUpperCase()) {
    result += str[i];
  }
  if (str[i] === str[i].toLowerCase()) {
    rest += str[i];
  }
}
result = result.concat(rest);
console.log(result);
