const prompt = require("prompt-sync")()


let row  = Number(prompt("Enter rows Sequesce : "))
let string = ""

for(i=1;i<=row;i++) {
    for(j=0;j<i;j++){
    string += String.fromCharCode(j+65)
    } 
    string+="\n"
}
console.log(string)