const printLevelOrder = (root) => {
if(root === null){
    return 
}
//Create an empty queue
let queue = [];
queue.shift(root)

while(queue.length > 0){
    console.log(queue[0])
    let node = queue.pop()

    if(node.left !== null){
        queue.shift(node.left)
    }
    if(node.right !== null){
        queue.append(node.right)
    }
}
}