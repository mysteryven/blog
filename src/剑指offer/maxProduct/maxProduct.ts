export default function maxProduct(words: string[]): number {
  let max = 0;
  let flags = new Array(words.length).fill(0);
  let baseCode = "a".charCodeAt(0);

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    for (let j = 0; j < word.length; j++) {
      flags[i] |= (1 << (word.charCodeAt(j) - baseCode))
    }
  }
  

  for (let i = 0; i < flags.length - 1; i++) {
    for (let j = i + 1; j < flags.length; j++) {
      if ((flags[i] & flags[j]) === 0) {
        max = Math.max(max, words[i].length * words[j].length);
      }
    }
  }

  return max;
}
