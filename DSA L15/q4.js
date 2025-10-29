let arr = [[1,2,3],[4,5,6],[7,8,9]]
let right_dinalog  =0
let left_dinalog  =0

for(let i=0 ;i<arr.length;i++){
   for(let j =0 ;j<arr[i].length;j++){
    if(i==j){
        left_dinalog +=arr[i][j]
    }
    if(i+j==arr.length-1){
        right_dinalog +=arr[i][j]
    }
   }

}
console.log(right_dinalog)
console.log(left_dinalog)