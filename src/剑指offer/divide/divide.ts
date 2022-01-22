export default function divide(dividend: number, divisor: number) {
  let MAX_INT = Math.pow(2, 31) - 1;
  // -2^31 <= a, b <= 2^31 - 1
  // 最小数的绝对值比最大数大 1，所以这里要特殊兼容一下
  if (dividend === -MAX_INT - 1 && divisor === -1) {
    return MAX_INT;
  }

  let ret = 0;
  let positive = 2;

  if (divisor >= 0) { 
    positive--;
    divisor = -divisor;
  }

  if (dividend > 0) {
    positive--;
    dividend = -dividend;
  }

  while (dividend <= divisor) {
    let value = divisor;
    let partRet = 1;

    while (dividend <= value + value) {
      partRet = partRet + partRet;
      value = value + value;
    }

    dividend = dividend - value;
    ret += partRet;
  }

  return positive === 1 ? -ret : ret;
}
