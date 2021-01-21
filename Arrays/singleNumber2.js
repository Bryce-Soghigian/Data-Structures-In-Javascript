/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    //Count all the numbers and return the one where num is 1
    
    let count = {}
    
    for(let i = 0;i<nums.length;i++){
        if(nums[i] in count){
            count[nums[i]] = count[nums[i]] + 1
        }else{
            count[nums[i]] = 1
        }
    }
    for(let key in count){
        if(count[key] === 1){
            return key
        }
    }
    
    return -1
};

//Time complexity = o(2n) = o(n)
//space = o(n/3)