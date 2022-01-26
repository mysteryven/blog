export default function findMaxLength(nums: number[]): number {
  let maxLength = 0;
  let sum = 0;

  // 如果当前sum 是 0，那其实计算的长度就是 i + 1，所以默认给了 -1
  let sumToIndex = new Map<number, number>([[0, -1]]); 

  for(let i = 0; i < nums.length; i++) {
    let num = nums[i];
    sum += (num === 0 ? -1 : 1);

    if (sumToIndex.has(sum)) {
      maxLength = Math.max(maxLength, i - sumToIndex.get(sum));
    } else {
      sumToIndex.set(sum, i);
    }
  }

  return maxLength;
};