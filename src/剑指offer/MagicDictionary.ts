class TrieNode {
  isWord: boolean;
  children: TrieNode[];

  constructor() {
    this.children = new Array(26).fill(null);
    this.isWord = false;
  }
}

class MagicDictionary {
  root: TrieNode;
  aCode: number;
  constructor() {
    this.root = new TrieNode();
    this.aCode = 97;
  }

  buildDict(dictionary: string[]): void {
    for (let word of dictionary) {
      let node = this.root;
      for (let c of word) {
        let index = c.charCodeAt(0) - this.aCode;
        if (!node.children[index]) {
          node.children[index] = new TrieNode();
        }
        node = node.children[index];
      }
      node.isWord = true;
    }
  }

  search(searchWord: string): boolean {
    return this.dfs(this.root, searchWord, 0, 0);
  }

  dfs(node: TrieNode, searchWord: string, index: number, edit: number) {
    if (!node) {
      return false;
    }

    if (searchWord.length === index && edit === 1 && node.isWord) {
      return true;
    }

    if (searchWord.length <= index || edit > 1) {
      return false;
    }

    let found = false;

    for (let i = 0; i < node.children.length && !found; i++) {
      let nextEdit =
        searchWord[index].charCodeAt(0) - 97 === i ? edit : edit + 1;
      found = this.dfs(node.children[i], searchWord, index + 1, nextEdit);
    }

    return found;
  }
}

/**
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dictionary)
 * var param_2 = obj.search(searchWord)
 */
