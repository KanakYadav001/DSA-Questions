const prompt = require("prompt-sync")()

const num = Number(prompt("Enter Rotation Position "))
let arr = [1,2,3,4,5]
const tempArr = new Array(arr.length)

for(let i=0;i<arr.length;i++) {
    tempArr[i]=arr[(i+num)%arr.length]
}

console.log(tempArr)