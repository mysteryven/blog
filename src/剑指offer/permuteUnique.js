/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  let ret = []
  nums.sort((a, b) => a - b)
  helper(nums, [], ret, {})

  return ret
};

function helper(nums, p, ret, used) {
  if (p.length === nums.length) {
    ret.push([...p])
    return
  }

  let tempUsed = {}

  // [1, 1, 1, 2, 2, 3, 3, 3]
  for (let i = 0; i < nums.length; i++) {
    if (!used[i] && !tempUsed[nums[i]]) {
      tempUsed[nums[i]] = true
      p.push(nums[i])
      used[i] = true
      helper(nums, p, ret, used)
      used[i] = false
      p.pop()
    }
  }
}