/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    let totalPairs = 0;
    let pairs = {}
    for(let i = 0;i<nums.length;i++){
        for(let j = 0; j<nums.length;j++){
            let currentPair = nums[i]-nums[j]


                //If currentPair is not in pairs
                // The i !== j is there so that if k === 0 you don't get a bunch of dupes
            if(currentPair === k && i !== j){
                if(pairs[`${nums[i]}&${nums[j]}`] === undefined){
                    pairs[`${nums[i]}&${nums[j]}`] = [nums[i],nums[j]]
     
                    totalPairs++
                }
                
            }
        }
    }

    return totalPairs
};