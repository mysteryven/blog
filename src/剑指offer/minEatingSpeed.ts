function minEatingSpeed(piles: number[], h: number): number {
  let max = 0;
  let min = 0;
  for (let i = 0; i < piles.length; i++) {
    max = Math.max(max, piles[i]);
  }

  let left = 0;
  let right = max;

  while (left < right) {
    let mid = left + ((right - left + 1) >> 1);
    let v = computeHours(piles, mid);

    if (v > h) {
      left = mid;
    } else {
      right = mid - 1;
    }
  }

  return Math.min(left + 1, max);
}

function computeHours(piles: number[], k: number) {
  let i = 0;
  let ret = 0;

  while (i < piles.length) {
    ret += Math.floor((piles[i] + k - 1) / k);
    i++;
  }

  return ret;
}
