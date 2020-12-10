/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
    let numOfPairs = 0;
    for(let i = 0;i<time.length;i++){
        for(let j = 0;j<time.length;j++){
            if((time[i] + time[j]) % 60 ===0 && j !== i){
                numOfPairs++
            }
        }
    }
    
    
    return numOfPairs/2
};