class MaxHeap {
  list: number[];
  size: number;
  capacity: number;

  constructor(capacity: number) {
    this.list = [-1];
    this.size = 0;
    this.capacity = capacity;
  }

  add(val: number): number {
    if (this.size === this.capacity) {
      if (val > this.list[1]) {
        this.extractMin();
      } else {
        return this.list[1];
      }
    }
    this.list.push(val);
    this.size++;
    this.siftUp(this.size);

    return this.list[1];
  }

  extractMin() {
    this.swap(1, this.size);
    this.list.pop();
    this.size--;
    this.siftDown(1);
  }

  siftDown(k: number) {
    while (this.leftChild(k) <= this.size) {
      let j = this.leftChild(k);
      if (j + 1 <= this.size && this.less(this.list[j + 1], this.list[j])) {
        j++;
      }
      if (this.less(this.list[j], this.list[k])) {
        this.swap(j, k);
      }
      k = j;
    }
  }

  leftChild(k: number) {
    return 2 * k;
  }

  siftUp(k: number) {
    while (k > 1 && this.less(this.list[k], this.list[this.parent(k)])) {
      this.swap(k, this.parent(k));
      k = this.parent(k);
    }
  }

  swap(x: number, y: number) {
    let temp = this.list[x];
    this.list[x] = this.list[y];
    this.list[y] = temp;
  }

  parent(k: number) {
    return k >> 1;
  }

  less(a: number, b: number) {
    return a < b;
  }
}

export default class KthLargest {
  maxHeap: MaxHeap;

  constructor(k: number, nums: number[]) {
    this.maxHeap = new MaxHeap(k);
    for (let i = 0; i < nums.length; i++) {
      this.maxHeap.add(nums[i]);
    }
  }

  add(val: number): number {
    return this.maxHeap.add(val);
  }
}
