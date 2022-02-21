/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  const index = upper(nums, target);
  if (index - 1 >= 0 && nums[index - 1] === target) {
    return index - 1;
  }
  return index;
};

function upper(nums, target) {
  let lo = 0;
  let hi = nums.length;

  while (lo < hi) {
    let mid = lo + ((hi - lo) >> 1);

    if (target >= nums[mid]) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }

  return hi;
}