export default function countBits(n: number): number[] {
  let memo: number[] = [0];
  for (let i = 1; i <= n; i++) {
    // memo[i] = memo[i & (i-1)] + 1;
    memo[i] = memo[i >> 1] + (i & 1);
  }

  return memo;
};
