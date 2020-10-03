class TreeNode {
    constructor(value) {
      this.value = value;
      this.children = [];
    }
  }
  
  class Tree {
    constructor() {
      this.root = null;
    }
    traverseDFS(type){
        //if root doesn't exist return false
        if(!this.root){
            return false;
        }
        const treeValues = [];
        let current = this.root;

        const preOrderHelper = node => {
            treeValues.push(node.value);
            if(node.children.length !== 0){
                node.children.forEach(child => {
                    console.log(child,"child")
                    preOrderHelper(child)
                })
            }
            return true
        }
        const postOrderHelper = node => {
            if(node.children.length != 0 ){
                    node.children.forEach(child => {
                        postOrderHelper(child)
                    })
            }
            treeValues.push(node.value)
            return true
        }

        switch(type){
            case "pre":
                preOrderHelper(current);
                break
            case "post":
                postOrderHelper(current);
                break
            case "in":
                inOrderHelper(current)
        }
        return treeValues
    }
  }

  const testTree = new Tree();

testTree.root = new TreeNode("H");
testTree.root.children.push(new TreeNode("e"));
testTree.root.children.push(new TreeNode("l"));
testTree.root.children[0].children.push(new TreeNode("l"));
testTree.root.children[0].children.push(new TreeNode("o"));
testTree.root.children[0].children.push(new TreeNode("W"));
testTree.root.children[1].children.push(new TreeNode("o"));
testTree.root.children[1].children.push(new TreeNode("r"));
testTree.root.children[1].children.push(new TreeNode("l"));
testTree.root.children[1].children.push(new TreeNode("d"));

console.log(testTree.traverseDFS("post"))