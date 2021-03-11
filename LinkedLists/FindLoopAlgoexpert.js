// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function findLoop(head) {
    // Write your code here.
      //use the fast and slow pointer algorithm
      
      
      /**
  
      0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> 4(cycle)
      
      
      s = 0
      f = 0
      s = 1
      f  = 2
      s = 2 
      f = 4
      s = 3
      f = 6
      s = 4
      f = 8
      s = 5 
      f = 4
      s = 6
      f = 6
      **/
      
  let slow = head.next
  let fast = head.next.next;
  while(slow !== fast){
      slow = slow.next;
      fast = fast.next.next;
  }
      slow = head
      while(slow !== fast){
          slow= slow.next;
       fast = fast.next
      }
      return slow
  }
  
  // Do not edit the lines below.
  exports.LinkedList = LinkedList;
  exports.findLoop = findLoop;
  