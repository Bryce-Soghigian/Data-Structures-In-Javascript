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
    /**
Approach 1. BFS where we go from left to right and 
We wanna check to see if the current node in our bfs is a last node

1. Check to see if last node
WHat exactly is a last node 2

if lastNode === true:
    curr.next = null
else:
    curr.next = queue.pop()
    **/
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