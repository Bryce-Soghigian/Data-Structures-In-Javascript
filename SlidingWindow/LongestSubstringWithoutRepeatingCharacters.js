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
    let window_start = 0;
    let window_end = 0;
    let max = 0;
    let set = new Set();
        while(window_end < s.length){
            if(set.has(s[window_end])=== false){ 
                set.add(s.charAt(window_end))
                window_end++
                max = Math.max(set.size, max)
            }else{
                set.delete(s[window_start])
                window_start++
            }
        }
        return max
    };
    