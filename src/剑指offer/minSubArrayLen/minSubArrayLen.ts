export default function minSubArrayLen(target: number, nums: number[]): number {
  let min = Infinity;     
  let front = 0; 
  let sum = 0;

  for (let tail = 0; tail < nums.length; tail++) {
    sum += nums[tail];
    while(sum >= target && front <= tail) {
      min = Math.min(min, tail - front + 1);
      sum -= nums[front];
      front++;
    }
  }
  
  return min === Infinity ? 0 : min;
};