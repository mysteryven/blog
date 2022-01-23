export default function singleNumber(nums: number[]): number {
  let ret = 0;
  const bitSums: number[] = new Array(32).fill(0);

  for (let i = 0; i < nums.length; i++) {
    let v = nums[i];
    for (let j = 0; j < 32; j++) {
      bitSums[j] = bitSums[j] + ((v >> j) & 1);
    }
  }

  for (let i = 31; i >= 0; i--) {
    ret = (ret << 1) + (bitSums[i] % 3);
  }

  return ret;
}
