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
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {
    
    const cache = [];
        const traverse = node => {
            if (node === null) return []
            cache.push(node.val)
                if(node.left)traverse(node.left)
                if(node.right)traverse(node.right)
            
        }
        traverse(root)
        let curr = cache[0]
        for(let i in cache){
            if(Math.abs(cache[i]-target)< Math.abs(curr-target)) curr = cache[i]
        }
        return curr
    };