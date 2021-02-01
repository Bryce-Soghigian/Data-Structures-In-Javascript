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
var sortListLinkedList = function(head) {
    //One apporach that is memory inEfficent is you grab all of the list values put them in an array , sort that array then create a new list from that array
if(head == null) return head
let cur = head;
let length = 0;
while(cur){
    length++
    cur = cur.next
}
let isSorted = true
let curr = head
while(true){
   
    if(curr.next === null){
        curr = head
        if(isSorted === true){
            break
        }else{
            isSorted = true
        }
    }
    if(curr.val > curr.next.val){
        isSorted = false;
        let temp = curr.next.val;
        curr.next.val = curr.val;
        curr.val = temp;
    }
    curr = curr.next
}
    return head
};