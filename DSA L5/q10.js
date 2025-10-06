const prompt = require("prompt-sync")()

let n  = Number(prompt("Enter a Number "));


let isPrime = IsPrime(n)


if(isPrime){
    console.log("This is a Prime ")
}
else {
    console.log("This is Not a Prime")
}

function IsPrime(n){
   if (n<=1) return false
   if(n==2) return true
   if(n%2==0) return false

   for(let i =3 ; i<=Math.floor(Math.sqrt(n));i+=2){
    if(n%i==0){
        return false
    }
   }
   return true
}