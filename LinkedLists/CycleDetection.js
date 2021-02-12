/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(head === null) return false
    let slow = head
    let fast = head.next
    while(slow && fast){
        if(slow === fast){
            return true
        }
        slow = slow.next
        fast = fast.next?.next
    }
        return false
    };