/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    /**
    Challenge
    Sort the words lexographically based on the order string
    FI
    go through order and preprocess it into a dictionary
    
    **/
    
    let alienDict = {}
    alienDict[undefined] = -1
    for(let i = 0;i<order.length;i++){
        alienDict[order[i]] = i
    }
    console.log(alienDict)
    let isValid = true
    //Loop through all the words
    //check if current should be ahead of next
    for(let i = 0;i<words.length;i++){
        let current = words[i]
        let next = words[i+1]
        //Loop through both words and if current shouldn't be ahead of next return false

        if(next !== undefined){
                    let currLength = current.length;
        let nextLength = next.length;
        let loopLength = null
        if(currLength >= nextLength){
            loopLength = currLength
        }else{
            loopLength = nextLength
        }
                    //Loop through the strings and compare chars
        // if curr[j] is > next[j] return false
        for(let j = 0;j<loopLength;j++){
            let currCharRanking = alienDict[current[j]]
            let nextCharRanking = alienDict[next[j]]
            console.log(currCharRanking,nextCharRanking,`${current[j]} vs ${next[j]}`)
            if(current[j] === next[j]){
                continue
            }else{
            if(currCharRanking >nextCharRanking ){
                return false
            }else{
                console.log("IS PROPER RANK")
                break
            }
            }

        }
        }else{
        break
        }

        

    }
    return true
};