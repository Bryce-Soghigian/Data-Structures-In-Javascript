class NumArray {
    constructor(nums){
        this.nums = nums
        this.sum = new Array(nums.length).fill(0)
        let sum = this.sum
        for(let i = 0;i<nums.length;i++){
            sum[i+1] = sum[i] + nums[i]
        }
    }
    
    /**
    Return the sujm of numbers from the startIndex to endIndex
    
    **/
    sumRange(startIndex,endIndex){
        let sum = this.sum
        return sum[endIndex+1] - sum[startIndex]
    }
}

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */