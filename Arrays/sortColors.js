/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    //IMplement a sorting algorithm from scratch
    const swap = (i,j) => {
        const temp = nums[j]
        nums[j] = nums[i]
        nums[i] = temp
        
    }
    
    for(let i = 0;i<nums.length;i++){
        for(let j = 0;j<nums.length;j++){
            if(nums[i] < nums[j]){
                swap(i,j)
            }
        }
    }
};