/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    /**
    Declare a running sum. 
    for every element in the array besides the first one we want to add the total of all the numbers before it plus that number
    
    
    */
    let runningSum = 0
    for(let i = 1;i<nums.length;i++){
    runningSum =  nums[i-1]
    let newSum = nums[i] + runningSum
    nums[i]= newSum
    }
    return nums
};