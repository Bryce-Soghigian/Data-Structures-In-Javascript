/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    let length = A.length;
     let sorted = [];
     let odd = [];
     let even = [];
     for(let i =0;i<length;i++){
         if(A[i]%2===0){
             even.push(A[i])
         }else{
             odd.push(A[i])
         }
     }
     for(let i = 0;i<length;i++){
         if(i%2===0){
             sorted.push(even[even.length-1])
             even.pop()
         }else{
             sorted.push(odd[odd.length-1])
             odd.pop()
         }
     }
     
 
     return sorted
 };