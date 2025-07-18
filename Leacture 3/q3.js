//area of triangle by heroes Formula
var prompt = require('prompt-sync')();

let a = Number(prompt("Enter a Number"));
let b = Number(prompt("Enter a Number"));
let c = Number(prompt("Enter a Number"));


if(a+b<=c || b+c<=a || a+c<=b){
    console.log("Not Possible");
}
else {
    let s = (a+b+c)/2;
    console.log(Math.sqrt(s*(s-a)*(s-b)*(s-c)))
}