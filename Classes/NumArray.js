class NumArray {
    constructor(nums){
        this.nums = nums
    }
    
    /**
    Return the sujm of numbers from the startIndex to endIndex
    
    **/
    sumRange(startIndex,endIndex){
        let window = this.nums.slice(startIndex,endIndex+1)
        let sum = 0
        for(let i = 0;i<window.length;i++){
           sum += window[i]
            
        }
        console.log(window,`Sum of window = ${sum}`)
        return sum
    }
}

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */