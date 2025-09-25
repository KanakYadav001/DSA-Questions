const prompt = require('prompt-sync')();




let num = Number(prompt("Enter a Number : "));

if(num%2==0) {
    console.log(num + " Is A Even Number")
}

else {
    console.log(num + " Is Not A Even Number")
}