/**
 * @param {number[]} nums
 * @return {number}
 */

function TrieNode() {
  this.children = [];
}

var findMaximumXOR = function (nums) {
  const root = new TrieNode();

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let node = root;
    for (let i = 31; i >= 0; i--) {
      const bit = (num >> i) & 1;

      if (!node.children[bit]) {
        node.children[bit] = new TrieNode();
      }

      node = node.children[bit];
    }
  }

  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    let base = 0;
    let num = nums[i];
    let node = root;

    for (let j = 31; j >= 0; j--) {
      let bit = (num >> j) & 1;

      if (node.children[1 - bit]) {
        node = node.children[1 - bit];
        base = (base << 1) | 1;
      } else {
        node = node.children[bit];
        base = base << 1;
      }

    }

    max = Math.max(max, base);
  }

  return max;
};