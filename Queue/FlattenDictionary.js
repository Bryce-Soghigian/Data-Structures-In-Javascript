function flattenDictionary(dict) {
    // your code goes here
    // type === object
    // else add val to new Dictionary
    let traverse = false;
    let newDict = {}
    let queue = []
    
    queue.push(dict)
    queue.push("")
   
    while(queue.length !== 0){
      console.log(queue)
      // GRAB something from our queue
      // => 
      let prefix = queue.pop()
      let item = queue.pop()
      let keysOfDict = Object.keys(item)
      
      //The for loop will go through and check type if obj or anything else
      for(let i = 0;i<keysOfDict.length;i++){
        let key = keysOfDict[i]
        if(typeof(item[key])!=="object"){
          if(prefix === ""){
            newDict[`${key}`] = item[key]
          }else{
            let newStr = '';
            if(key !== ""){
              newStr = "."+ key
            }
            newDict[`${prefix}${newStr}`] = item[key]
          }
          
        }else{
             prefix+= "." + key 
          if(prefix.charAt(0)==="."){
            prefix = prefix.slice(1)
          }
  
          queue.unshift(prefix)
          queue.unshift(item[key])
          
        }
      }
      
    } 
  return newDict
  }
  