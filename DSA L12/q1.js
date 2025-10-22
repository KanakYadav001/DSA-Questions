const prompt = require("prompt-sync")();

let num = Number(prompt("Enter your Position : "));
let arr = [1, 2, 3, 4, 5, 6];

num = num % arr.length;

Change(arr, 0, num - 1);
Change(arr, num, arr.length - 1);
Change(arr, 0, arr.length - 1);
console.log(arr);
function Change(arr, i, j) {
 while(i<j){
     let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  i++;
  j--;
 }
}
