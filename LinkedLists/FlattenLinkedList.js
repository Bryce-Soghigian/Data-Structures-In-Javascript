/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
    //We want to loop through ll and any time we see a node with a child we simply set 
    //node.next = node.child 
    const stack = []
    let temp = head
    while(head){
        if(head.child){
            if(head.next){
                stack.push(head.next)
            }
            head.next = head.child
            head.next.prev = head
            head.child = null
        }else if (!head.next && stack.length !== 0){
            head.next = stack.pop()
            head.next.prev = head
        }
        head = head.next
    }
    return temp
    };