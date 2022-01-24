export function threeSum(nums: number[]): number[][] {
  let ret: number[][] = [];

  nums.sort((a, b) => a - b);

  let i = 0;
  let len = nums.length;
  while (i < nums.length - 2) {
    twoSum(i, nums, -nums[i], ret);
    let temp = nums[i];
    while (i < len && nums[i] === temp) {
      i++;
    }
  }

  return ret;
}

function twoSum(lo: number, nums: number[], target: number, ret: number[][]) {
  let i = lo + 1;
  let j = nums.length - 1;

  while (i < j) {
    let val = nums[i] + nums[j];
    if (val === target) {
      ret.push([nums[lo], nums[i], nums[j]]);
      let temp = nums[i];
      while (i < j && nums[i] === temp) {
        i++;
      }
    } else if (val < target) {
      i++;
    } else {
      j--;
    }
  }
}
