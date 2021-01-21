class PhoneDirectory {
    constructor(maxNumbers){
        this.maxNumbers = maxNumbers
        this.directory = null
    }
        init(){
        this.directory = {}
        for(let i = 0;i<this.maxNumbers;i++){
            this.directory[i] = {isAssigned:false}
        }
        
    }
    /**
    THis function provides a unique phone number
    and returns it
    **/

    get(){
    if(this.directory === null){
       this.init() 
    }
        
    //Lets loop through the directory and return the first num that is unassigned
    for(let key in this.directory){
        if(this.directory[key].isAssigned === false){
            this.directory[key].isAssigned = true
            //console.log(this.directory,`Added ${key}`)
            return key
        }
    }
        //If no space
        return -1
    }
    /**
    This function checks if a number is available or not
    
    **/
    check(number){
        if(this.directory === null){
       this.init() 
    }
        
    return !this.directory[number].isAssigned
    }
    /**
    This releases a number
    **/
    release(number){
    if(this.directory === null){
       this.init() 
    }
    this.directory[number].isAssigned = false
    return null
    }
}


/**
 * Recycle or release a number. 
 * @param {number} number
 * @return {void}
 */
/** 
 * Your PhoneDirectory object will be instantiated and called as such:
 * var obj = new PhoneDirectory(maxNumbers)
 * var param_1 = obj.get()
 * var param_2 = obj.check(number)
 * obj.release(number)
 */