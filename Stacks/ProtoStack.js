function Stack(array){
    this.array = [];
    if(array){
        this.array = array
    }
};

Stack.prototype.getBuffer = function(){
    return this.array.slice()
}

Stack.prototype.isEmpty = function(){
    return this.array.length == 0;
}

Stack.prototype.push = function(item) {
    return this.array.push(item)
}

Stack.prototype.pop = function(){
    return this.array.pop()
}


let newStack = new Stack();

newStack.push("Hello")
newStack.push("Hello")
newStack.push("Hello")
newStack.push("Hello")
newStack.push("Hello")
newStack.pop()
console.log(newStack.getBuffer())//Can return a copy of a sta

function stackAccessNthTopNode(stack,n){
    let bufferArray = stack.getBuffer();
    if(n<=0) throw 'error'

    let bufferStack = new Stack(bufferArray)
    while(--n !== 0){
        bufferStack.pop()
    }
    return bufferStack.pop()
}

console.log(newStack,1)
