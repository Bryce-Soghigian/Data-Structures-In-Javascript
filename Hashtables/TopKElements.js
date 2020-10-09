/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    /**
    Count all the items in array
    return k elements of 
    **/
    let hashMap = {}
    let res = []
    for(let i = 0;i<nums.length;i++){
        if(hashMap[nums[i]]!== undefined){
            hashMap[nums[i]] = hashMap[nums[i]]+1
        }else{
            hashMap[nums[i]] = 1
        }
    }
    let resultArray = Array.from(Object.entries(hashMap).sort((a, b) => a[1] - b[1]))
resultArray = resultArray.reverse()
let count = 0
for(let i = 0;i<k;i++){
    res.push(resultArray[i][0])
}
    return res
};