const prompt = require("prompt-sync")()

let num  = Number(prompt("Enter a Number ToCheck Number is Prime Or Not  : "));

let isPrime = true

if(num<=1){
    console.log("Please enter grater NUmber by 1 : ")
}
else {
    for(let i=2;i<=num/2;i++){
        if(num%i==0){
           isPrime=false
           break
        }
    }
}

if(isPrime){
    console.log("This is a Prime Number ")

}else {
    console.log("Not a Prime NUmber")
}