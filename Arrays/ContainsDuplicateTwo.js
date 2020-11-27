/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let containsDuplicate = false
    for(let i = 0;i<nums.length;i++){
        //Check each element for duplicates within k
        let set = new Set()
        //console.log(`New num ${nums[i]}=========`)
        //console.log(set)
        //console.log(i,"i")
        for(let j = 0;j<=k;j++){
        //console.log(j,"j var")

        if(set.has(nums[i+j]) && nums[i+j] !== undefined){
            //console.log(`${nums[i+j]} is a duplicate `)
            containsDuplicate =  true//Contains duplicates
        }else{
            set.add(nums[i+j])
        }
        
        }
        
    }
    return containsDuplicate
};