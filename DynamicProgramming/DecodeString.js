/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    // We want to decode the string in all possible ways
     // Now we want to think about all the possible approaches
     // First we go through and map all of the srings to numbers 1 through 26
 
     if(s.charAt(0) == 0){
         return 0
     }
     let n = s.length;
     let twoBack = 1
     let oneBack = 1
     for(let i = 1;i<n;i++){
         let curr = 0
         if(s[i] !== "0"){
            curr += oneBack
         }
         let twoDigit = parseInt(s.substring(i-1,i+1))
         console.log(twoDigit)
         if(twoDigit >= 10 && twoDigit <= 26){
             curr += twoBack
         }
         twoBack = oneBack
         oneBack = curr
     }
 
     return oneBack
 
 
 
 
 };