/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
    
    /**
    "IDID"
    [0,1,2,3,4]=== nums
    **/
    let nums = []
    for(let i = 0;i<S.length+1;i++){
        nums.push(i)
    }
    console.log(nums)
    let result = []
    for(let i = 0;i<=S.length;i++){
        if(S[i]==="I"){
            result.push(nums.shift())
        }else{
            result.push(nums.pop())
        }
    }
    return result
    
};