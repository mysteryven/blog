class Solution {
  sums: number[];
  total: number;

  constructor(w: number[]) {
    let total = 0;
    let sums = [];
    for (let i = 0; i < w.length; i++) {
      sums[i] = w[i] + total;
      total = sums[i];
    }
    this.sums = sums;
    this.total = total;
  }

  pickIndex(): number {
    const target = Math.random() * this.total;

    let lo = 0;
    let hi = this.sums.length - 1;

    while (lo < hi) {
      let mid = lo + ((hi - lo) >> 1);
      let v = this.sums[mid];
      if (target >= v) {
        lo = mid + 1;
      } else {
        hi = mid;
      }
    }

    return lo;
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
