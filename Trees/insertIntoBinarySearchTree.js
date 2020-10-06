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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    if(root === null){
        root = new TreeNode(val)
        return root
    }
    currentNode = root;
    while(true){
        if(currentNode.val <= val){
            if(currentNode.right !== null){
                currentNode = currentNode.right
            }else{
                currentNode.right = new TreeNode(val)
                break
            }
 
        }else{
            if(currentNode.left !== null){
                currentNode = currentNode.left
            }else{
                currentNode.left = new TreeNode(val)
                break
            }
        }
    }
    return root
};