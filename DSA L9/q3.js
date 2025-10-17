const prompt = require('prompt-sync')()

let n = Number(prompt("Enter Number Of Rows You enter"))

for(let i=1 ;i<=n;i++) {
    for(let j=i ;j<=n ;j++){
        process.stdout.write("* ")
    }
    console.log()
}