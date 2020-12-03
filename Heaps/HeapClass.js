class MinHeap {
  constructor() {
    //Initalizing a heap and adding a null val at index 0 to follow the design type with roots of empty bsts to be null
    this.heap = [null];
  }

  getMin() {
    //Acessing the min value at
    return this.heap[1];
  }
  insert(element) {
    //add element to heap
    this.head.push(element);
    //Find correct positon for new element
    if (this.heap.length > 1) {
      let current = this.heap.length - 1;
      // Traverse heap up to the parent node unitl the current code is greater than the parent
      while (
        current > 1 &&
        this.heap[Math.floor(current / 2)] > this.heap[current]
      ) {
        //Swap nodes via destructuring

        [this.heap[Math.floor(current / 2)], this.heap[current]] = [
          this.heap[current],
          this.heap[Math.floor(current / 2)],
        ];
        current = Math.floor(current / 2);
      }
    }
  }
  remove() {
    //Smallest ele
    let smallest = this.heap[1];

    if (this.heap.length > 2) {
      this.heap[1] = this.heap[this.heap.length - 1];
      this.heap.splice(this.heap.length - 1);

      if (this.heap.length == 3) {
        if (this.heap[1] > this.heap[2]) {
          //Swap values in our heap
          [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
        }
        return smallest;
      }

      let current = 1;
      let leftChildIndex = current * 2;
      let rightChildIndex = current * 2 + 1;
      while (
        this.heap[leftChildIndex] &&
        this.heap[rightChildIndex] &&
        (this.heap[current] > this.heap[leftChildIndex] ||
          this.heap[current] > this.heap[currentChildIndex])
      ) {
        if (this.heap[leftChildIndex] < this.heap[rightChildIndex]) {
          [this.heap[current], this.heap[leftChildIndex]] = [
            this.heap[leftChildIndex],
            this.heap[current],
          ];
          current = leftChildIndex;
        } else {
          [this.heap[current], this.heap[rightChildIndex]] = [
            this.heap[rightChildIndex],
            this.heap[current],
          ];
          current = rightChildIndex;
        }
        leftChildIndex = current * 2;
        rightChildIndex = current * 2 + 1;
      }
    }

    if (
      this.heap[rightChildIndex] === undefined &&
      this.heap[leftChildIndex] < this.heap[current]
    ) {
      [this.heap[current], this.heap[leftChildIndex]] = [
        this.heap[leftChildIndex],
        this.heap[current],
      ];
    } else if (this.heap.length === 2) {
      this.heap.splice(1, 1);
    } else {
      return null;
    }
    return smallest;
  }
}
