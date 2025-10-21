let arr = [1,2,3,4,5,6]

let revrse = new Array(arr.length)
let j=0
for(let i=arr.length-1 ; i>=0 ;i--){
    revrse[j] = arr[i]
    j++
}
console.log(revrse)