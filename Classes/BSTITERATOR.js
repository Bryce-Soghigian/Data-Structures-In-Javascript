class BSTIterator {
  constructor(root) {
    this.index = -1;
    this.inOrder = [];
    this.traverse(root);
  }

  traverse(node) {
    if (node === null) return;
    if (node.left) this.traverse(node.left);
    this.inOrder.push(node.val);
    if (node.right) this.traverse(node.right);
  }

  hasNext() {
    if (this.index + 1 >= this.inOrder.length) return false;
    return true;
  }

  next() {
    if (this.hasNext()) {
      this.index++;
      return this.inOrder[this.index];
    }
    return false;
  }

}
