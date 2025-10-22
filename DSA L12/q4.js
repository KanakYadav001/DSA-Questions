let prompt =require("prompt-sync")()
let num = Number(prompt("Enter Number You Want To Find  : "))
let arr =[1,2,3,4,5]
let count =0
for(let i=0;i<arr.length;i++) {
    if(arr[i]==num){
        console.log(`Number Found ON ${i} Index`)
        count++
    }
}
if(count==0){
    console.log("Number Not Found ")
}

