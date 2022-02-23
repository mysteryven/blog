function mySqrt(x: number): number {
  let lo = 0;
  let hi = x;

  while (lo < hi) {
    let mid = lo + ((hi - lo) >> 1);
    let v = mid * mid;
    if (v > x) {
      hi = mid - 1;
    } else if ((mid + 1) * (mid + 1) > x) {
      return mid;
    } else {
      lo = mid + 1;
    }
  }

  return lo;
}
