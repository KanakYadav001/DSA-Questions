const prompt = require("prompt-sync")();
let rotate = Number(prompt("Enter a Number : "));

let arr = [1, 2, 3, 4, 5];
rotate = rotate % arr.length;
let copy;
for (let i = 1; i <= rotate; i++) {
  let j = 0;
  copy = arr[0];
  while (j < arr.length - 1) {
    arr[j] = arr[j + 1];
    j++;
  }
  arr[arr.length - 1] = copy;
}

console.log(arr);
