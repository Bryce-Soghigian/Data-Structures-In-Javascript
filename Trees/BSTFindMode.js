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
 * @return {number[]}
 */
var findMode = function(root) {
    const map = {}
    
    
    const traverse = root => {
        if(root === null) return []
        console.log(root.val)
        
        if(map[root.val]=== undefined){
            map[root.val] = 1
        }else{
            map[root.val] += 1
        }
        if(root.left) traverse(root.left)
        if(root.right) traverse(root.right)
    }
traverse(root)
        console.log(map)
let res = Object.entries(map)
let max = 0
let mode = []
for(let i = 0;i<res.length;i++){
    if(res[i][1]> max){
        max = res[i][1]
    }

}
    for(let key in map){
        if(map[key] === max){
            mode.push(key)
        }
    }
console.log(mode)
 
return mode
    

};