/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var naiveApproach = function(people, limit) {
    let count = 0;
    people.sort((a,b) => b-a)//people log people
    
    
while(people.length !== 0){
    let last = people[people.length-1]
    let secondToLast = people[people.length-2]
   if(last + secondToLast <= limit){
       count++
       people.pop()//Remove in O(1)
       people.pop()// Remove in O(1)
   }else if(last <= limit){
       count++
       people.pop()
    
   }else{
       people.pop()
   }
}
return count
    
    
};

/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var GreedyPopSolution = function(people, limit) {
    people.sort((a,b) => a-b)
     let count = 0
     while(people.length !== 0){
         const last = people[people.length-1]
         const first = people[0]
         if(last + first <= limit){
             count++
             people.shift();
             people.pop()
           
         }else{
             count++
             people.pop()
         }
     }
       return count
   };

   /**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var TwoPointers = function(people, limit) {
    people.sort((a,b) => a-b)
     let count = 0
       let i = 0
       let j = people.length-1;
       while(i <= j){
           count++
           if(people[i]+ people[j] <= limit){
              i++ 
           }
           j--
               
           
       }
       return count
   };