export default function lengthOfLongestSubstring(s: string): number {
  if (s.length === 0) {
    return 0;
  }
  let i = 0;
  let j = 0;
  let longest = 1;
  let lastIndex: Record<string, number | undefined> = {};

  for (; i < s.length; i++) {
    if (lastIndex[s[i]] === undefined) {
      lastIndex[s[i]] = i;
    } else {
      let endJ = lastIndex[s[i]] as number;
      lastIndex[s[i]] = i;
      while (j < endJ) {
        lastIndex[s[j++]] = undefined;
      }
      j = Math.min(i, endJ + 1);
    }

    longest = Math.max(longest, i - j + 1);
  }

  return longest;
}
