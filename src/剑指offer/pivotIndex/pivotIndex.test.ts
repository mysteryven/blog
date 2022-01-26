import pivotIndex from "./pivotIndex";

describe("pivotIndex", () => {
  test("pivotIndex", () => {
    expect(pivotIndex([1, 7, 3, 6, 5, 6])).toBe(3);
    expect(pivotIndex([2,1,-1])).toBe(0);
  });
});
