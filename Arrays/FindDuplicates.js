function findDuplicates(arr1, arr2) {
    // your code goes here
    /**
    0(n)
    loop through arr1 and put the vals in an object
    loop through arr2 and put the vals in an object
    if(val is in [arr1]&& val is in [arr[2]]){
    result.push(a[i])
    }
    optimize with set
    **/
    let result = []
    let arrObj1 = {}
    let arrObj2 = {}
    
    
    for(let i = 0;i<arr1.length;i++){
      let key = arr1[i]
      if(arrObj1[key]===undefined){
        arrObj1[key] = true
        
      }
    }
    
    
    for(let i = 0;i<arr2.length;i++){
      let key = arr2[i]
      if(arrObj2[key] ===undefined){
        arrObj2[key] = true
      }
    }
    
   for(let val in arrObj1){
     if(arrObj2[val]===true){
       result.push(Number(val))
     }
   }
    return result 
  }
  
  
  let arr = [10,20,30,40,50,60,70,80]
  let arr2=[10,20,30,40,50,60]
  console.log(findDuplicates(arr,arr2))