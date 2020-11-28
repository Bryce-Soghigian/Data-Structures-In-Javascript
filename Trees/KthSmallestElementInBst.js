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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {

    const visited = [];
    
    
    const traversal = node => {
        if(node !== null){
        visited.push(node.val)
        traversal(node.left)
        traversal(node.right)
        }
    }
    traversal(root)
    //Sort values in desending order
    visited.sort((a,b) => b-a)
    let index = visited.length-k;
    let value = visited[index]
    return value
};