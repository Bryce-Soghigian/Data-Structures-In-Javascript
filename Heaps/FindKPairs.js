/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
    /**
 [1,1,2] [1,2,3]
 Generate all pairs and return the first k pairs that we generate
 let pairs = [];
 for(let i = 0;i<nums1.length;i++){
 for(let j = 0;j<nums2.length;j++){
 pairs.push([nums[i],nums[j]])
 }
 }
 
 let result = []
 for(let i = 0;i<k+1;i++){
 result.push(pairs[i])
 }
 **/
   let pairs = [];
 for(let i = 0;i<nums1.length;i++){
 for(let j = 0;j<nums2.length;j++){
 const sum = nums1[i] + nums2[j]
 pairs.push([nums1[i],nums2[j],sum])
 }
 }
 pairs.sort((a,b) => {
     if(a[2] > b[2]){
         return 1
     }else if(b[2] > a[2]){
         return -1
     }else{
         return 0
     }
 })
 let result = []
 for(let i = 0;i<k;i++){
 if(pairs[i]){
   let resArrayPair = [pairs[i][0], pairs[i][1]]
 result.push(resArrayPair)  
 }
 }  
 return result
 }