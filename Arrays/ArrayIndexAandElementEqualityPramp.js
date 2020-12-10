function indexEqualsValueSearch(arr) {

    let low, high;
    low = 0;
    high = arr.length-1
        let mid = Math.floor((low+high)/2)
  
    // let mid = Math.floor((low+high)/2)//We want mid to be the value 
    while(low<=high){
         mid = Math.floor((low+high)/2)
      console.log(`Low:${low},high${high} MID :${mid} `)
  
      if(arr[mid] < mid  ){
        //If low is smaller than the middle we want to move it up
        //we want to elim a side of the array
        low = mid + 1
      }else if(arr[mid] > mid){
        //If low is bigger we want to increment it down
        //We elim the other side
        high = mid - 1
        
      }else{
        if(arr[mid] === mid){
        return mid
        }
      }
  
    }
   //If we go through and don't find it return -1
  return -1
  
  }
  