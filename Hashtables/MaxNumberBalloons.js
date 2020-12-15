/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
 
    let max = 0
    let balloonMap = {"b":0,"a":0,"l":0,"o":0,"n":0}
    
    for(let i = 0 ; i< text.length;i++){
        if(balloonMap[text[i]] !== undefined){
           balloonMap[text[i]] = balloonMap[text[i]] + 1 
        }
    }
    console.log(balloonMap)
    
    
   while(true){
    if(balloonMap["b"] - 1 >= 0 && balloonMap["a"]-1 >= 0 && balloonMap["l"] - 2 >= 0 && balloonMap["o"]-2 >= 0 && balloonMap["n"] -1 >= 0){
    max++
      balloonMap["b"] =   balloonMap["b"] - 1 
      balloonMap["a"] =   balloonMap["a"]-1
      balloonMap["l"] = balloonMap["l"] - 2
      balloonMap["o"] = balloonMap["o"]-2
      balloonMap["n"] = balloonMap["n"] -1
    console.log(balloonMap,"BALLOOON MAP")
    }else{
        break
    }
}
         return max

};