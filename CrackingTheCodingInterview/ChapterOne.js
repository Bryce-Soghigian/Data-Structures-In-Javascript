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
console.log("============================================================")
console.log(isUnique("abcdeff"),"isUnique")//Should output false 
console.log(isUnique("abcdef"),"isUnique")//should output true
console.log("============================================================")
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

console.log(isUniqueStretch("aaafadfadfd"),"isUniqueStretch")//false
console.log(isUniqueStretch("a,bfwq23"),"isUniqueStretch")// true
console.log("============================================================")

const isPermutation = (strOne,strTwo) => {
    if(strOne.length !== strTwo.length) return false//Solution can be brought to constant time 
    //Note that when sorting strings to use the native sort method convert them to arrays
    strOne = Array.from(strOne).sort().join("")
    strTwo = Array.from(strTwo).sort().join("")

    if(strOne === strTwo) return true
    else return false
}

console.log(isPermutation("dog","god"),"isPermutation")//true
console.log(isPermutation("car","acr"),"isPermutation")//true
console.log(isPermutation("yeet","skeet"),"isPermutation")//false
console.log(isPermutation("test","tset"),"isPermutation")//true
console.log(isPermutation("hi","hello"),"isPermutation")//false
console.log("============================================================")


const url = string => {
    string = string.split(" ")//Split by space
    let newString = ""
    for(let i = 0;i<string.length;i++){
        newString += `${string[i]}%20`
    }
    return newString
}

console.log(url("Hello World"),"URLIFY a string")
console.log(url("Hello World I'm Bryce"),"URLIFY a string")
console.log(url("Hello World Guten Tag"),"URLIFY a string")
console.log(url("Hello World i am test string number four"),"URLIFY a string")
console.log("============================================================")
