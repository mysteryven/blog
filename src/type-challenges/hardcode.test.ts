import { flatten } from "./hardcode"

test("flatten", () => {
    expect(flatten([1, 2, 3])).toEqual([1, 2, 3])
    expect(flatten([1, [2, 3]])).toEqual([1, 2, 3])
    expect(flatten([1, [[2, 3]], 4])).toEqual([1, 2, 3, 4])
})