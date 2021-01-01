/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    if (!l1 && !l2) return null;
    if (!l1) return l2;
    if (!l2) return l1;
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
let currOne = l1
let currTwo = l2
let result = new ListNode();
const startOfRes = result

/**
Algorithm
Walk through each linked list and perform long addition

**/
let prev = 0
while(l1 || l2 || prev){
let sum = ((l1) ? l1.val : 0) + ((l2) ? l2.val : 0) + prev;
    console.log(sum)
    
    if(sum < 10){
        result.val = sum
        prev = 0
    }else{
      let str = sum.toString().split("")
        prev = Number(str[0])
        result.val = Number(str[1])
    }
    l1 = (l1) ? l1.next : null;
    l2 = (l2) ? l2.next : null;
        result.next = ((l1 || l2) || prev) ? new ListNode() : null;
        result = result.next;
}
return startOfRes
};