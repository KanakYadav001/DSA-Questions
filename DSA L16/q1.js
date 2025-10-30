let arr1 = [[1,2,3],[4,5,6]]

let arr = Array.from({length:arr1[0].length},()=>Array(arr1.length))

for(let i=0 ; i<arr.length;i++) {
    for(let j=0 ; j<arr[i].length ;j++) {
        arr[i][j] = arr1[j][i]
    }
}

console.log(arr)