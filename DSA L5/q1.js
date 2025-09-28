let prompt = require("prompt-sync")()

let n = Number(prompt("Enter a Number  :"))

if(isNaN(n)){
   console.log("Invalid Input");
}

else {
for(i=0;i<=n;i++) {
   console.log("Hello World !")
}
}
