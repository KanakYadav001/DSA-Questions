let arr =[22,1,4,3,7,2,3,5]
let n=arr.length
for(let i=0 ;i<n-1 ;i++){
  for(let j=0 ; j<n-i-1;j++){
    if(arr[j]>arr[j+1]){
        let temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
    }
  }
}

console.log(arr)