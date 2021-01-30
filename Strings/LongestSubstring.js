/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
    
    let max = 0;
    for(let i = 0;i<s.length;i++){
    let sub = ""
    let dict = {}
    for(let j = i; j<s.length;j++){
        sub += s[j]
        if(s[j] in dict){
            dict[s[j]] = dict[s[j]] + 1
        }else{
            dict[s[j]] = 1
        }
        isValid = true
        for(let val in dict){
            if(dict[val] < k){
                isValid = false
                break
            }
        }
        if(isValid === true && sub.length > max){
        max = sub.length
        }
    }
    }
    return max
};