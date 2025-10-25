// let arr  =[2,4,5,6,7,32,1]

// for(let i=1 ; i<arr.length;i++ ){
//     let key = arr[i] 
//     j =i-1
//     while(j>=0 && arr[j]>key){
//         arr[j+1] = arr[j]
//         j--
//     }
//     arr[j+1] = key
// }
// console.log(arr)


let arr = [22,66,44,33,99,66]

for(let i=1;i<arr.length;i++){
    let key= arr[i]
    let j = i-1
    while(j>=0 && arr[j]>key){
        arr[j+1] = arr[j]
        j--
    }
    arr[j+1]=key
}
console.log(arr)