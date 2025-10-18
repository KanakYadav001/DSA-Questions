const prompt = require("prompt-sync")()

let arr = [20,20,20,20,20]
let sum =0
for(let i=0 ;i<=arr.length-1;i++){
    sum += arr[i]
}

console.log(sum)