/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    /**
    go through string and save the indexes where vowels are and save those chars 
``  go through again and create a new string 


*/

    let vowelsArray = ["e","o","u","i","a","E","O","U","I","A"]
  
    let vowelsInStr = []
    for(let i = 0;i<s.length;i++){
        if(vowelsArray.includes(s[i])){
            console.log("found vowel")
            vowelsInStr.push(s[i])
        }else{
            console.log("Skip")
        }
    }
    console.log(vowelsInStr,"")
    let returnString = ""
    for(let i = s.length-1; i >= 0;i--){
        if(vowelsArray.includes(s[i])){
            let value = vowelsInStr.shift();
            console.log(value,vowelsInStr)
            returnString += value
        }else{
            returnString += s[i]
            }
    }
    return returnString.split("").reverse().join("")
};