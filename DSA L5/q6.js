const prompt = require("prompt-sync")()

let num = Number(prompt("Enter a Number  : "))

fact =1

for(i=1;i<=5;i++){
    fact *= i
}

console.log(fact)