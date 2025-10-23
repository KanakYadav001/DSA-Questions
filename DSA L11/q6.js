// let arr =[22,33,44,55,66]
// let temp = arr[arr.length-1]

// for(let i=arr.length-1;i>0;i--){
//     arr[i]=arr[i-1]
// }

// arr[0]=temp
// console.log(arr)


let arr = [10,20,30,40,50]
copy  = arr[arr.length-1]
for(let i=arr.length-1 ; i>0 ;i--){
     arr[i] = arr[i-1]
} 
arr[0] = copy

console.log(arr)
