class TrieNode3 {
  isWord: boolean;
  children: TrieNode3[];

  constructor() {
    this.children = new Array(26).fill(null);
    this.isWord = false;
  }
}

class MagicDictionary {
  root: TrieNode3;
  aCode: number;
  constructor() {
    this.root = new TrieNode3();
    this.aCode = 97;
  }

  buildDict(dictionary: string[]): void {
    for (let word of dictionary) {
      let node = this.root;
      for (let c of word) {
        let index = c.charCodeAt(0) - this.aCode;
        if (!node.children[index]) {
          node.children[index] = new TrieNode3();
        }
        node = node.children[index];
      }
      node.isWord = true;
    }
  }

  search(searchWord: string): boolean {
    return this.dfs(this.root, searchWord, 0, 0);
  }

  dfs(
    node: TrieNode3,
    searchWord: string,
    index: number,
    edit: number
  ): boolean {
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
