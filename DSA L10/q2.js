const prompt = require("prompt-sync")()

// let arr =[22,33,44,55,66,77]

// arr.push(40)
// arr.unshift(30)
// arr.pop()
// console.log(arr)


let size = Number(prompt("Enter Size of arry you want : "))

let arr = new Array(size)

for(let i=0 ;i<=size;i++){
   let digits = Number(prompt(`Enter ${i} Digit : `))
    arr[i]=digits
}

console.log(arr)