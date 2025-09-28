const prompt = require("prompt-sync")()

let n = Number(prompt("Enter a Number"));

for(i=1;i<=10;i++){
    console.log(n + " X " + i +" = "+(n*i))
}