const prompt = require("prompt-sync")()
let find = Number(prompt("Enter a Number : "));
let arr =[10,20,30,40,50,60,70,80,90,100]

if(findEle(arr,find)===-1)console.log("Element Not Found")
else console.log("Element Found");
    





function findEle(arr,find){
  let s=0,e=arr.length-1
  while(s<=e){
    let mid  = Math.floor((s+e)/2)
    if(arr[mid]==find) return mid
    else if (arr[mid]>find) e = mid-1
    else s = mid+1
  }
  return -1
}