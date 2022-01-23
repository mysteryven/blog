import twoSum from "./twoSum";

describe("twoSum", () => {
  test("twoSum", () => {
    expect(twoSum([1,2,4,6,10], 8)).toStrictEqual([1, 3]);
    expect(twoSum([-1, 0], -1)).toStrictEqual([0, 1]);
    expect(twoSum([2,3,4], 6)).toStrictEqual([0, 2]);
  });
});
