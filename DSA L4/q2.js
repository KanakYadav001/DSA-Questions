let prompt = require("prompt-sync")();

let amount = Number(prompt("Enter Your Ammount : "));
let dec =0

if(amount>=0 && amount<=5000){
    console.log("Discount not aplicable")

}else if (amount>5000 && amount<=7000){
    dec = 10
}

else if (amount>7000 && amount<=9000){
  dec =15
}

else if (amount>9000){
  dec = 20
}

else {
    console.log("Please Enter Valid  Amount ")
}

console.log(amount-(dec*amount/100))