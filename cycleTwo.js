/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let curr = head
    let seen = new Set();
    while(curr){
        if(seen.has(curr)){
            return curr
        }
        seen.add(curr)
        curr = curr.next
    }
    return null
};