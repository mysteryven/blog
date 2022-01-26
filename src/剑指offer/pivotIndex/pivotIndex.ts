export default function pivotIndex(nums: number[]): number {
  let total = 0; 
  let subSum = 0;
  for (let num of nums) {
    total += num;
  }

  for (let i = 0; i < nums.length; i++) {
    subSum += nums[i];
    if (subSum - nums[i] === (total - subSum)) {
      return i;
    }
  }

  return -1;
};