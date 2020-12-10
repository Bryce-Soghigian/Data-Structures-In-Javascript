/**
 * @param {number[]} A
 * @return {number}
 */
var largestUniqueNumber = function(A) {
    /**
    Check for all unique numbers
    and put them in an array
    
    */
    let countObj = {};
    for(let i = 0;i<A.length;i++){
        if(countObj[A[i]]=== undefined){
            countObj[A[i]] = 1
        }else{
            countObj[A[i]] = countObj[A[i]] +1
        }
    }
    let unique = []
    let noUniqueFlag = false
    for(let key in countObj){
        //If its unique
        if(countObj[key]=== 1){
            noUniqueFlag = true
            unique.push(key)
        }
    }
    
    let max = Math.max(...unique)
    if(noUniqueFlag === false){
        return -1
    }else{
        return max
    }
};