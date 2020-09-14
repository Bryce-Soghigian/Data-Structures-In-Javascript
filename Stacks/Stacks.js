class Stacks{
    //Methods
    /**
     * 1. Push
     * 2. Pop
     * 
     */
    constructor(array){
        if(array!== null){
            this.array = []
        }else{
            this.array = array
        }
    }
    pushOntoStack(item){
        this.array.push(item);
    }
    popOffStack(){
        this.array.pop();
    }
    
}

let newStack = new Stacks();
newStack.pushOntoStack("Test")
newStack.popOffStack()
console.log(newStack,"newStack")