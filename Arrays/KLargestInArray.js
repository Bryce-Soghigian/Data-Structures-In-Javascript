/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    /**
    go through and find all the numbers
    **/
    let numsSet = nums.sort((a,b) => a-b).reverse()
    console.log(numsSet)
    let value;
    let count = 0
    while(true){
        if(count === k){
            value = numsSet[count-1] 
            break
        }else{
            count ++
        }
    }
    return value
};