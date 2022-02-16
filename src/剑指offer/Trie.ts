class TrieNode {
  isWord: boolean;
  chilren: TrieNode[];

  constructor() {
    this.chilren = new Array(26).fill("");
    this.isWord = false;
  }
}

class Trie {
  root: TrieNode;
  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string): void {
    let node: TrieNode = this.root;
    const aCode = "a".charCodeAt(0);

    for (let w of word) {
      const index = w.charCodeAt(0) - aCode;
      if (node.chilren[index]) {
        node = node.chilren[index] as TrieNode;
      } else {
        const newNode = new TrieNode();
        node.chilren[index] = newNode;
        node = newNode;
      }
    }
    node.isWord = true;
  }

  search(word: string): boolean {
    let node: TrieNode = this.root;
    const aCode = "a".charCodeAt(0);

    for (let w of word) {
      const index = w.charCodeAt(0) - aCode;

      if (node.chilren[index]) {
        node = node.chilren[index] as TrieNode;
      } else {
        return false;
      }
    }
    return node.isWord === true;
  }

  startsWith(prefix: string): boolean {
    let node: TrieNode = this.root;
    const aCode = "a".charCodeAt(0);

    for (let w of prefix) {
      const index = w.charCodeAt(0) - aCode;

      if (node.chilren[index]) {
        node = node.chilren[index] as TrieNode;
      } else {
        return false;
      }
    }

    return true;
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
