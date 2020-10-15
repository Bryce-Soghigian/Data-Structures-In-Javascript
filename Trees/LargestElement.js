BinarySearchTree.prototype.findLargestSmallerKey = function(num) {
    // your code goes here
    //First we want to traverse the tree
    //Save the elements taht are smaller than num
    // return the max num that is in the less than array
    
   let keys = [];
  
    const traverse = (node) => {
      if(node === null) return null
   
        keys.push(node.key)
  
      if(node.left !== null) traverse(node.left)
      if(node.right !== null) traverse(node.right)
    }
    traverse(this.root)
    keys = keys.filter(element => {
      if(element < num) return element
    })
    return Math.max(...keys)
  
  }