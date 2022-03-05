/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  let ret = []

  helper(s, 0, s.length - 1, [], ret)

  return ret
};

function helper(s, start, end, p, ret) {
  if (start > end) {
    ret.push([...p])
    return;
  }

  for (let i = start; i <= end; i++) {
    let subStr = s.slice(start, i + 1);
    if (isPalindrome(subStr)) {
      p.push(subStr)
      helper(s, i + 1, end, p, ret)
      p.pop()
    }
  }
}

function isPalindrome(str) {
  let i = 0;
  let j = str.length - 1;

  while (i < j) {
    if (str[i] !== str[j]) {
      return false;
    }
    i++;
    j--;
  }

  return true;
}