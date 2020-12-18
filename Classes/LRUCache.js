class LRUCache {
    constructor(capacity){
        this.cache = [];
        this.capacity = capacity
    }

    get(key){
        //If it doesn't exist return -1
        //Everytime we access an element we want to push it to the end of the cache and remove it from its current index
            for(let i = 0;i<this.cache.length;i++){
                if(this.cache[i][0]=== key){
                    let item = this.cache[i]
                    this.cache.splice(i,1)
                    this.cache.push(item)
                    //console.log(this.cache)

                    return item[1]
                }
            }
            return -1
       
    }

    put(key, value){
     //UPdate the value of the key if the key exists 
    //otherwise add the key-value pair to our cache
 //if the num of keys exceeds capacikty evict the least recently used
    for(let i = 0;i<this.cache.length;i++){
        if(this.cache[i][0] === key){
            this.cache[i] = [key,value]
                    let item = this.cache[i]
                    this.cache.splice(i,1)
                    this.cache.push(item)
            //console.log(this.cache)
            return null
        }
    }
    if(this.cache.length >= this.capacity){
        this.cache.shift()//Remove lru value from the cache
        this.cache.push([key,value])

    }else{
     //  
    this.cache.push([key,value])
    }
        //console.log(this.cache)
    }
    
    
}


/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */