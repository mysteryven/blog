function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map<number, number>();
  const minHeap = new MinHeap(k, (a, b) => a[1] - b[1]);

  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (let [value, times] of map) {
    if (minHeap.size() === k) {
      const [v, t] = minHeap.peekMin();
      if (times > t) {
        minHeap.extractMin();
      }
      minHeap.add([value, times]);
    } else {
      minHeap.add([value, times]);
    }
  }

  return minHeap.getValues();
}

class MinHeap {
  list: Array<[number, number]>;
  comparator: (a: [number, number], b: [number, number]) => number;
  capacity: number;

  constructor(
    capacity: number,
    comparator: (a: [number, number], b: [number, number]) => number
  ) {
    this.list = [[-1, -1]];
    this.comparator = comparator;
    this.capacity = capacity;
  }

  size() {
    return this.list.length - 1;
  }

  add(v: [number, number]) {
    if (this.capacity === this.list.length - 1) {
      return;
    }

    this.list.push(v);
    this.siftUp(this.list.length - 1);
  }

  peekMin() {
    return this.list[1];
  }

  extractMin() {
    this.swap(1, this.list.length - 1);
    const ret = this.list.pop();
    this.siftDown(1);

    return ret;
  }

  siftDown(k: number) {
    while (this.leftChild(k) < this.list.length) {
      let j = this.leftChild(k);
      if (
        j + 1 < this.list.length &&
        this.comparator(this.list[j], this.list[j + 1]) > 0
      ) {
        j++;
      }

      if (this.comparator(this.list[k], this.list[j]) < 0) {
        break;
      }
      this.swap(k, j);
      k = j;
    }
  }

  leftChild(k: number) {
    return 2 * k;
  }

  siftUp(k: number) {
    while (k > 1) {
      const parent = this.parent(k);
      if (this.comparator(this.list[parent], this.list[k]) > 0) {
        this.swap(parent, k);
        k = parent;
      } else {
        break;
      }
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

  getValues(): number[] {
    return this.list.slice(1).map((i) => i[0]);
  }
}
