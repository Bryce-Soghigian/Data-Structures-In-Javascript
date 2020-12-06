/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function(n) {
    //First we want to take the number and convert it from base 10 to base 2
 // Then we want to loop through the string and find the distance between two ones 
 //Note that ones separated don't count
     
 const binaryNumber = parseInt(n).toString(2)
 console.log(`Number in binary is ${binaryNumber}`)
 let indexes = [];
     for(let i = 0;i<binaryNumber.length;i++){
         if(binaryNumber[i] === "1"){
             indexes.push(i)
         }
     }
     indexes.reverse()
     let max = 0
     for(let i = 0;i<indexes.length;i++){
         let difference =  indexes[i] - indexes[i+1]
         console.log(difference)
         if(difference > max){
             max = difference
         }
     }
     console.log(indexes,"INDEXES")
     return max
 };