/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  if (arr.length === 1) {
    return 0;
  }
  let lo = 0;
  let hi = arr.length - 1;

  while (lo <= hi) {
    let mid = lo + ((hi - lo) >> 1);

    let v = compare(arr, mid);
    if (v === 0) {
      return mid;
    } else if (v < 0) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }

  return -1;
};

function compare(arr, index) {
  if (index === 0) {
    return 1;
  } else if (index === arr.length - 1) {
    return arr.length - 2;
  }
  let mid = arr[index];
  let left = arr[index - 1];
  let right = arr[index + 1];
  if (mid > left && mid > right) {
    return 0;
  } else if (mid > left && mid < right) {
    return 1;
  }

  return -1;
}