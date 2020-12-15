const checkTree = (tree,currDepth) => {
    if(tree === null) return []
    if(currDepth === result){
            returnValue = tree
    }
    if(tree.left){
        checkTree(tree.left, currDepth + 1)
    }
    if(tree.right){
        checkTree(tree.right,currDepth + 1)
    }
  }
checkTree(root,1)