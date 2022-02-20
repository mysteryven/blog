/**
 * @param {string[]} words
 * @return {number}
 */

class TrieNode5 {
  constructor() {
    this.children = [];
  }
}

var minimumLengthEncoding = function (words) {
  const root = new TrieNode5();

  for (let word of words) {
    let node = root;
    for (let i = word.length - 1; i >= 0; i--) {
      const index = word[i].charCodeAt(0) - 97;

      if (!node.children[index]) {
        node.children[index] = new TrieNode5()
      }
      node = node.children[index]
    }
  }

  let totalRef = {
    num: 0
  }

  dfs(root, totalRef, 1);

  return totalRef.num;
};

function dfs(root, totalRef, pathLength) {
  const validChildren = root.children.filter(i => i);
  console.log(root.children)
  if (validChildren.length === 0) {
    totalRef.num += pathLength
    return;
  }

  for (let child of validChildren) {
    dfs(child, totalRef, pathLength + 1);
  }
}