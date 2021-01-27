// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number[]}
//  */
var medianSlidingWindow = function(nums, k) {
    let output = []
    let start = 0
    for(let end = k;end<=nums.length;end++){
       let window = nums.slice(start,end) 
       window.sort((a,b) => a-b)
       let middle = Math.floor(window.length/2)
       if(window.length %2 === 0){
            output.push((window[middle-1] + window[middle]) / 2)
       }else{
            output.push(window[middle])
       }
      start++
    }
    return output
    };
    