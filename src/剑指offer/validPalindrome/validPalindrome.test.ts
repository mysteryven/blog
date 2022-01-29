import validPalindrome from "./validPalindrome";

describe("validPalindrome", () => {
  test("validPalindrome", () => {
    expect(validPalindrome("abca")).toBe(true);
    expect(validPalindrome("aba")).toBe(true);
    expect(validPalindrome("abc")).toBe(false);
  });
});
