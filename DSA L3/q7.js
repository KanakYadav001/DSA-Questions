
const prompt = require('prompt-sync')();


let Name = prompt("Enter Your Name : ");
let age = Number(prompt("Enter Your Age : "));

if(age>=18) {
    console.log(Name + " You are a valid  Voter");
}else {
    console.log(Name + " You Not A Valid Voter");
}