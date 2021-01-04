/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    /**
    We want to go through all the elements in our array in circular order and look for the next greatest
    5
    we check all the elements in the array until we get back to 5 and find none greater than it
    **/
let output = [];
let circular = nums.slice()
 circular = circular.concat(circular)
for(let i = 0;i<nums.length;i++){
    let pushed = false
    let curr = nums[i]
    for(let j = i;j<circular.length;j++){
    if(circular[j] > curr){
        pushed = true
        output.push(circular[j])
        break
    }
}
    if(pushed === false) output.push(-1)
}




return output
};


const nextGreaterStackSolution = nums => {
    let stack = [], len = nums.length;
    let res = new Array(len);
    // stack stores numbers who are looking for greater numbers
    for (let i = 0; i < nums.length; i++) {
        while (stack.length > 0 && stack[stack.length-1][0] < nums[i]) {
            res[stack.pop()[1]] = nums[i];
        }
        stack.push([nums[i], i]);
    }
    
    // No need to push numbers into stack in our second loop
    // because we've already scanned through the whole array once
    // If there is no greater number in this second pass, then there doesn't exist one,
    // because two scans in a circular array is equal to one full rotation
    for (let i = 0; i < nums.length; i++) {
        while (stack.length > 0 && stack[stack.length-1][0] < nums[i]) {
            res[stack.pop()[1]] = nums[i];
        }
    }
    for (let [num, idx] of stack) {
        res[idx] = -1;
    }
    return res;
    // Time Complexity: O(n)
    // Space Complexity: O(n)
}