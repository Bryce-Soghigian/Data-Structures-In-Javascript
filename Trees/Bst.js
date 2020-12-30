class TreeNode{
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }
}
class BinarySearchTree{
constructor(){
    this.root = null
}
//Insert Data
insert(val){
    //Check for a valid spot to insert our node
 const newNode = new TreeNode(val);
 if(this.root=== null){
     this.root = newNode;
 }else{
     //Find correct position in the tree and insert the node
     const findNodePlacement = (node,newNode) => {
         if(node === null) return 
         if(node.val >= newNode.val){
             if(node.left === null){
                 node.left = newNode
                 return
             }
         }
        if(node.val <= newNode.val){
            if(node.right === null){
                node.right = newNode;
                return
            }
        }
        //If we can't find a place at this level of the traversal we need to keep traversing
        if(node.left) findNodePlacement(node.left,newNode)
        if(node.right) findNodePlacement(node.right, newNode)
     }
     findNodePlacement(this.root,newNode)
 }
 console.log(this.root)
}

//Remove Data
delete(val){
//We want to traverse the tree looking for the value
//
this.root = deleteNode(this.root,val)
const deleteNode = (node,val) => {
    if(node === null) return null
    else if(val < node.val){
        node.left = deleteNode(node.left,val)
        return node
    }
    else if( val > node.val){
        node.right = deleteNode(node.right,val)
        return node
    }
    else{
        if(node.left === null && node.right === null){
            node = null
            return node
        }
        if(node.left === null){
            node = node.right;
            return node
        }
        else if(node.right === null){
            node = node.left;
            return node
        }
    }

}
}
search(node,val){

}
}

let BST = new BinarySearchTree();
BST.insert(5)
BST.insert(7)
BST.insert(2)
BST.insert(4)
