/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function(s) {
    let n = s.length;
       if(n< 3) return n
       let left = 0;
       let right = 0;
       
       let hashmap =  new Map();
       let maxLen = 2;
       
       while(right < n){
           //when our window contains less than 3 characters
           hashmap.set(s[right], right++);
           if(hashmap.size == 3 ){
               let del_idx = Math.min(...hashmap.values())
               hashmap.delete(s[del_idx])
               left = del_idx + 1
           }
           maxLen = Math.max(maxLen, right-left)
       }
       return maxLen
       
       
       
       
       
       
       
       
       
       
       
       
       
   // if(s.length < 3) return s.length
   // //We keep expanding the window until we have just two chars so if there isn't a unique char 
   //     let start = 0
   //     let end = 0
   //     let max = 0
   //     let hashTable = {}
   //     const getSum = () => Array.from(Object.values(hashTable)).reduce((acc,cur) => acc+cur);
   //     while(end < s.length || start < s.length){
   //         if(Object.keys(hashTable).length < 2){
   //                     // console.log(hashTable,`Start:${start}  End ${end} \n LENGTH ${Object.keys(hashTable).length}`)
   //             if(s[end] in hashTable){
   //                 hashTable[s[end]] = hashTable[s[end]] + 1
   //             }else{
   //                 hashTable[s[end]] = 1
   //             }
   //             end++
   //             max = Math.max(max,getSum())
               
   //         }else{
   //             start++
   //             delete hashTable[s[start]]
   //         }
   //     }
   //     return max
   };