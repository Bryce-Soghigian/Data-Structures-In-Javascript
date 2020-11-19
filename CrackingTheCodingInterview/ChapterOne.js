const isUnique = string => {
    //Define set
    let visited = new Set();
    for(let i = 0;i<string.length;i++){
        if(visited.has(string.charAt(i))){
            return false
        }else{
            visited.add(string.charAt(i))
        }
    }
    return true
}

console.log(isUnique("abcdeff"))//Should output false 
console.log(isUnique("abcdef"))//should output true

const isUniqueStretch = string => {
    /**
     * Implement is unique without a datastructure other than string
     */
    let match = ""

    for(let i = 0;i<string.length;i++){
        if(match.includes(string.charAt(i))){
            break
        }else{
            match += string.charAt(i)
        }
    }
    if(match.length === string.length){
        return true
    }else{
        return false
    }
}

console.log(isUniqueStretch("aaafadfadfd"))//false
console.log(isUniqueStretch("a,bfwq23"))// true