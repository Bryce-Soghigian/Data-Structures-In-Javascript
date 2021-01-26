var singleNumber = function(nums) {
    let freq = {}
    
    for(let i = 0;i<nums.length;i++){
        if(nums[i] in freq){
            freq[nums[i]] = freq[nums[i]] + 1
        }else{
            freq[nums[i]] = 1
        }
    }
        
    let output = []
        for(let key in freq){
            if(freq[key] == 1){
                output.push(key)
            }
        }
        return output
    };