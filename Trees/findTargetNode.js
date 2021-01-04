/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {
    //We want to traverse the cloned tree and look for target
    //When we find it we want to return that node
    
    const queue = [];
    queue.push(cloned)
    let targetNode = null
    while(queue.length !== 0){
        const currentNode = queue.pop()
        console.log(currentNode.val)
        if(currentNode.val === target.val){
            targetNode = currentNode
            break
        }
        
        if(currentNode.left){
            queue.unshift(currentNode.left)
        }
        if(currentNode.right){
            queue.unshift(currentNode.right)
        }
    }
    console.log(targetNode, target,"TAR")
    return targetNode
    
};


var getTargetCopyDFS = function(original, cloned, target) {
    //We want to traverse the cloned tree and look for target
    //When we find it we want to return that node
    

    let targetNode = null
    const dfs = node => {
        if(node === null) return 
        if(node.val === target.val){
            targetNode = node
            return
        }
        if(node.left) dfs(node.left)
        if(node.right) dfs(node.right)
    }
    dfs(cloned)
    return targetNode
    
};