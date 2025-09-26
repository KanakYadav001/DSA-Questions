let prompt = require("prompt-sync")();

let unit = Number(prompt("Enter Your Unit : "));
let amount = 0 

if (unit>0 && unit<=100) amount = unit*4.2
else if (unit>=101 && unit<=200) amount  = (100*4.2) + (unit-100)*6
else if (unit>=201 && unit<=400) amount = (100*4.2) +(100*6) + (unit-200)*8
else if (unit>400) amount  = (100*4.2) +(100*6) +(200*8) + (unit-400)*16
else console.log("No Bill Apply")


console.log("Your Final Amount is " + amount)
