/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
    /**
    traverse both trees
    put all the values into an array
    **/
      let visited = [];
        let current = root1

  let traverse = node => {
      if(node ===null){
          return
      }

    visited.push(node.val);
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  };

  traverse(current);
    current = root2
  traverse(current)
  return visited.sort((a,b) => a-b);
    

};