// const prompt = require("prompt-sync")();

// let pos = Number(prompt("Enter Your Position you want : "));

// let arr = [1, 2, 3, 4, 5];
// pos = pos % arr.length;

// PositionChange(arr, 0, pos - 1);
// PositionChange(arr, pos, arr.length - 1);
// PositionChange(arr, 0, arr.length - 1);
// console.log(arr);

// function PositionChange(arr, i, j) {
//   while (i < j) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++;
//     j--;
//   }
// }


let prompt  = require("prompt-sync")()
let num = Number(prompt("Enter a Number : "))
let arr = [1,2,3,4,5]
num = num%arr.length

Rotate(arr,0,num-1)
Rotate(arr,num,arr.length-1)
Rotate(arr,0,arr.length-1)
console.log(arr)
function Rotate(arr,i,j){
   while(i<j){
    let temp = arr[i]
    arr[i]= arr[j]
    arr[j]=temp
     i++
     j--
   }
   return arr
}