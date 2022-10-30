let arr = ["Ram", "Shyam", "Suraj", "Jitendra"];

[arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
console.log(arr);
