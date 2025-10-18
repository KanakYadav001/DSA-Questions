const prompt = require("prompt-sync")()


let num = Number(prompt("Enter a Number : "))

let original =num

let sum=0


while(num>0){
    let rem =num%10
    let facto =1;
    for(let i=1 ;i<=rem;i++){
        facto *= i
    }
    sum +=facto
    num=Math.floor(num/10)
}

if(original==sum){
    console.log("This is Armstrong Number ")
}
else {
    console.log("This is not a Armstrong Number ")
}
