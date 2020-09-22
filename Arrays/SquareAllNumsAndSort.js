/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    /**
    This takes an array squares all the results and then sorts the resutls
    **/
    let sorted = []
    for(let i =0;i<A.length;i++){
        let res = Math.pow(A[i],2)
        sorted.push(res)
    }
sorted = sorted.sort((a,b) => {
    return a-b
})
    return sorted
}; 