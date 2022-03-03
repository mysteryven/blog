/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const res = []
  helper(nums, {}, [], res)

  return res
};

function helper(nums, used, p, ret) {
  if (p.length === nums.length) {
    ret.push([...p])
    return
  }

  for (let i = 0; i < nums.length; i++) {
    if (!used[i]) {
      used[i] = true
      p.push(nums[i])
      helper(nums, used, p, ret)
      used[i] = false;
      p.pop()
    }
  }
}