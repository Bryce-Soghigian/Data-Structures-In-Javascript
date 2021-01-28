/**
 * @param {string} S
 * @param {number} K
 * @return {number}
 */
var numKLenSubstrNoRepeats = function(S, K) {
    //Here we want to write a sliding window that increments a count when the window is only unique chars
    // Our sliding window should be of k length
let numOfValidStrings = 0
if(K > S.length) return 0
let start = 0
for(let end = K;end<=S.length;end++){
    let window = S.substring(start,end)
    let set = new Set(window.split(""))
    console.log(window,set)
    if(window.length === set.size){
        numOfValidStrings++
    }
    start++
}
    return numOfValidStrings
};