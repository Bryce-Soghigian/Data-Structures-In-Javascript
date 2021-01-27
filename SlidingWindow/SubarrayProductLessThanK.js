/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    /**
    We want to generate every subarray
    We could use top down to generate all of the subarrays
    or we could use bottom up and keep a running product array
    **/
    let start = 0;
    let count = 0;
    let end = 0;
    let product = 1;
    for(end = 0;end<nums.length;end++){
        if(k <= 1) return 0
        product *= nums[end]
        while(product >= k){
            product /=nums[start++]
            console.log(product)
        } 
        count += end - start + 1
    }
    return count
};