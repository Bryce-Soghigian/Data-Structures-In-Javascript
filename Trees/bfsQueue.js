const bfs = (root) => {
    let queue = []
//enqueue our values
queue.unshift(root)
let values = []
while(queue.length > 0){
    console.log(queue)
    let currentTreeNode = queue.pop();
         values.push(currentTreeNode.val)

    if(currentTreeNode.left){
        queue.unshift(currentTreeNode.left)
    }
    if(currentTreeNode.right){
        queue.unshift(currentTreeNode.right)
    }
}
}