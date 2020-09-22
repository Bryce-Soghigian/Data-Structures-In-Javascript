/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
    let aString = "a"
    let bString = "b"
    let stringType = null
    if(n%2===0){
        stringType = "even"
    }else{
        stringType = "odd"
    }
    console.log(stringType,"stringType fetched")
    if(stringType === "even"){
        let result = aString.repeat(n-1)+bString
        return result
    }else{
      return aString.repeat(n)  
    }
};

