function arrayOfArrayProducts(arr) {
    // your code goes here
    //Loop through and get left
    let result = []
    let left = []
    for(let i = 0;i<arr.length;i++){
      if(i === 0){
        left.push(1)
      }else{
        left.push(left[left.length-1] * arr[i-1])
  
      }
      
  }
    let right = [];
    for(let j = arr.length -1;0 <= j;j-- ){
        if(right.length === 0){
          right[arr.length-1] = 1
        }else{
         
         right[j] = right[j+1]* arr[j+1]
  
        }
        
    
    }
  
    for(let i = 0;i<arr.length;i++){
      result[i] = left[i]* right[i]
    }
    return result
  }
  
  //[60, 40, 30, 24]
  console.log(arrayOfArrayProducts([2, 3, 4, 5]))
  
  /*
  [2, 3, 4, 5]
  
  
  right
  2 || 3 4 5 
  3 || 4 5
  4 || 5
  5 || 1
  left
  2 || 1//1
  3 || 2//2*prev
  4 || 2,3//3*prev
  5 || 2,3,4//4*prev
  
  
  
  
  
  [
  |3*4*5,
  2|*4*5,
  2*3|*5,
  2*3*4|
  ]
  
  let output = []
  []
  */
  