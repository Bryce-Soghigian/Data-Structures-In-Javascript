/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function(arr) {
    //i(n^2)
    /**
    1. Generating all of the subarrays
    2. While generating subarrays take min value
    3. push value to reduce array
    4. reduce values in reduce array
    
    **/
let reduce = 0;
for(let i = 0;i<arr.length;i++){
    let subArrayMinimum = Infinity
    for(let j = i;j<arr.length;j++){
        if(arr[j] < subArrayMinimum){
            subArrayMinimum = arr[j]
    
        }
        
        reduce += subArrayMinimum
    }
}
let totalMinimums = reduce % (Math.pow(10,9) + 7)
return totalMinimums
};