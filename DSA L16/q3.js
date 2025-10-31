let arr = [[1,4,7],[2,5,8],[3,6,9]]


for(let i= 0 ; i<arr.length;i++) {
    for(let j=i ; j<arr[i].length ;j++) {
        let temp = arr[i][j]
        arr[i][j] = arr[j][i]
        arr[j][i]  =temp
        
    }
}
for(let i=0 ; i<arr.length;i++) {
    let k=0 ; j=arr[i].length-1
    while(k<j){
        let temp = arr[i][k]
        arr[i][k] =arr[i][j]
        arr[i][j] = temp 
         k++
         j--

    }
}

console.log(arr)