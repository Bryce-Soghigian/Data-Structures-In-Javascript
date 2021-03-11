/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function(nums) {
    
    const unique = new Map();
    let begin = 0;
    let end = 0;
    let max = 0;
    let runningSum = 0;
    while(end < nums.length){
      if(!unique.has(nums[end])){
          unique.set(nums[end])
          runningSum += nums[end]
          end++
          max = Math.max(max,runningSum)    
      }else{
        unique.delete(nums[begin])
         runningSum -= nums[begin]
        begin++  
      }
    }
    
    
    
    return max
    
    
};