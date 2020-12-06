/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    /**
    Input: s = "abcbcbb"
    Output: 3
    Explanation: The answer is "abc", with the length of 3.
    **/
        if(s.length ===0){
            return 0
        }
        let maxSubstring = 0;
        for(let i = 0;i<s.length;i++){
        let tempCount = 0;
        let unique = new Set();
        let k = i;
        while(unique.has(s[k]) === false && s[k] !== undefined){
        unique.add(s[k]);
        tempCount++;
        k++
        }
        if(tempCount > maxSubstring){
            maxSubstring = tempCount
        }
        }
        return maxSubstring 
    };