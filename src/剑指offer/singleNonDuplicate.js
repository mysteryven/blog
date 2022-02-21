/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  let left = 0;
  let right = nums.length >> 1;

  while (left <= right) {
    let mid = left + ((right - left) >> 1);
    let i = mid * 2

    if (nums[i] === nums[i + 1]) {
      left = mid + 1;
    } else if (nums[i - 2] === nums[i - 1]) {
      return nums[i]
    } else {
      right = mid - 1;
    }
  }

  return -1;
};