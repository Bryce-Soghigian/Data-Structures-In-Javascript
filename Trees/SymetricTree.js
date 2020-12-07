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
 * @return {boolean}
 */
var isSymmetric = function(root) {

    //Go through level by level and see if the right pair of a level matches the other pair
    /*
    so lets define a symetric tree 
1 has a left of 2 and a right of 2 so thats true
the left 2 has a left 3 and a right 4
the right has a 4 and 3


Two trees are a mirror reflection of each other if:

Their two roots have the same value.
The right subtree of each tree is a mirror reflection of the left subtree of the other tree.

    
    */
let queue = []
//Add our tree twice
queue.unshift(root)
queue.unshift(root)
while(queue.length > 0){
    let subtreeOne = queue.pop();
    let subtreeTwo = queue.pop();
    if(subtreeOne == null && subtreeTwo == null)continue
    if(subtreeOne === null || subtreeTwo === null) return false
    if(subtreeOne.val !== subtreeTwo.val) return false;
    //add the nodes in inverted order if they are equal in the loc above then its symetical and everything is fine
    queue.unshift(subtreeOne.left);
    queue.unshift(subtreeTwo.right)
    queue.unshift(subtreeOne.right)
    queue.unshift(subtreeTwo.left)
}

    return true
};