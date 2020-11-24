class Node {
    constructor(value, next = null){
        this.value = value
        this.next = next
    }
}



const LinkedList = class {
    constructor(){
        this.head = null
        this.size = 0
    }
        //Remove duplicates from current list
        removeDuplicates(){
            const set = new Set();
            let current = this.head;

            console.log(current,"current")
            while(current){
                if(current.next === null){
                   return
                }
                if(set.has(current.next.value)){
                    current.next = current.next.next
                }else{
                    set.add(current.next.value)
                }
                current = current.next
            }
        }

    returnKToLast(k){
        let length = 0;
        let current = this.head;
        //First loop we determine the current length of the list
        while(current){
            length++
            current = current.next
        }
        console.log(length)
        let target = length-k;
        //Reset our pointer for another traversal
        current = this.head;
        let icc = 0
        while(current){
            icc++
            if(icc === target){
                return current
            }
            current = current.next
        }
        return "NODE NOT FOUND"

    }
    deleteNodeOfGivenValue(valueOfNodeToBeDeleted){

        if(valueOfNodeToBeDeleted === this.head.value){
            this.head = this.head.next
            return
        }
        let current = this.head
        let temp;
        let count = 0;
        let previousNode;
        let nextNode;
        while(current){
            if(count === 0){
                temp = current
                previousNode = temp
                nextNode = current.next
            }
            if(count === 1){
                //Dont move previous but move the rest
                nextNode = nextNode.next
                current = current.next
                
            }
            if(count > 1){
                if(current.value === valueOfNodeToBeDeleted){
                    previousNode.next = nextNode
                    break
                }else{
                    previousNode = previousNode.next
                    nextNode = nextNode.next
                    current = current.next
                }

            }
            count++

        }
    }
    addNode(node){
        if(this.head === null){
            this.head = node
            this.size++
        }else{
            let current = this.head
            while(current){
                if(current.next === null){
                    current.next = new Node(node)
                    this.size++
                    break
                }
                current = current.next
            }
        }
    }
    traverse(){
        let current = this.head
        let traverseResult = ``
        while(current){
            if(current.next === null){
                traverseResult += `${current.value}`

            }else{
                traverseResult += `${current.value} -> `
            }
            current = current.next
        }
        console.log(traverseResult)
    }
}

const SLL = new LinkedList()
const headNode = new Node(1)
SLL.addNode(headNode)
console.log(SLL)
SLL.addNode(5)
SLL.addNode(2)
SLL.addNode(13)
SLL.addNode(18)
SLL.deleteNodeOfGivenValue(13)
SLL.deleteNodeOfGivenValue(18)
SLL.deleteNodeOfGivenValue(1)
SLL.addNode(5)
SLL.addNode(2)
SLL.addNode(13)
SLL.addNode(18)
SLL.returnKToLast()
SLL.traverse()
