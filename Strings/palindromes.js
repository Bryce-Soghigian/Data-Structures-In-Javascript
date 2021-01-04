/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {

    // 1. Generate all of the permutations of the string
    // 2. Check if any of those permutations are palindromes
    // if true return true else return false
    //To generate all permutations
    let isPalindrome = (string) => {
        if(string.split("").reverse().join("") === string){
            return true
        }else{
            return false
        }
    }
    let findPermutations = (string) => {
      if (!string || typeof string !== "string"){
        return "Please enter a string"
      } else if (string.length < 2 ){
        return [string]
      }
    
      let permutationsSet = new Set()
       
      for (let i = 0; i < string.length; i++){
        let char = string[i]
    
        let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length)
    
        for (let permutation of findPermutations(remainingChars)){
            permutationsSet.add(char+permutation)
           }
      }
      return Array.from(permutationsSet)
    }
    let permutations = findPermutations(s)
    let isValid = false
    console.log(permutations)
    permutations.map(str => {
        if(isPalindrome(str)){
            isValid = true
            return true
        }
    })    
    console.log(isValid)
    return isValid
    };


/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindromeOofNSolution = function(s) {
    let count = 0;
    for(let i = 0;i<128 && count <= 1;i++){
        let ct = 0;
        for(let j = 0;j<s.length;j++){
            if(s.charCodeAt(j) == i){
                ct++
            }
            
        }
        count += ct % 2
    }
    return count <= 1
};