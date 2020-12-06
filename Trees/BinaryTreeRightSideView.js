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
 * @return {number[]}
 */
var rightSideView = function(root) {
    /**
    We want to traverse tree and return the right side nodes
    
    **/
    const cache = []
    const traverseRight = ( node , level ) =>{
        //As we traverse each level we want to push each rightmost element into the cache
        if(node === null) return
        if(level == cache.length){
            cache.push(node.val)
        }
        if(node.right !== null){
            traverseRight(node.right, level + 1)
        }
        if(node.left !== null){
            traverseRight(node.left, level + 1)
        }
    }
    traverseRight(root, 0);
    return cache
};