/**
 * @param {number[]} nums
 * @return {SparseVector}
 */


class SparseVector{
    constructor(nums){
        this.nums = nums
}
    
    dotProduct(vec){
                
        let product = 0
        for(let i = 0;i<this.nums.length;i++){
            
            product += this.nums[i] * vec.nums[i]
        }
        return product
console.log(product,"HI")
}
}

// Return the dotProduct of two sparse vectors
/**
 * @param {SparseVector} vec
 * @return {number}
 */

// Your SparseVector object will be instantiated and called as such:
// let v1 = new SparseVector(nums1);
// let v2 = new SparseVector(nums2);
// let ans = v1.dotProduct(v2);