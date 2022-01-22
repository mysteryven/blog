export default function addBinary(a: string, b: string): string {
  let ret = [];
  let i = a.length - 1;
  let j = b.length - 1;
  let zeroCode = '0'.charCodeAt(0);

  let carry = 0;

  while (i >= 0 || j >= 0) {
    let x = i >= 0 ? a.charCodeAt(i) - zeroCode : 0; 
    let y = j >= 0 ? b.charCodeAt(j) - zeroCode : 0; 
    let sum = x + y + carry;
    carry = sum >= 2 ? 1 : 0; 
    sum = sum >= 2 ? sum - 2 : sum;
    ret.push('' + sum);
    i--;
    j--;
  }

  if (carry === 1) {
    ret.push('1');
  }

  return ret.reverse().join('');
};
