class TrieNode2 {
  children: TrieNode2[];
  isWord: boolean = false;

  constructor() {
    this.children = [];
  }
}

class Trie2 {
  root: TrieNode2;
  aCode: number;

  constructor() {
    this.root = new TrieNode2();
    this.aCode = 97;
  }

  buildTrie(dictionary: string[]) {
    for (let word of dictionary) {
      this.add(word);
    }
  }

  add(word: string) {
    let node = this.root;
    for (let char of word) {
      const charCode = char.charCodeAt(0);
      if (!node.children[charCode - this.aCode]) {
        node.children[charCode - this.aCode] = new TrieNode2();
      }
      node = node.children[charCode - this.aCode];
    }

    node.isWord = true;
  }

  findPrefix(prefix: string) {
    let node = this.root;

    for (let i = 0; i < prefix.length; i++) {
      if (node.isWord) {
        return prefix.slice(0, i);
      }

      const char = prefix[i];
      const charCode = char.charCodeAt(0);

      if (!node.children[charCode - this.aCode]) {
        return prefix;
      } else {
        node = node.children[charCode - this.aCode];
      }
    }

    return prefix;
  }
}

function replaceWords(dictionary: string[], sentence: string): string {
  const trie = new Trie2();
  trie.buildTrie(dictionary);

  return sentence
    .split(" ")
    .map((i) => trie.findPrefix(i))
    .join(" ");
}
