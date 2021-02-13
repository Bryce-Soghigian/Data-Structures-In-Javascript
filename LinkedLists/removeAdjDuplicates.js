// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function removeDuplicatesFromLinkedList(linkedList) {
      if(linkedList === null) return linkedList
      if(linkedList.next === null) return linkedList
  //Since we know that the list is sorted we can go through in one pass and remove any values where the
      //next val is the same as curr  which is an o(n) solution which is optimal
      /**
      edge cases
  
      tail
      two nodes 
      
      
       6 -> 6 -> null
       6.next = null 
      **/
  let curr = linkedList;
  while(curr){
      //Check if next node is a duplicate
      if(curr.next?.next){
              if(curr.value === curr.next.value ){
                  curr.next = curr.next.next
                  continue
              }
      }else{
          if(curr.value === curr.next?.value){
                      curr.next = null
                      break
          }
      }
  
      curr = curr.next
  }
      console.log(linkedList)
      return linkedList
      
  }
  // Do not edit the lines below.
  exports.LinkedList = LinkedList;
  exports.removeDuplicatesFromLinkedList = removeDuplicatesFromLinkedList;
  