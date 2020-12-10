var maxSubArray = function(nums) {
    let length = nums.length;
    let localMax = 0;let globalMax = Number.NEGATIVE_INFINITY
        for(let i = 0;i<length;i++){
            localMax = Math.max(nums[i], nums[i]+ localMax);
            if(localMax > globalMax){
                globalMax = localMax
            }
        }
        return globalMax
    };

    