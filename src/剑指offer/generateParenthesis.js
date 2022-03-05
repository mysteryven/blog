/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let ret = []
  helper(n, n, '', ret)

  return ret;
};

function helper(left, right, p, result) {
  if (left === 0 && right === 0) {
    result.push(p)
    return;
  }

  if (left > 0) {
    helper(left - 1, right, p + '(', result)
  }

  if (right > left) {
    helper(left, right - 1, p + ')', result)
  }
}