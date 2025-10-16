var prompt = require('prompt-sync')()

let row = Number(prompt("Enter How Many Rows You Want : "))

for(i=1;i<=row;i++) {
    for(j=1;j<=i;j++) {
    process.stdout.write(j+" ")

    }
    console.log()
}









