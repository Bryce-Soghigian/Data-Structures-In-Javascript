//392. Is Subsequence
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//Space o(s.length)
var isSubsequence = function(s, t) {
    let stack = [];
    s.split("").map(x => {
    stack.push(x)
    })
    console.log(stack)
    for(let i = 0;i<t.length;i++){
        
        if(t[i]===stack[0]){
            stack.shift()
        }
    }
    console.log(stack)
    if(stack.length === 0){
        return true
    }else{
        return false
    }
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var OptimizedIsSubsequence = function(s, t) {
    if(s === "")return true
    let pointer = 0
        for(let i = 0;i<t.length;i++){
            if(t[i]===s[pointer]){
                if(pointer === s.length-1){
                    return true
                }else{
                pointer++
                }
            }
        }
    return false
    };