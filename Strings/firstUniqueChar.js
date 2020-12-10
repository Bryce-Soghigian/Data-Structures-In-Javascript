/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    /*
  find all unique values and return the position of the first one
  Steps
  Loop through the string and count the values ones that are unique 
  */
  let frequency = {}
  for(let i= 0;i<s.length;i++){
      if(frequency[s[i]]===undefined){
          frequency[s[i]] = 1
      }else{
          frequency[s[i]] = frequency[s[i]] + 1
      }
  }
  console.log(frequency)
  let result = ""
  for(let key in frequency){
      if(frequency[key] === 1){
          result = key
          break
      }
  }
  for(let i = 0;i<s.length;i++){
      if(s[i]=== result){
          return i
      }
  }
      
      return -1
  };