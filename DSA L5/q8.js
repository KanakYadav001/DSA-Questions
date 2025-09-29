const prompt = require("prompt-sync")()

let num  = Number(prompt("Enter a Number to find what the factors of a Number  : "))

for(i=1 ; i<=num/2 ;i++){
    if(num%i==0) {
        console.log(i);
    }
}

console.log(num)