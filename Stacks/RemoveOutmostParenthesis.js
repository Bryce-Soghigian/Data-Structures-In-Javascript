/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
  
    let newStr = ""
    let stack = []
    let primals = new Set();
    //We want to loop through the string 
    // For each char we push it onto the stack 
    
    stack.push(S[0])
    let start = 0
    for(let i = 1;i<S.length;i++){
        if(S[i] === "("){
            stack.push("(")
        }else{
            stack.pop()
        }
        if(stack.length === 0){
            primals.add(start)
            primals.add(i)
            start = i+1
        }
    }
        
        for(let i = 0;i<S.length;i++){
            if(primals.has(i)){
                continue
            }else{
                newStr += S[i]
            }
        }
        return newStr
    };