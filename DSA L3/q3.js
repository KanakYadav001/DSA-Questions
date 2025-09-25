const prompt = require('prompt-sync')();


let a = Number(prompt("Enter First side "));
let b = Number(prompt("Enter Second side "));
let c = Number(prompt("Enter Third side "));


if(a+b<=c || b+c<=a || c+a<=b) {
    console.log("Not pOssible")
}
else {
    let s =(a+b+c)/2
    console.log(Math.trunc( Math.sqrt(s*(s-a)*(s-b)*(s-c))));
}


