/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */


 //Brute force
var maxSlidingWindow = function(nums, k) {
    //dynamic programming problem
    let localMaxes = []
    for(let i = 0;i<nums.length;i++){
        let window = [];
        let index = i
        let count =0 
        while(count !== k && i+1){
            window.push(nums[index])
            index++
            count++
        }
        if(window.includes(undefined)){
            break
        }
        localMaxes.push(Math.max(...window))
    }
    return localMaxes
}; 


