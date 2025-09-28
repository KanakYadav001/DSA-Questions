const prompt = require("prompt-sync")()

let n = Number(prompt("Enter a Number"));

for(let i=n;i>0;i--){
    console.log(i);
}