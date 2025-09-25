const prompt = require('prompt-sync')();

let a = Number(prompt("Enter One Numebr : "))
let b = Number(prompt("Enter Second Numebr : "))
let c = Number(prompt("Enter Third Numebr : "))

let greater = Math.max(a,b,c);
console.log(greater + " Is a greater Number Among Them")
