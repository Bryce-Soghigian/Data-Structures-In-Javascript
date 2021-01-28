// /**
//  * @param {number[]} nums
//  * @return {number}
//  */


var myBruteForceSolution = function(nums) {

    // // //We want to go through the array and generate a dp array
    
    
    
        let max = -Infinity
        for(let i = 0;i<nums.length;i++){
            let subarray = 1
            for(let j = i;j<nums.length;j++){
                    subarray *= nums[j]
                    max = Math.max(max,subarray)   
                
            }
        }
        return max
    };
    const myDpSolution = (nums) => {
    let dp = new Array(nums.length).fill(1)
    let max = -Infinity
    if(nums[0] === 0) dp[0] = 1
    else   dp[0] = nums[0] 
    
    if(nums.length === 1) return nums[0]
    for(let i = 1;i<nums.length;i++){
        console.log(dp)
        if(nums[i]=== 0){
            dp[i] = 1
        }else{
        dp[i] = nums[i] * dp[i-1]
        console.log(dp)
        if(dp[i] > max){
            max = dp[i]
        } 
        }
    
    }
    }
    var anotherJSProgrammersSolution = function(nums) {
        const min = [1];
        const max = [1];
        for(let i = 0; i<nums.length; i++) {
            const num = nums[i];
            if(num<0) {
                min[i+1] = Math.min(max[i]*num, num);
                max[i+1] = Math.max(min[i]*num, num);
            }else {
                min[i+1] = Math.min(min[i] * num, num);
                max[i+1] = Math.max(max[i] * num, num)
            }
        }
        console.log(min,max)
        max[0] = -Infinity;
        return Math.max(...max);
    };