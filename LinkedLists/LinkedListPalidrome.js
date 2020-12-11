/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    console.log(head)
    let current = head
    let palidrome = ""
    while(current){
        palidrome += current.val.toString()
        current = current.next
    }
        let reversed = palidrome.split("").reverse().join("")
    console.log(palidrome,reversed)
    if(palidrome === reversed){
        return true
    }else{
        return false
    }
};



/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    console.log(head)
    let current = head
    let palindrome = []
    while(current){
        palindrome.push(current.val)
        current = current.next
    }

    //Use two pointer technique to check for palidrome
    let isPalindrome = true
    let front = 0
    let back = palindrome.length-1;
    for(let i = 0;i<palindrome.length;i++){
        if(palindrome[front] === palindrome[back]){
            isPalindrome = true
            front++
            back--
        }else{
            isPalindrome = false
        }
    }
    return isPalindrome
};