/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let ret = [];
  combileSubsets(nums, ret, 0, [])
  return ret;
};

function combileSubsets(nums, ret, start, p) {
  ret.push([...p]);

  if (start >= nums.length) {
    return;
  }

  for (let i = start; i < nums.length; i++) {
    p.push(nums[i]);
    combileSubsets(nums, ret, i + 1, p);
    p.pop(nums[i]);
  }
}