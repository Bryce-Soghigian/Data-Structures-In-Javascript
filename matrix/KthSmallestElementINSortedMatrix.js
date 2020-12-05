/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    let values = []
        for(let i =0;i<matrix.length;i++){
            for(let j = 0;j<matrix[i].length;j++){
                values.push(matrix[i][j])
            }
        }
    values.sort((a,b) => a-b)
    return values[k-1]
    };