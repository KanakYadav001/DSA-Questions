const prompt = require("prompt-sync")()

const n  = Number(prompt("Enter a Number : "))

for(i=1;i<=n;i++) {
    let count=65 
    for(j=0;j<i;j++){
        process.stdout.write(String.fromCharCode(count)+" ")
        count++
    }
    console.log()
}