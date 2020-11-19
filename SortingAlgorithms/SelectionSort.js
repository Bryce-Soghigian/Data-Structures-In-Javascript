function selectionSort(array) {
    // Write your code here.
  let startId = 0;
      while(startId <array.length-1){
          let smallestId = startId
          for(let i = startId+1;i<array.length;i++){
              if(array[smallestId] > array[i]) smallestId = i;
              
          }
          swap(startId, smallestId,array)
          startId++
      }
      return array
  }
  function swap(i,j,array){
      const temp = array[j];
      array[j] = array[i]
      array[i] = temp
  }
  
  // Do not edit the line below.
  exports.selectionSort = selectionSort;
  