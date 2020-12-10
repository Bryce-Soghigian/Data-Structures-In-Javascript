/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    /**
 
    let output = []
    **/
     let output = []
     for(let i = 0;i<T.length;i++){
       let current = T[i];
       let daysPassed = 0//Days passed is the amount of days till it gets warmer in the array
       let result = null;
       for(let j = i;j<T.length;j++){
           if(T[j]>current){
               result = daysPassed
               break
           }
         daysPassed++
 
       }
         if(result === null){
             output.push(0)
         }else{
             output.push(result)
         }
         
     }
     return output
 };