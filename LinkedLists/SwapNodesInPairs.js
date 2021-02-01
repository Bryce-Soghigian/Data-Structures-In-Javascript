/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if(head === null) return head
    if(head.next === null) return head
    /**
    The first is you go througbh and swap the values

    the second is you go through and swap the node
    - Two pointers
    
    
    if odd don't swap last node
    
    
    **/
    let curr = head
        while(curr){

    if(curr.next){
    let first = curr.val
    let second = curr.next.val
    curr.next.val = first
    curr.val = second
    }
    if(curr.next?.next !== null){
    curr = curr.next?.next

    }else{
        curr = curr.next
    }
    }
    
    return head
    
    
};