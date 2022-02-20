function TrieNode() {
  this.children = [];
  this.val = 0;
}

/**
* Initialize your data structure here.
*/
var MapSum = function () {
  this.root = new TrieNode();
};

/** 
* @param {string} key 
* @param {number} val
* @return {void}
*/
MapSum.prototype.insert = function (key, val) {
  let node = this.root;
  for (let char of key) {
    let index = char.charCodeAt(0) - 97;
    if (!node.children[index]) {
      node.children[index] = new TrieNode();
    }
    node = node.children[index];
  }

  node.val = val;
};

/** 
* @param {string} prefix
* @return {number}
*/
MapSum.prototype.sum = function (prefix) {
  let node = this.root;

  for (let char of prefix) {
    let index = char.charCodeAt(0) - 97;
    if (!node.children[index]) {
      return 0;
    }
    node = node.children[index];
  }

  return dfs(node);

  function dfs(root) {
    if (!root) {
      return 0;
    }
    if (root.children.length === 0) {
      return root.val;
    }

    let sum = root.val;
    for (let i = 0; i < root.children.length; i++) {
      sum += dfs(root.children[i])
    }

    return sum;
  }
};

/**
* Your MapSum object will be instantiated and called as such:
* var obj = new MapSum()
* obj.insert(key,val)
* var param_2 = obj.sum(prefix)
*/