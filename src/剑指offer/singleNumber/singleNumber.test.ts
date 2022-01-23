import singleNumber from "./singleNumber";

describe("singleNumber", () => {
  test("singleNumber", () => {
    expect(singleNumber([2, 2, 3, 2])).toBe(3);
    expect(singleNumber([0, 1, 0, 1, 0, 1, 100])).toBe(100);
  });
});
