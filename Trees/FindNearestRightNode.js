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
 * @param {TreeNode} u
 * @return {TreeNode}
 */
var findNearestRightNode = function (root, u) {

    let queue = [root];
    let found = false;
    while(queue.length){
        let size = queue.length;
        let index = 0;
        while(index < size){
            let node = queue.shift();
            if(found){
                return node;
            }
            if(node.val === u.val){
                if(index === size - 1){
                    return null;
                }
                found = true;
            }
            if(node.left){
                queue.push(node.left);
            }
            if(node.right){
                queue.push(node.right);
            }
            index++;
        }
    }
    return null;

};
