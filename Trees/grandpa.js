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
var sumEvenGrandparent = function(root) {
    
    const isEven = (v) =>  v % 2 === 0


//Find every grandfather node
    // check if its even 
        //If its even we add it to a total sum 
    
let total = 0
const dfs = (node,isParentEven) => {
   if(node === null) return
    if(isParentEven){
        total += node.left?.val || 0
        total += node.right?.val || 0
    }
    dfs(node.left,isEven(node.val))
    dfs(node.right,isEven(node.val))
}
dfs(root,false)



return total
};