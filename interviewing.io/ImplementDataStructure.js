/*
insert(val): Inserts an item val to the set if not already present.
remove(val): Removes an item val from the set if present.
getRandom: Returns a random element from current set of elements. Each element must have the same probability of being returned.
*/



//O(1)


/**


Pick a random index withing our array


Class (){
constructor(){
this.set = new Set();
this.array = []
}

insert(){
//Insert into set
if duplicate dont insert into array

}
s

}

this.ind 0:[2,3,4,5,33,3,33]  

**/

class dataStructure {
    constructor(){
      this.array = []
      this.ind = {}
      this.arraySize = 0;
    }
    
    
    /**
    @Params (VAL)
    Insert O(1)
    **/
    insert(val){
      //Check set to see if it exists
      
      //If it does just return 
      
      //else 
      
      if(this.ind[val] !== undefined){
        return false
    }else{
      this.array.push(val)
      this.arraySize++
      this.ind[val] = this.arraySize-1
    }
      
      console.log(this.array)
      console.log(this.set)
      
      return true
      
    }
    
    /**
    @ Params(VAL)
    Remove 
    
    
    **/
    remove(val){
      if(this.ind[val] !== undefined){
        
  
    //Remove from array
      //Loop up item in array
      let key = this.ind[val]
      
      let endVal = this.array[this.arraySize-1]
      let currVal = this.array[key] 
      let temp;
      
      temp = currVal
      this.array[key] = endVal
      this.array[this.arraySize-1]= temp
      //Delete from hashmap
      //Set new val for ind
        //Remove ind of val
      delete this.ind[val]
      this.ind[endVal] = key 
      this.array.pop()
      this.arraySize--
      
      console.log(this.array)
      console.log(this.ind)
   return true
        
      }else{
  return false
        
      }
  
    }
    /**
    
    
    return INT
    
    **/
    getRandom(){
  //get random ind within array
  let max = this.arraySize;
  let start = 0;
  let randomInd = Math.floor(Math.random()* Math.floor(max))
  return this.array[randomInt]
    }
    
  }
    
    let ds = new dataStructure()
    
    ds.insert("1")
    ds.insert("2")
    ds.insert("3")
    ds.insert("5")  
    ds.insert(true)
    ds.insert(0)
    ds.remove("1")
    