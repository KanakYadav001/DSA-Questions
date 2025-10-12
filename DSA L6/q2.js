const prompt = require("prompt-sync")()

num  = Number(prompt("Enter a Number :"))
let rev=0
while(num>0) {
   let ren = num%10
   rev=(rev*10)+ren
   num = Math.floor(num/10)
}

console.log("Reverse of a number is : ",rev)