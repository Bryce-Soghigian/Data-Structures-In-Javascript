/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(S, words) {
    //Given an array of words we want to go through and check the s if word is a subsequence
     
     let isSubsequence = function(s, t) {
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
     
     let count = 0
     for(let i = 0;i<words.length;i++){
         if(isSubsequence(words[i],S) === true){
             count++
         }
 
 }
     return count
 }