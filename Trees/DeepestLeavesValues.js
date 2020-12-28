/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function(root) {
    //We want to traverse to the bottom of the tree
    //Onece we reach a leaf we want to += tree.val
    //What exactly is a leaf node tho
    //A leaf is where there aren't any children 
    // So in a bst we just wanna check to see if tree.left == null && tree.right == null
var maxDepth
let sum = 0
function maxHeight(root, depth){
    if(!root.left && !root.right){
        maxDepth = Math.max(maxDepth || depth, depth)
    }
    if(root.left) maxHeight(root.left, depth + 1);

    if(root.right) maxHeight(root.right, depth + 1);
}
    
    const findOurLeaves = (tree,currDepth = 1) => {
        if(tree === null ) return sum
        
        if(tree.left === null && tree.right === null&& currDepth == maxDepth){
            console.log(tree)
            sum += tree.val
        }
        
        if(tree.right) findOurLeaves(tree.right,currDepth + 1 )
        if(tree.left) findOurLeaves(tree.left,currDepth + 1)
        
    }
maxHeight(root, 1)
findOurLeaves(root)
    return sum
};