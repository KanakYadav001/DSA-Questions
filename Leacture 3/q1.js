//calculate compound Interest
 
var prompt = require('prompt-sync')();

let p = Number(prompt("Enter Principle"));
let r = Number(prompt("Enter Rate"));
let t = Number(prompt("Enter Time"));

console.log((p*Math.pow(1+r/100,t))-p);


