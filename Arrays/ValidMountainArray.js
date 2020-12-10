/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    
    //First edgecase
    if(arr.length < 3){
        return false
    }
    let isIncreasing = true;
    /**
    
    To be a mountain the increases have to increase by at least one every time
    And the decreases have to decrease by one every time
    **/
    let currentState;
    if(arr[0]>arr[1]){
        currentState = "decrease"
    }else{
        currentState = "increase"
    }
    let timesDecreased = 0
    
    for(let i = 0;i<arr.length;i++){
        let next = arr[i+1];
        let curr = arr[i]
        if(currentState=== "increase"){
            if(curr === next) return false
            if(curr < next){
                // console.log(`Increasing ${curr},${next}`)
            }else{
                if(next !== undefined){
                currentState = "decrease"
                timesDecreased++         
                }

            }
        }
        if(currentState === "decrease"){
            if(curr === next) return false
            if(curr > next  ){
                // console.log(`Decreasing${curr},${next}`)

            }else{
                if(next !== undefined){
                      return false
 
                }
            }
        }
    }
    console.log(timesDecreased,"TIEMS DECREASE")
    if(timesDecreased === 0) return false
    return isIncreasing
};