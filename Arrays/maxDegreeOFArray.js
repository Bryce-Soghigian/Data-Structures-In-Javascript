/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {

    
    /**
    First step
    find frequency
    
    **/
    let freq = {}
    for(let i =0;i<nums.length;i++){
        let key = nums[i]
        if(freq[key] === undefined){
            freq[key] = 1
        }else{
            freq[key] = freq[key] + 1 
        }
    }
    let modes = []
    let entries = Object.values(freq)
    let maxFrequency = Math.max(...entries)
    console.log(freq)
    console.log(maxFrequency,"max")
    
    
    /**
    Loop through freq object and determine which values are most frequent
    **/
    for(let key in freq){
        if(freq[key]=== maxFrequency){
            modes.push(key)
        }
    }
    
    console.log(modes,"MODES")
    let shorterElement = null
    let shorterPath = null;
    for(let i = 0;i<modes.length;i++){
        let pathLength = 0;
        let count = 0;
        let seen = false
        for(let j = 0;j< nums.length;j++){
            if(nums[j]== modes[i]){
                count++
                if(pathLength === 0){
                    pathLength++
                }

            }
            
            if(pathLength !== 0){
             pathLength++
            }
     
            //If we have seen mode[i] maxFrequency num of 
            if(count === maxFrequency){
                console.log("HIT")
                if(pathLength <= shorterPath || shorterPath === null){
                    shorterPath = pathLength
                    shorterElement = modes[i]
                }
            }
        }
        
        
    }
    shorterPath--
    return shorterPath
    
    
    
    /**
    after we have greatest frequency
    we want to loop until we see the item we are looking for
    note that if the greatest frequency is multiple numbers we want to preform that check for each of those numbers
    **/
};