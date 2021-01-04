/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if(root === null) return root
    const queue = [];
    let count = 0
    let x = 1
    queue.unshift(root)
    while(queue.length !== 0){
        let curr = queue.pop()
        count++

        if(count === Math.pow(2,x)-1){
            x++
            curr.next = null
        }else{
            curr.next = queue[queue.length-1]
        }
        if(curr.left){
            queue.unshift(curr.left)
        }
        if(curr.right){
             queue.unshift(curr.right)
        }
    }
    return root
};