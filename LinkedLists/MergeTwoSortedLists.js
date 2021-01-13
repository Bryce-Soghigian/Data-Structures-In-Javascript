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
var mergeTwoLists = function(l1, l2) {
    if(l1 === null && l2=== null){
        return null
    }
    let list = []
let current = l1;

while (current !== null) {
    list.push(current.val)
    current = current.next;
}
    
let headl2 = l2;
    
while(headl2 !==null){
    list.push(headl2.val);
    headl2 = headl2.next
}

 list.sort((a,b) => a-b)
//go through and build a ll with the sorted list
let copy = new ListNode();
const newList = copy


while(list.length !== 0){
    let val = list.shift();
    console.log(val)
    copy.val = val
    copy.next = new ListNode()

    if(list.length === 0){
        copy.next = null
        break
    }
        copy = copy.next
}
return newList

};



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
var mergeTwoLists = function(l1, l2) {
    if(l1 == null){
        return l2
    }
    else if(l2 == null){
        return l1
    }
    else if(l1.val< l2.val){
        l1.next = mergeTwoLists(l1.next, l2)
        return l1
    }
    else {
        l2.next = mergeTwoLists(l1, l2.next)
        return l2
    }

};