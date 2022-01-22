export function threeSum(nums: number[]): number[][] {
  let ret: number[][] = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > 0) {
      break;
    }

    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    for (let j = nums.length - 1; j > i; j--) {
      if (nums[j] < 0) {
        break;
      }

      if (j < nums.length - 1 && nums[j] === nums[j + 1]) {
        continue;
      }
      if (i === 1 && j === 5) {
        debugger;
      }
      const val = binarySearch(i + 1, j - 1, nums);
      if (val) {
        ret.push(val);
      }
    }
  }

  return ret;
}

export function binarySearch(
  lo: number,
  hi: number,
  nums: number[]
): false | number[] {
  let originLo = lo - 1;
  let originHi = hi + 1;
  let val = -nums[originLo] - nums[originHi];
  while (lo <= hi) {
    let mid = lo + Math.floor((hi - lo) / 2);
    if (nums[mid] === val) {
      return [nums[originLo], nums[mid], nums[originHi]];
    } else if (nums[mid] < val) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }

  return false;
}
