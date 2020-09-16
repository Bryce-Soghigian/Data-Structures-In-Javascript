/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    /**
    First we remove all the characters that aren't alphanumberic
    then we make a copy string
    reverse it
    if reversedString === orginalString return true
    else return false
    **/
    let cleanedString = s.replace(/[^0-9a-z]/gi, '').toLowerCase();//Remove all the special characters and change all chars to lowercase
    let reversedString = cleanedString.split("").reverse().join("")
    if(cleanedString === reversedString) return true
    else return false
};