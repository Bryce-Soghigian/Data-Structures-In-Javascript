/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    //1. Time efficent set/hashtable
//     const seen = new Set();
//     for(let i = 0;i<nums.length;i++){
//         let key = nums[i];
//         if(seen.has(key)){
//             return key
//         }else{
//             seen.add(key)
//         }
        
//     }
    //2. Space Efficent sorting
    //nlogn + o(n)
    // nums.sort((a,b) => a-b)
    // for(let i = 1;i<nums.length;i++){
    //     const key = nums[i]
    //     if(key === nums[i-1]){
    //         return key
    //     }
    // }
    //3. Cycle Detection
    let t = nums[0]//Tortoise
    let h = nums[0]//Hare
    //Find crossing point
    while(true){
        t = nums[t]
        h = nums[nums[h]]
        if(t==h){
        break
        }
    }
    //Find start of cycle
    t = nums[0]
    while(t !== h){
        t = nums[t]
        h = nums[h]
    }
    return h
};