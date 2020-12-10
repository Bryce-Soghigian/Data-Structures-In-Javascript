/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    /**
    We can count all the elements then go through and Object.entries all the values
    Then we loop through the matrix backwards and generate our new string
    
    **/
    
    //Count all the elements
    let freq = {};
    for(let i = 0;i<s.length;i++){
        if(freq[s[i]]===undefined){
            //We define it
            freq[s[i]] = 1
        }else{
            freq[s[i]] = freq[s[i]] + 1
        }
    }
    //Get all of the values and sort them
    let values = Object.entries(freq)
    values.sort((a,b) => {
        if(a[1]>b[1]){
            return 1
        }
        if(a[1]<b[1]){
            return -1
        }
        if(a[1] === b[1]){
            return 0
        }
    })
     console.log(values)
    //Generate your return string with the values
    let returnString = ""
    for(let i = values.length-1; i >= 0;i--){
        let appendString = values[i][0].repeat(values[i][1])
        returnString += appendString
    }
    return returnString
};