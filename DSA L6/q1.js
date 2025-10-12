const prompt = require("prompt-sync")()

let num  =Number(prompt("Enter a Number For Sum : "))

let sum =0
while(num>0){
   let rem = num%10
    sum +=rem
    num = Math.floor(num/10)
}

console.log("Total sum is : ",sum)
