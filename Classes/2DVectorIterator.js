/**

1. Flatten to an array

2. Implement next
2.a moving forward our pointer
3. implement hasNExt
3a. check if iterator is at the end
**/





class Vector2D{
    constructor(v){
        this.vect = v
        this.index = 0
        this.flattened = []
        this.flattenedVector(this.vect)

    }
    

    flattenedVector(vector){
        for(let i = 0;i<vector.length;i++){
            for(let j = 0;j<vector[i].length;j++){
                this.flattened.push(vector[i][j])
            }
        }
    }
        /**
 * @return {number}
 */
    next(){
        if(!this.hasNext()) return null
      const prevIndex= this.index
      this.index++ // += 
      return this.flattened[prevIndex]  
        

    }
    /**
 * @return {boolean}
 [1,2,3,4]
 true true true true 
 [0]
 []
 
 */
    hasNext(){
    return this.index < this.flattened.length
    }
}
/**
[[1,2],[3],[4]]
interate.next()
return 1




**/

/** 
 * Your Vector2D object will be instantiated and called as such:
 * var obj = new Vector2D(v)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */