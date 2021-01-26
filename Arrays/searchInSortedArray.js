/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    //SOrt array
      nums.sort((a,b) => a-b)
      let low = 0;
      let high = nums.length-1;
      
      while(low <= high){
          let middle = Math.floor((low + high )/ 2)
          if(nums[middle] === target){
              return true
          }
          if(nums[low]< target){
              low++
          }
          if(nums[high] > target){
              high --
          }
      }
      return false
  };