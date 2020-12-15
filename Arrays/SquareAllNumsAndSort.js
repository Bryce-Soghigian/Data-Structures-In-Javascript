/**
Solution on 09/22/2020
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
/**
 * Solution 12/15/2020
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    for(let i = 0;i<nums.length;i++){
        nums[i] = nums[i]*nums[i]
    }
    
    return nums.sort((a,b) => a-b)
};