const prompt = require('prompt-sync')();


let a = Number(prompt("Enter a Number "));
let b = Number(prompt("Enter Second Number "));


if(a>b) {
    console.log(a + " Is Greater")
}
else {
    console.log(b + " is greater");
}