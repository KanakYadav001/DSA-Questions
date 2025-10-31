let arr =[[1,2,3],[4,5,6]]

let row = arr.length
let col = arr[0].length
let arr_reverse = new Array(col)


for(let i = 0; i<arr_reverse.length;i++){
    arr_reverse[i] = new Array(row)
}
for(let i =0 ;i<arr_reverse.length;i++){
    for(let j=0 ; j<arr_reverse[i].length ;j++){
        arr_reverse[i][j] = arr[j][i]
    }
}

console.log(arr_reverse)