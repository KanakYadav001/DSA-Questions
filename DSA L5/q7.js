const prompt = require("prompt-sync")()

let num = Number(prompt("Enter a Number  : "))

let Even_sum =0 ,Odd_sum =0


for(let i= 0 ; i<=num ; i++ ){
    if(i%2==0){
        Even_sum +=i
    }
    else {
        Odd_sum +=i
    }
}

console.log(`Sum of Odd Sum is ${Odd_sum} and Sum of Even Sum is ${Even_sum} `)