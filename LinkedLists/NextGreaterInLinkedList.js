/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function(head) {
    //Traverse ll 
    // Push values into array
    let nodes = []
    let curr = head;
    while(curr){
     nodes.push(curr.val)  

        curr = curr.next
    }
    //Now we loop through array
    // if val is not max traverse array till you find greater
    let output = [];
    for(let i = 0;i<nodes.length;i++){
        let key = nodes[i]
        //Loop through the rest of the array
        // keep setting local max 
       let foundGreater = false
        for(let j = i;j<nodes.length;j++){
            if(nodes[j] > nodes[i]){
                output.push(nodes[j])
                foundGreater = true
                break
            }
        }
        if(foundGreater === false){
            output.push(0)
        }
    }
    return output
};