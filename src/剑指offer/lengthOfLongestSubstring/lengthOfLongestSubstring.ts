export default function lengthOfLongestSubstring(s: string): number {
  let count = new Set();
  let i = 0;
  let j = 0;
  let longest = 1;

  for (; i < s.length; i++) {
    if (count.has(s[i])) {
      // pwwkew
      while (j < i) {
        if (s[j] === s[i]) {
          j++;
          break;
        } else {
          count.delete(s[++j]);
        }
      }
      console.log(longest, i, j);
      longest = Math.max(longest, i - j + 1);
    } else {
      count.add(s[i]);
    }
  }

  return longest;
}
