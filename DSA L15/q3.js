let prompt = require('prompt-sync')()

let size = Number(prompt("Enter Size Of arr "))
let arr = new Array(size)


for(let i=0 ;i<arr.length;i++) {
    arr[i] = new Array(4)
}

for(let i=0;i<arr.length;i++) {
    for(let j =0 ;j<arr[i].length ;j++){
        arr[i][j] = Number(prompt(`Enter ${i} row and ${j} column `));
    }
}

console.log(arr)