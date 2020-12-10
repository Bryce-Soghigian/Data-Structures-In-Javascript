/**
 * @param {number} capacity
 */
const LFUCache = class {
    constructor(capacity) {
      this.capacity = capacity;
      this.cache = [];
    }
    sortCache(){
          this.cache = this.cache.sort((a, b) => {
            if (a[2] > b[2]) {
              return 1;
            }
            if (a[2] < b[2]) {
              return -1;
            }
            if (a[2] === b[2]) {
              return 0;
            }
          })
    }
    get(key) {
      let cache = this.cache;
       let val = null
      for (let i = 0; i < cache.length; i++) {
        if (cache[i][0] === key) {
          cache[i][2] = cache[i][2] + 1;
          // console.log(cache[i][0], "FOUND ITEM");
         val = cache[i][0];
        }
      }
        
       // console.log(cache,"Get")
  
       if(val === null){
           return -1
       }else{
           return val
       }
    }
    put(key, value) {
      let cache = this.cache;
      let count = 0;
      let seen = false;
      //Check if item is in cache
      for (let i = 0; i < cache.length; i++) {
        if (key === cache[i][0]) {
          seen = true;
        }
      }
      //If we see the item we can't add a new one
      if (seen) {
        console.log("Exists in cache");
      } else {
          
       //FInd least frequent 
      
          let leastFrequent = null
           for(let i = 0;i<cache.length;i++){
               if(leastFrequent === null){
                   leastFrequent = cache[i][2] 
               }else{
                   if(cache[i][2] <= leastFrequent){
                       leastFrequent = cache[i][2]
                   }
               }
           }
          
          //Now we check for how many items freq match leastFrequent and return the least recent
          let items = []//Store the values that match least frequent
          for(let i = 0;i<cache.length;i++){
              if(cache[i][2] === leastFrequent){
                 items.push(cache[i])
              }
          }
          console.log(items)
          //remove the least frequent one 
        if (cache.length === this.capacity) {
            console.log("HIT")
          //if cache.length is at capacity
          //If item is greater than capacity
          //Evict least least frequent if there is a tie between least frequent we want to remove least recent
          if(items.length > 1){
              //Evict the first item from items
              let evictCanidate = items[0]
              console.log(evictCanidate,"EVICT")
              for(let i = 0;i<cache.length;i++){
                  if(cache[i] === evictCanidate){
                      cache.splice(i,1)
                  }
              }
              cache.push([key, value, 0]);
              console.log(cache)
          }else{
              //If length of items is not greater than one that means we dont' have multipule elements of the same frequency so we don't need to remove them
          for(let i = 0;i<cache.length;i++){
              if(cache[i][2]=== leastFrequent){
                  cache.splice(i,1)
  
              }
          }
              if(this.capacity !== 0){
                  cache.push([key, value, 0]);  
  
              }
          }
  
          //Making sure our cache is sorted by least frequently accessed
        } else if (cache.length < this.capacity) {
          cache.push([key, value, count]);
          //Then we want to sort hte cache by how many times it has been accessed
        } else {
            console.log("UHOH")
        }
      }
  
      // console.log(cache, "ADDED ITEM TO CACHE AND SORTED BY FREQ");
             //console.log(cache,"insert")
  
    }
  };
  