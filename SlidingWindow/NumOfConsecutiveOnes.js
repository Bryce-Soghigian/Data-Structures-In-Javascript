/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    //Basically we just want to loop through the array and find a chain of ones
    
    //We have a variable that counts max and once we braek a chain of ones we want to set our local_max = max if its greater than current max
    
    let globalMax = 0;
    let localMax = 0
    for(let i = 0;i<nums.length;i++){
        if(nums[i] === 1){
            localMax++
            if(localMax > globalMax){
                globalMax = localMax
            }
        }else{
            localMax = 0
        }
    }
    return globalMax
};
//SOlved in 3 minutes and 4 seconds
// O(nums.length) time
// o(1) space