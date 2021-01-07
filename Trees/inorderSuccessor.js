/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function(root, p) {
    //Traverse to the node and when you find p return its parent

let succ = null
while(root !== null){
    if(p.val < root.val){
            succ = root
    root = root.left
    }else{
        root = root.right
    }

}
    return succ
    
};