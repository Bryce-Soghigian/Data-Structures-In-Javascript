/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */

   /**
   We need to do a level by level traversal(BFS)
   then after we have gotten all the values we go through the tree again and connect the nodes 
   
   **/
    
  var connect = function(root) {
    const queue = [root];
    let tail = root;
    // BFS
    while(queue.length) {
      const curr = queue.shift();
      if(!curr) break;
      if(curr.left !== null) queue.push(curr.left);
      if(curr.right !== null) queue.push(curr.right);
      if(curr === tail) {
        curr.next= null;
        tail = queue.length > 0 ? queue[queue.length-1] : null;
      } else {
        curr.next = queue[0];
      }
    }
    return root;
  }
  