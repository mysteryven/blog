import isPalindrome from "./isPalindrome";

describe("isPalindrome", () => {
  test("isPalindrome", () => {
    expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
    expect(isPalindrome("0P")).toBe(false);
  });
});
