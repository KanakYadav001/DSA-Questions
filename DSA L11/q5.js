// let arr = [1,2,3,45,10]

// let temp = arr[0]

// for(let i = 0;i<arr.length;i++) {
//     arr[i]=arr[i+1]
// }
// arr[arr.length-1]= temp

// console.log(arr)

let arr = [20, 30, 40, 50];
let copy = arr[0];
for (let i = 0; i < arr.length - 1; i++) {
  arr[i] = arr[i + 1];
}
arr[arr.length - 1] = copy;

console.log(arr);
