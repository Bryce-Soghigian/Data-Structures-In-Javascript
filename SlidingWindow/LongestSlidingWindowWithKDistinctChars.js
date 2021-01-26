/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
    // We can use sliding window
    // we want to approach this the same as the last problem we did
    if(k === 0) return 0
    let start = 0
    let end = 0
    let hashMap = new Map();
    let max = 0
    while(end < s.length){
        //Insert item into map
        // if map.length is greater than k + 1 we want to move forward start and delete the first char from the map
        
        hashMap.set(s[end],end++)
        if(hashMap.size > k ){
            //
            let deleteId = Math.min(...hashMap.values())
            hashMap.delete(s[deleteId])
            console.log(hashMap,hashMap.size)
            start = deleteId + 1
        }
        max = Math.max(max, end-start)
        
    }
    return max
    
};