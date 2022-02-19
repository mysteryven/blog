class MaxHeap {
  constructor() {
    this.list = [[null, null]];
  }

  add(val) {
    this.list.push(val);
    this.siftUp(this.list.length - 1)
  }

  siftUp(k) {
    while (k > 1) {
      let parentIndex = this.parent(k);
      if (this.less(parentIndex, k)) {
        this.exch(parentIndex, k);
        k = parentIndex;
      } else {
        break;
      }
    }
  }

  exch(i, j) {
    let temp = this.list[i];
    this.list[i] = this.list[j];
    this.list[j] = temp;
  }

  parent(k) {
    return k >> 1;
  }

  less(i, j) {
    return (this.list[i][0] + this.list[i][1]) < (this.list[j][0] + this.list[j][1]);
  }

  deleteMax() {
    this.exch(1, this.list.length - 1);
    this.list.pop();
    this.siftDown(1);
  }

  siftDown(k) {
    while (this.leftChild(k) < this.list.length) {
      let j = this.leftChild(k);
      while (j + 1 < this.list.length && this.less(j, j + 1)) {
        j++;
      }

      if (this.less(k, j)) {
        this.exch(k, j);
        k = j
      } else {
        break;
      }
    }
  }

  leftChild(k) {
    return 2 * k;
  }

  peekMax() {
    return this.list[1][0] + this.list[1][1];
  }

  get size() {
    return this.list.length - 1
  }

  asList() {
    return this.list.slice(1)
  }
}

/**
* @param {number[]} nums1
* @param {number[]} nums2
* @param {number} k
* @return {number[][]}
*/
var kSmallestPairs = function (nums1, nums2, k) {
  const maxHeap = new MaxHeap();

  for (let i = 0; i < Math.min(nums1.length, k + 1); i++) {
    for (let j = 0; j < Math.min(nums2.length, k + 1); j++) {
      if (maxHeap.size >= k) {
        const current = nums1[i] + nums2[j];
        const max = maxHeap.peekMax()
        if (max > current) {
          maxHeap.deleteMax();
          maxHeap.add([nums1[i], nums2[j]]);
        } else {
          break;
        }
      } else {
        maxHeap.add([nums1[i], nums2[j]]);
      }
    }
  }

  return maxHeap.asList();
};