/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root) return 0;
    let depth = 0;
    let queue = [];
    queue.push(root);

    while (queue.length){
      let queueSize = queue.length;

      for(let i = 0; i < queueSize; i++){
        let node = queue.shift();
        queue.push(...node.children);
      }

      depth++;
    }

    return depth;
};

/**
 * O(n) time and O(n) space
 */