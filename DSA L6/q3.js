const prompt = require("prompt-sync")()

let num = Number(prompt("Enter a Number for check Number is equal its square last digit : "))
let squ = num*num ;
let copy = num;
let count = 0
while(num>0){
   count++
   num = Math.floor(num/10)
}
if(squ%Math.pow(10,count)==copy) console.log("This is Automorphic ");
else console.log("Not a Automorphic");
