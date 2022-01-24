export default function numSubarrayProductLessThanK(
  nums: number[],
  k: number
): number {
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    let j = i;
    let product = nums[i];
    while (j < nums.length && product < k) {
      sum++;
      j++;
      product *= nums[j];
    }
  }

  return sum;
}
