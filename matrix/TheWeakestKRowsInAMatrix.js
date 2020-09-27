/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    /**
    Breaking down the problem.
    1. Go through and rank the rows from weakest to strongest
    2. Create a new array with the indexes of the weakest to strongest
    while loop?
    [[0,1,1],[0,0,0],[1,1,1]]
    [1]=== weakest
    [2] === strongest
    3. Trim the array to only show the first k elements in the array
    
    **/
    let soldiersArray = []
    for(let i =0;i<mat.length;i++){
        let total = 0
        for(let j=0;j<mat[i].length;j++){
            total += mat[i][j]
        }
        soldiersArray.push(total)
    }
    
    let cleanedArray = []
    while(cleanedArray.length !== k){
        //Find the lowest value in soldiersArray and add the index to cleaned array
        let smallestNumber = Math.min(...soldiersArray)
        let i = soldiersArray.indexOf(smallestNumber,0)
        cleanedArray.push(i)
        soldiersArray[i] = Infinity
        console.log(soldiersArray,"soldiers")
    }    

    console.log(cleanedArray,"RETURNED DATA")
    return cleanedArray
};

kWeakestRows([[0,0,0],[0,1,1],[0,0,1]],3)
//n^2+k is complexity