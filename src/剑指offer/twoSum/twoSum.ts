export default function twoSum(numbers: number[], target: number): number[] {
  let i = 0;
  let j = numbers.length - 1;
  let ret = [0, 0];

  while (i < j) {
    let v = numbers[i] + numbers[j];
    if (v === target) {
      ret = [i, j];
      break; 
    } else if (v < target) {
      i++;
    } else {
      j--;
    }
  }

  return ret;
};