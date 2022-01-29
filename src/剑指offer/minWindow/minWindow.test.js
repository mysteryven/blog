import minWindow from "./minWindow.js";

describe("minWindow", () => {
  test("minWindow", () => {
    expect(minWindow( "ADOBECODEBANC", "ABC")).toBe("BANC");
  });
});
