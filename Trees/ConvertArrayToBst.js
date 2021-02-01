/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if(nums == null || nums.length == 0) {
        return null;
    }
     return bst(nums,0,nums.length-1);
     
    function bst(nums,left,right){
         if(left > right){
             return null;
         }
         let mid = Math.floor(left + (right - left ) /2);
         let current = new TreeNode(nums[mid]);
         current.left = bst(nums,left,mid - 1);
         current.right = bst(nums,mid+1,right);
         
         return current;
     }
 };