class Node{
    constructor(data, pointer=null){
        this.data = data;
        this.pointer = pointer;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    //Insert first node
    insertFirst(data){
        this.head = new Node(data, this.head)
        this.size++
    }
    //Insert Last Node
    insertLast(data){
    let node = new Node(data);
    let current;


    if(this.head === null){
        this.head = node
        this.size++
    }else{
        current = this.head;
        while(current.pointer){
            current = current.pointer;
        }
        current.next = node;
        this.size++
    }
    }
    deleteNode(position){
        if(position === undefined){
        
            return []
        }
        //Find position of node that needs to be deleted
        for(let i = 0;i)
    }
    //Insert at index
    insertAt(data,index){
        if(index > this.size && index > 0){
            return;
        }

        if(index === 0){
            this.head = new Node(data, this.head)
            return
        }
        const node = new Node(data);
        let current, previous;
    }
    // Get at index

    //Remove at index

    //Clear list
    //Print list size
    printListSize(){
        console.log(`The Length of this linked list is ${this.size}`)
    }
    //PrintNodes
    // printNodes(){
    //     let current = this.head;
    //     while(current){
    //         console.log(`NODE:${}`)
    //         current = current.pointer;
    //     }
    // }
    //Print list data
    printNodesData(){
        let current = this.head;
        while(current){
            console.log(`Data of current node: ${current.data}`)
            current = current.pointer;
        }
    }
}

const ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(120);
ll.insertFirst(0);
ll.insertFirst(10);
ll.insertFirst(1000);

ll.printNodesData()
ll.printListSize()
ll.printNodes()