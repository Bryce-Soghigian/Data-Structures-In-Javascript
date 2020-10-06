traverseBfs(value){
    let collection = [this.root]
    while(collection.length){
        let node = collection.shift();
        if(node.data=== value){
            return true
        }else {
            collection.push(...node.children)
        }
    }
    return false
}