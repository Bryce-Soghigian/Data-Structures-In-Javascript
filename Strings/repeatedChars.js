/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    /**
Have an array of the letters of the alphabet
go through and count the longest substring for each letter in the alphabet
return the longest
**/
    let max = 0
    let arr = s.split("")
    let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
for(let i = 0;i<alphabet.length;i++){
    let letterCount = 0;
    for(let j = 0;j<arr.length;j++){
        if(arr[j]===alphabet[i]){
            letterCount++
        }
        if(letterCount>=max){
            max = letterCount
        }
        if(arr[j] !== alphabet[i]){
            letterCount = 0
        }
    }
}
    return max
};