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
var searchBST = function(root, val) {
    let visited = []
    let returnNode = null;
    const traverse = node => {
        if(node === null){
            return
        }
        if(node.val === val){
            console.log(node)
            returnNode = node
            return
        }
        if(node.left) traverse(node.left)
        if(node.right) traverse(node.right)
    }
traverse(root)

return returnNode
    
    
}; 