function findClosestValueInBst(tree, target) {
    // Write your code here.
      let closest = tree.value;
      const traverse = tree => {
          if(tree === null){
              return null
          }
          if(Math.abs(target - closest) > Math.abs(target- tree.value)){
              closest = tree.value
          }
          // Find if current node is closer to target than previously set closest
          if(tree.left) traverse(tree.left)
          if(tree.right) traverse(tree.right)
      }
      //Traverse tree
      traverse(tree)
      
  
      return closest
  }
  
  // This is the class of the input tree. Do not edit.
  class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  // Do not edit the line below.
  exports.findClosestValueInBst = findClosestValueInBst;
  