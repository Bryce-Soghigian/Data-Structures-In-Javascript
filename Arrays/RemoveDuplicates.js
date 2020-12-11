/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
//Initializing our counter and our second pointer
let j = 1;
let count = 1;
    
//Start from the second ele of the array

for(let i = 1;i<nums.length;i++){
    //If curr == dupe increment count
    if(nums[i] === nums[i-1]){
        count++
    }else{
        count = 1
    }
    if(count <= 2){
        nums[j] = nums[i];
        j += 1
    }
    
}
return j

};  


