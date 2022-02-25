function findKthLargest(nums: number[], k: number): number {
  let start = 0;
  let end = nums.length - 1;
  let targetIndex = nums.length - k;
  let index = partition(nums, start, end);

  while (index !== targetIndex) {
    if (index > targetIndex) {
      end = index - 1;
    } else {
      start = index + 1;
    }

    index = partition(nums, start, end);
  }

  return nums[index];
}

function partition(nums: number[], lo: number, hi: number) {
  let r: number = Math.floor(lo + Math.random() * (hi - lo));

  swap(nums, r, lo);

  let i = lo + 1,
    j = hi;
  while (true) {
    while (i <= j && nums[i] < nums[lo]) {
      i++;
    }

    while (j > lo && nums[j] > nums[lo]) {
      j--;
    }

    if (i >= j) {
      break;
    }

    swap(nums, i, j);
    i++;
    j--;
  }

  swap(nums, lo, j);

  return j;
}

function swap(nums: number[], x: number, y: number) {
  let temp = nums[x];
  nums[x] = nums[y];
  nums[y] = temp;
}
