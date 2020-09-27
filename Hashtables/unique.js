/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    /**
  Put all the values in an object
  check if any of the values match 
  Do this by turning it into a set. then compare the set to the properties array
  if values !== return true 
  else return false
  
  
  **/
      let countObject = {};
      for(let i = 0;i<arr.length;i++){
          if(countObject[arr[i]] !== undefined){
              countObject[arr[i]]++
          }else{
              countObject[arr[i]] = 1;
          }
      }
      var countProps = Object.values(countObject);
      let countSet = Array.from(new Set(countProps))

      if(countSet.length === countProps.length){
          return true
      }else{
          return false
      }
      
  };

//Time complexity O(n)