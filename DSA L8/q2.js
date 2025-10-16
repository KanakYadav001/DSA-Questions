var prompt = require("prompt-sync")()

let row = Number(prompt("Enter Number Of Rows : "))

for(i=1 ;i<=row ;i++) {
    for(j=1;j<=row ;j++){
        process.stdout.write("* ")
    }
    console.log()
}