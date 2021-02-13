function searchInSortedMatrix(matrix, target) {
    // Write your code here.
      //Binary search on each array for the target
      
      let found = false;
      const binarySearch = (array) => {
        let low = 0;
        let high = array.length-1;
        
        while(low <= high){
            let middle = Math.floor((low + high )/ 2)
                      const match = array[middle]
            if(match === target){
               found  = true
                          return middle
            }
            if(match< target){
               low = middle + 1
            }
            if(match> target){
               high = middle - 1 
            }
        }
      }
      
      
      for(let i = 0;i<matrix.length;i++){
          let val = binarySearch(matrix[i])
          if(found === true){
              return [i,val]
          }
      }
      
      
      return [-1,-1]
  }
  
  // Do not edit the line below.
  exports.searchInSortedMatrix = searchInSortedMatrix;
  