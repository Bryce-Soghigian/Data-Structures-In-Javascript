/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param head The linked list's head.
        Note that the head is guaranteed to be not null, so it contains at least one node.
 * @param {ListNode} head
 */
var Solution = function(head) {
    this.head=head;
    this.values = []
    this.size=0;
    while(head){
        this.values.push(head.val)
        head=head.next;
        this.size++;
    }
};

/**
 * Returns a random node's value.
 * @return {number}
 */
Solution.prototype.getRandom = function() {
    function getRandomNumber(low, high) {
  let r = Math.floor(Math.random() * (high - low + 1)) + low;
  return r;
}
    let target = getRandomNumber(1,this.size)
    console.log(target,"target")
    let returnVal = this.values[target-1]
    return returnVal
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */