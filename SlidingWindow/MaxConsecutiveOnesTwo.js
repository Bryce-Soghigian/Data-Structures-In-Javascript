//Time 10 minutes and 57 seconds
//Time complexity === o(2n)
// SPace is constant
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    //Write a sliding window where k == 1
     // We want to find the largest window 
     let start = 0;
     let end = 0;
     let k = 1
     for(end = 0;end< nums.length;end++){
         if(nums[end] === 0){
             k--
         }
 
         if(k < 0){
             //We want to move forward our start pointer until we can increment k again
         if(nums[start] === 0){
              k++   
             }
             start++
 
         }
     }
     return end - start
 };