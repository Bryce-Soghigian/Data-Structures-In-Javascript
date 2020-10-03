/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    /**
    Put all the values in an object
    
    **/
    let hash = {}
    for(let i = 0;i<arr.length;i++){
        if(hash[arr[i]]=== undefined){
            hash[arr[i]] = 1
        }else{
             hash[arr[i]]++
        }
    }
 return Object.keys(hash).reduce((a, b) => hash[a] > hash[b] ? a : b)

};