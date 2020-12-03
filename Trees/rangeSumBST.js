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
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
    let total = 0
    //As we traverse check if a value is between Low and high 
    //If true add to total
    
    const traverse = node =>{
        if(!node) return
        if(node.val <= R && node.val >=L){
            total += node.val
        }
        traverse(node.left)
        traverse(node.right)
    }
    traverse(root)
    return total
};