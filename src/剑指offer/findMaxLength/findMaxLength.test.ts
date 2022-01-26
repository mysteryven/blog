import findMaxLength from "./findMaxLength";

describe("findMaxLength", () => {
  test("findMaxLength", () => {
    expect(findMaxLength([0,1])).toBe(2);
    expect(findMaxLength([0,1,0])).toBe(2);
  });
});
