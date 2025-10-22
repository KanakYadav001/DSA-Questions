const prompt = require("prompt-sync")()

let rotate = Number(prompt("Enter a Number : "))
let arr = [1,2,3,4,5]
for(let i =1 ; i<=rotate;i++) {
let copy = arr[0]
for(let k = 0 ;k<arr.length;k++) {
    arr[k]=arr[k+1]
}
arr[arr.length-1]=copy
}

console.log(arr)
