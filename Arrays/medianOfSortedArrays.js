/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    //A first pass solution would be to merge the two arrays
   let sorted =   nums1.concat(nums2).sort((a,b)=> a-b)
  console.log(sorted)
    if(sorted.length % 2 === 0){
        while(sorted.length !== 2){
            sorted.pop()
            sorted.shift()
        }
    }else{
        while(sorted.length !== 1){
            sorted.shift()
            sorted.pop()
        }
    }
let result = sorted[0]
if(sorted.length === 2){
    result =  (sorted[0] + sorted[1]) / 2
}
return result
};