const prompt = require('prompt-sync')();

let  p  = Number(prompt("Enter Your Principle : "));
let r = Number(prompt("Enter Rate : "));
let t = Number(prompt("Enter Time "));

console.log((p*Math.pow(1+r/100,t))-p)