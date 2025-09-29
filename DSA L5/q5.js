const prompt = require("prompt-sync")()

let n = Number(prompt("Enter a Number  : "));

let sum =0
for(i=0;i<=n;i++) {
    sum +=i
}
console.log(sum)