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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    const traversal = tree => {
        if(tree === null){
            return
        }
        let left = tree.left;
        let right = tree.right;
        tree.left = right;
        tree.right = left;
        if(tree.left) traversal(tree.left)
            if(tree.right) traversal(tree.right)
    
    }
    traversal(root);
        return root
    };