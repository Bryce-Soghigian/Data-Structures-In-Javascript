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
var maxDepth = function(root) {
    if(!root) return 0;
var result;
function maxHeight(root, depth){
    if(!root.left && !root.right){
        result = Math.max(result || depth, depth)
    }
    if(root.left){
    console.log("traversing left node",root.val)
    maxHeight(root.left, depth + 1);
    } 
    if(root.right){
    console.log("traversing right node",root.val)
      maxHeight(root.right, depth + 1);  
    } 
}
maxHeight(root, 1);
return result;
};


const maxDepthBfs = (root,depth ) => {
    
}