let prompt = require("prompt-sync")()

let row = Number(prompt("Enter  a Number : "))

for(i=0;i<=row;i++){
    for(j=2;j<=row-i+1;j++){
        process.stdout.write("* ")
    }
    console.log()
}