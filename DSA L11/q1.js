let arr = [22,33,44,55,66,66]

let max = Math.max(arr[0],arr[1])
let smax = Math.min(arr[0],arr[1])

for(let i=0 ;i<arr.length ;i++){
    if(max < arr[i]){
        smax= max
        max = arr[i]
    }
    else if(arr[i]>smax && arr[i]!=max) {
           smax=arr[i]
    }
    
}

console.log(smax)