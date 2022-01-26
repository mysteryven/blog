import lengthOfLongestSubstring from "./lengthOfLongestSubstring";

describe("lengthOfLongestSubstring", () => {
  test("lengthOfLongestSubstring", () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
    expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
    expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
    expect(lengthOfLongestSubstring("")).toBe(0);
  });
});
