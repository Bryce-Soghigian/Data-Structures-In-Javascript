/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val === undefined ? 0 : val;
 *    this.children = children === undefined ? [] : children;
 * };
 */

/**
 * @param {Node[]} tree
 * @return {Node}
 */
var findRoot = function(tree) {
    let root = null
       let globalNodeMax = -Infinity
       for(let i = 0;i<tree.length;i++){
           let localNodeTotal = 0
       const dfs = (root) => {
           if(root == null) return;
           for(let child of root.children) dfs(child);
           localNodeTotal++
       }
       dfs(tree[i])
           if(localNodeTotal > globalNodeMax){
               root = tree[i]
               globalNodeMax = localNodeTotal
           }
       }
       return root
   };