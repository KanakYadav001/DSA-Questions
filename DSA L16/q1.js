// let arr1 = [[1,2,3],[4,5,6]]

// let arr = Array.from({length:arr1[0].length},()=>Array(arr1.length))

// for(let i=0 ; i<arr.length;i++) {
//     for(let j=0 ; j<arr[i].length ;j++) {
//         arr[i][j] = arr1[j][i]
//     }
// }

// console.log(arr)


let Matrix  = [[1,2,3],[4,5,6]]
let Matrix_reverse = Array.from({length:Matrix[0].length},()=> Array(Matrix.length))

for(let i =0  ;i <Matrix_reverse.length ;i++) {
    for(let j=0 ; j<Matrix_reverse[i].length;j++){
        Matrix_reverse[i][j] = Matrix[j][i]
    }
}

console.log(Matrix_reverse)