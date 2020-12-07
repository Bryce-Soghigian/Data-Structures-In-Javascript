/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(root === null) return []
const visited = []
/**
traverse the bst and save the value and its current depth 

**/
const traversal = (root,depth = 1) => {
    //Add current value 
    visited.push([root.val,depth])
    
    if(root.left){
        traversal(root.left, depth + 1)
    }
    if(root.right){
        traversal(root.right , depth + 1)
    }
}
traversal(root)
    
/**
Now we have all the nodes values and their levels
so now we sort the values by level and push them into subarrays
**/
visited.sort((a,b) => {
    if(a[1]> b[1]){
        return 1
    }else if(a[1]< b[1]){
        return -1
    }else{
        return 0
    }
})

    let start = visited[0][1]
    let end = visited[visited.length-1][1]
    let map = {}
    for(let i = start;i<end+1;i++){
        map[i] = []
    }
        console.log(visited)
    for(let i = 0;i<visited.length;i++){
        map[visited[i][1]].push(visited[i][0])
    }
        console.log(map)
    let returnMatrix = []
    for(let key in map){
        returnMatrix.push(map[key])
    }
    return returnMatrix
};